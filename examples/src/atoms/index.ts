import { atom } from 'recoil'

export const activeExampleState = atom<'todo' | 'dropdown' | 'custom'>({
  key: 'activeExampleState',
  default: 'todo',
})
