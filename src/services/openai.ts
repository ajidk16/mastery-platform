export interface Feedback {
  error?: string
  correct?: string
  native?: string
  explanation?: string
}

export interface AIResponse {
  reply: string
  feedback?: Feedback
}

const API_KEY = import.meta.env.VITE_OPENAI_API_KEY

if (!API_KEY) {
  console.warn('VITE_OPENAI_API_KEY is missing in environment variables.')
}

export async function sendMessageToAI (
  userMessage: string,
  history: { role: 'ai' | 'user', text: string }[],
): Promise<AIResponse> {
  if (!API_KEY) {
    // Fallback for demo if no key
    await new Promise(resolve => setTimeout(resolve, 1000))
    return {
      reply:
        'I can\'t connect to OpenAI right now because the API key is missing. Please check your .env file.',
      feedback: {
        error: 'API Key Missing',
        explanation:
          'Please add VITE_OPENAI_API_KEY to your environment variables.',
      },
    }
  }

  const systemPrompt = `
You are a helpful and patient English speaking tutor. Your goal is to practice business English with the user.
For each user message, provide a natural conversational reply AND feedback on their grammar/naturalness.

IMPORTANT: You must response in valid JSON format only, matching this schema:
{
  "reply": "Your conversational response here",
  "feedback": {
    "error": "The specific part of the user's sentence that was unnatural or incorrect (optional, leave null if perfect)",
    "correct": "The corrected version of that part (optional)",
    "native": "A more native/natural way to say the whole sentence (optional)",
    "explanation": "Brief explanation of why (optional)"
  }
}

If the user's English is perfect, set "error" and "correct" to null.
Keep the conversation engaging.
`

  // Convert history to OpenAI format
  const messages = [
    { role: 'system', content: systemPrompt },
    ...history.map(msg => ({
      role: msg.role === 'ai' ? 'assistant' : 'user',
      content: msg.text,
    })),
    { role: 'user', content: userMessage },
  ]

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages,
        response_format: { type: 'json_object' },
        temperature: 0.7,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.error?.message || 'OpenAI API Error')
    }

    const data = await response.json()
    const content = data.choices[0].message.content

    try {
      return JSON.parse(content) as AIResponse
    } catch {
      console.error('Failed to parse OpenAI JSON response:', content)
      return {
        reply: content, // Fallback if not JSON
        feedback: undefined,
      }
    }
  } catch (error) {
    console.error('Error calling OpenAI:', error)
    return {
      reply:
        'Sorry, I\'m having trouble connecting to my brain right now. Let\'s try again in a moment.',
      feedback: {
        explanation: 'Network or API Error occurred.',
      },
    }
  }
}
