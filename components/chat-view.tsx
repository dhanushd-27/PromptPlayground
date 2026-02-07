"use client";

import React from "react";
import ChatInput from "./chat-input";
import { motion } from "framer-motion";
import AssistantMessage from "./ui/assistantMessage";
import HumanMessage from "./ui/humanMessage";

export default function ChatView() {

  const messages = [
    {
      role: "assistant",
      content: "Hello! How can I help you today?",
    },
    {
      role: "human",
      content: "Here is my prompt - 'You are a AI Chatbot, responsible for fixing my mathematics equation - Fix the equation and give the right answer'",
    },
  ];

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
        </div>
      </div>
      <ChatInput />
    </motion.div>
  );
}
