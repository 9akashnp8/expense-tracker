
export async function getAiInsights(prompt: string) {
  const body = {
    model: "gemma:2b",
    prompt: prompt,
    stream: false,
  }
  const response = await fetch("http://localhost:11434/api/generate/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  })
  if (response.ok) {
    const data = await response.json()
    const insights = data["response"]
    return insights
  }
  return null
}