import { onMounted, onUnmounted, ref, type Ref } from 'vue'

export const useIsVisisble = (element: Ref<HTMLElement | null>, callback: () => void) => {
  const observerCallback: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        callback()
        observer.unobserve(entry.target)
      }
    })
  }

  const observer = new IntersectionObserver(observerCallback, { threshold: 0.1 })

  onMounted(() => {
    if (element.value) {
      observer.observe(element.value)
    }
  })

  onUnmounted(() => {
    observer.disconnect()
  })
}
