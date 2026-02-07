import { createSlice } from "@reduxjs/toolkit";

interface ChatActiveState {
  value: boolean
}

const initialState: ChatActiveState = {
  value: false
}

const ChatActiveSlice = createSlice({
  name: "chatActive",
  initialState,
  reducers: {
    setIsChatActive: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { setIsChatActive } = ChatActiveSlice.actions
export default ChatActiveSlice.reducer