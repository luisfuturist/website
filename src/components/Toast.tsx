import { useComputed, useSignal, useSignalEffect } from '@preact/signals'
import clsx from 'clsx'
import { INITIAL_STATE, toast, type ToastState, type ToastType } from '../store'
import { useEffect } from 'preact/hooks'
import Icon from './Icon'

const Toast = () => {
  const state = useComputed<ToastState>(() => {
    const data = toast.value

    return {
      message: data.message,
      type: data.type || 'success',
      visible: data.visible,
      duration: data.duration ?? INITIAL_STATE.duration
    }
  })
  const timer = useSignal<any>(0)

  const clearToast = () => {
    toast.value = { ...toast.value, visible: false }
  }

  useSignalEffect(() => {
    const data = state.value

    if (data.visible) {
      timer.value = setTimeout(clearToast, data.duration)
    }
  })

  useEffect(() => {
    return () => {
      clearTimeout(timer.value)
    }
  }, [])

  const icons: Record<ToastType, string> = {
    success: 'check',
    error: 'exclamation-diamond',
    info: 'info-circle',
    warning: 'exclamation-triangle'
  }

  return (
    <div
      className={clsx(
        'flex gap-1 fixed rounded-lg bg-white/60 dark:bg-azure-1/60 backdrop-blur-sm bottom-4 right-4 px-4 py-2 z-50 transition-opacity duration-300 shadow-lg text-xs',
        {
          'text-green-1 dark:text-green-6': state.value?.type === 'success',
          'text-red-1 dark:text-red-6': state.value?.type === 'error',
          'text-orange-1 dark:text-orange-6': state.value?.type === 'warning',
          'text-blue-1 dark:text-blue-6': state.value?.type === 'info',
        },
        state.value?.visible ? 'opacity-100' : 'opacity-0'
      )}>
      <Icon name={icons[state.value.type || 'info'] || icons.info} />
      <span>{state.value?.message}</span>
    </div >
  )
}

export default Toast
