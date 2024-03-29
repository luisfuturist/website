import { signal } from "@preact/signals";
import type { Theme } from "../lib/design/theme/types";

export type ToastType = 'success' | 'warning' | 'info' | 'error'

export interface ToastState {
  message: string
  visible: boolean
  type?: ToastType
  duration?: number
}

export const INITIAL_STATE: ToastState = {
  message: '',
  visible: false,
  type: 'success',
  duration: 3000,
}

export const toast = signal<ToastState>(INITIAL_STATE)
export const theme = signal<Theme | null>(null)
