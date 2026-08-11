/** Speak a short phrase using the browser speech API when available. */
export function speak(text: string) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return

  window.speechSynthesis.cancel()
  const utterance = new SpeechSynthesisUtterance(text)
  utterance.rate = 0.9
  utterance.pitch = 1.05
  utterance.lang = 'en-US'
  window.speechSynthesis.speak(utterance)
}
