import { type TypedUseSelectorHook, useDispatch, useSelector, useStore } from "react-redux"

import { type AppDispatch, type AppStore, type RootState } from "@/modules/redux/store"

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppStore: () => AppStore = useStore
