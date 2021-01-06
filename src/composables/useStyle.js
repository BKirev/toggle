import { computed, toRefs } from 'composition-api'

export default function useStyle (props, context, dependencies)
{
  const { width, height, speed, offBackground, onBackground, disabledBackground, offTextColor,
          onTextColor, disabledTextColor, fontSize, handleColor, disabledHandleColor, } = toRefs(props)

  // ============== COMPUTED ==============

  const cssVars = computed(() => {
    let cssVars = {
      '--toggle-off-background': offBackground.value,
      '--toggle-on-background': onBackground.value,
      '--toggle-disabled-background': disabledBackground.value,
      '--toggle-off-text-color': offTextColor.value,
      '--toggle-on-text-color': onTextColor.value,
      '--toggle-disabled-text-color': disabledTextColor.value,
      '--toggle-handle-color': handleColor.value,
      '--toggle-disabled-handle-color': disabledHandleColor.value,
      '--toggle-height': height.value + 'px',
      '--toggle-width': width.value + 'px',
      '--toggle-speed': (speed.value / 1000) + 's',
      '--toggle-radius': (height.value / 2) + 'px',
      '--toggle-handle-size': (height.value - 6) + 'px',
      '--toggle-handle-right-on': (height.value - 3) + 'px',
      '--toggle-font-size': fontSize.value,
    }

    return cssVars
  })

  return {
    cssVars,
  }
}