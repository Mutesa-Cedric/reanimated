import { type RefCallback, useCallback, useState } from 'react'
import reanimate from './reanimate'
import type { AnimateOptions, AnimationController, AnimationPlugin } from '@/types'

export default function useReanimated<T extends Element>(
  options: Partial<AnimateOptions | AnimationPlugin>,
): [RefCallback<T>, (enabled: boolean) => void] {
  const [controller, setConroller] = useState<AnimationController | undefined>()

  const element = useCallback((ele: T) => {
    if (ele instanceof HTMLElement)
      setConroller(reanimate(ele, options))
    else
      setConroller(undefined)
  }, [options])

  const setEnabled = useCallback((enabled: boolean) => {
    if (controller)
      enabled ? controller.enable() : controller.disable()
  }, [controller])

  return [element, setEnabled]
}
