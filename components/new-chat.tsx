"use client";

import React from "react";
import { useAppDispatch } from "@/lib/hooks/redux";
import { setIsChatActive } from "@/lib/store/slices/ChatActiveSlice";
import { removeLocalStorage } from "@/lib/utils/localStorage";

export default function NewChat() {
  const dispatch = useAppDispatch();
  const handleNewChat = () => {
    removeLocalStorage("history");
    dispatch(setIsChatActive(false));
    window.dispatchEvent(new Event("storage_update"));
  };
  return (
    <button
      onClick={handleNewChat}
      className="px-4 py-2 rounded-xl bg-transparent hover:bg-neutral-200 text-white transition-all duration-300 hover:text-neutral-800 shrink-0"
    >
      + New Chat
    </button>
  );
}
