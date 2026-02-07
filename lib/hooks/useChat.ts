"use client";

import React from "react";
import { useAppDispatch } from "@/lib/hooks/redux";
import {
  setIsChatActive,
  setIsGenerating,
} from "@/lib/store/slices/ChatActiveSlice";
import { HistoryItem } from "@/lib/types";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export function useChat() {
  const [message, setMessage] = React.useState("");
  const [showAlert, setShowAlert] = React.useState(false);
  const dispatch = useAppDispatch();

  const sendMessage = async () => {
    const trimmedMessage = message.trim();
    if (trimmedMessage !== "") {
      dispatch(setIsChatActive(true));
      dispatch(setIsGenerating(true));
      setMessage("");
      setShowAlert(false);

      const currentHistory = getLocalStorage<HistoryItem[]>("history", []);
      const userMessage: HistoryItem = {
        role: "user",
        content: trimmedMessage,
      };
      const updatedHistoryWithUser = [...currentHistory, userMessage];

      setLocalStorage("history", updatedHistoryWithUser);
      window.dispatchEvent(new Event("storage_update"));

      try {
        const response = await fetch("/api/generate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userPrompt: trimmedMessage,
            history: updatedHistoryWithUser,
          }),
        });

        if (!response.ok) throw new Error("Failed to fetch response");

        const data = await response.json();
        const assistantMessage: HistoryItem = {
          role: "assistant",
          content: data.content,
        };

        const finalHistory = [...updatedHistoryWithUser, assistantMessage];
        setLocalStorage("history", finalHistory);

        window.dispatchEvent(new Event("storage_update"));
      } catch (error) {
        console.error("Chat error:", error);
      } finally {
        dispatch(setIsGenerating(false));
      }
    } else {
      setShowAlert(true);
      const timer = setTimeout(() => setShowAlert(false), 3000);
      return () => clearTimeout(timer);
    }
  };

  return {
    message,
    setMessage,
    showAlert,
    setShowAlert,
    sendMessage,
  };
}
