import { ref } from 'vue'

export const useTypeAnimation = (
  finalText: string,
  typingDelay: number,
  callback: (str: string) => void
) => {
  const featureText = ref('')

  const typeText = () => {
    let index = 0
    const intervalId = setInterval(() => {
      if (index < finalText.length) {
        featureText.value += finalText[index]
        callback(featureText.value)
        index++
      } else {
        clearInterval(intervalId)
      }
    }, typingDelay)
  }

  typeText()
}
