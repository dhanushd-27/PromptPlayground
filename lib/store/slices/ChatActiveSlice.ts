import { createSlice } from "@reduxjs/toolkit";

interface ChatActiveState {
  value: boolean;
  isGenerating: boolean;
}

const initialState: ChatActiveState = {
  value: false,
  isGenerating: false,
};

const ChatActiveSlice = createSlice({
  name: "chatActive",
  initialState,
  reducers: {
    setIsChatActive: (state, action) => {
      state.value = action.payload;
    },
    setIsGenerating: (state, action) => {
      state.isGenerating = action.payload;
    },
  },
});

export const { setIsChatActive, setIsGenerating } = ChatActiveSlice.actions;
export default ChatActiveSlice.reducer;
