import { combineReducers, configureStore } from "@reduxjs/toolkit"

import { apiSlice } from "@/modules/redux/slices/api-slice"
import modalReducer from "@/modules/ui/modal/redux/modal-slice"

const reducers = combineReducers({
  modal: modalReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
})

export const makeStore = () => {
  return configureStore({
    reducer: reducers,
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>
export type AppDispatch = AppStore["dispatch"]
