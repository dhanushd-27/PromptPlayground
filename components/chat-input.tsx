"use client";

import React from "react";
import Alert from "./ui/alert";
import { useAppSelector } from "@/lib/hooks/redux";
import NewChat from "./new-chat";
import { useChat } from "@/lib/hooks/useChat";
import { MessageTextarea } from "./ui/message-textarea";
import { SendButton } from "./ui/send-button";

export default function ChatInput() {
  const { message, setMessage, showAlert, setShowAlert, sendMessage } =
    useChat();
  const isChatActive = useAppSelector((state) => state.chatActive.value);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      <div className="w-full rounded-2xl bg-white/5 border border-white/10 p-2 flex gap-3 items-end shadow-2xl backdrop-blur-xl transition-all hover:border-white/20 group focus-within:border-white/30">
        <MessageTextarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        {isChatActive && <NewChat />}
        <SendButton onClick={sendMessage} />
      </div>
      <Alert
        message="Please enter a message before sending."
        type="error"
        isVisible={showAlert}
        onClose={() => setShowAlert(false)}
      />
    </>
  );
}
