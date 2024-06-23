import { ref, onMounted, onBeforeUnmount, type Ref } from 'vue'

export function useTooltip(
  tooltipContainer: Ref<HTMLElement | null>,
  tooltipContent: Ref<HTMLElement | null>
) {
  const visible = ref(false)
  const tooltipStyles = ref({})

  const showTooltip = () => {
    updateTooltipPosition()
    visible.value = true
  }

  const hideTooltip = () => {
    visible.value = false
  }

  const updateTooltipPosition = () => {
    if (tooltipContainer.value && tooltipContent.value) {
      const containerRect = tooltipContainer.value.getBoundingClientRect()
      const contentRect = tooltipContent.value.getBoundingClientRect()

      tooltipStyles.value = {
        left: `${containerRect.width / 2 - contentRect.width / 2}px`
      }
    }
  }

  onMounted(() => {
    window.addEventListener('scroll', updateTooltipPosition)
    window.addEventListener('resize', updateTooltipPosition)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', updateTooltipPosition)
    window.removeEventListener('resize', updateTooltipPosition)
  })

  return {
    showTooltip,
    hideTooltip,
    visible,
    tooltipStyles
  }
}
