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

      let left = containerRect.width / 2 - contentRect.width / 2

      console.log()

      if (containerRect.left + left < 0) {
        left = -containerRect.left
      } else if (
        containerRect.right + (contentRect.width - containerRect.width) / 2 >
        window.innerWidth
      ) {
        left = -(containerRect.width / 2)
      } else if (containerRect.left + left + contentRect.width > window.innerWidth) {
        left = window.innerWidth - containerRect.left - contentRect.width
      }

      tooltipStyles.value = {
        left: `${left}px`
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
