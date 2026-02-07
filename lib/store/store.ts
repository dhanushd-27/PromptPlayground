import { configureStore } from "@reduxjs/toolkit";
import ChatActiveReducer from "@/lib/store/slices/ChatActiveSlice"

export const store = configureStore({
  reducer: {
    chatActive: ChatActiveReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch