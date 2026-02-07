"use client";

import React from "react";
import ChatInput from "./chat-input";
import { motion } from "framer-motion";
import AssistantMessage from "./ui/assistantMessage";
import HumanMessage from "./ui/humanMessage";
import MessageSkeleton from "./ui/message-skeleton";
import { HistoryItem } from "@/lib/types";
import { useAppSelector } from "@/lib/hooks/redux";

import { getLocalStorage } from "@/lib/utils/localStorage";

export default function ChatView() {
  const [messages, setMessages] = React.useState<HistoryItem[]>([]);
  const isGenerating = useAppSelector((state) => state.chatActive.isGenerating);

  React.useEffect(() => {
    const updateMessages = () => {
      setMessages(getLocalStorage<HistoryItem[]>("history", []));
    };

    updateMessages();
    window.addEventListener("storage_update", updateMessages);
    return () => window.removeEventListener("storage_update", updateMessages);
  }, []);

  return (
    <motion.div
      className="w-full h-full flex flex-col"
      initial={{ opacity: 0, y: 999, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95, y: 999 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="flex-1 overflow-y-auto mb-4 bg-white/5 rounded-2xl border border-white/10 p-4 backdrop-blur-xl">
        <p className="text-neutral-500 italic text-sm pb-4">
          Chat session started.
        </p>
        <div className="flex flex-col gap-4">
          {messages.map((message, index) => (
            <React.Fragment key={index}>
              {message.role === "assistant" ? (
                <div className="w-full flex items-center justify-start">
                  <AssistantMessage message={message.content} />
                </div>
              ) : (
                <div className="w-full flex items-center justify-end">
                  <HumanMessage message={message.content} />
                </div>
              )}
            </React.Fragment>
          ))}
          {isGenerating && <MessageSkeleton />}
        </div>
      </div>
      <ChatInput />
    </motion.div>
  );
}
