import { create } from 'zustand'

export const useStore = create((set) => ({
  news: {},
  setNews: (data: any) => set(() => ({news: data})),
}))
