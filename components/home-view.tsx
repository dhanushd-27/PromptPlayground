"use client";

import React from "react";
import ChatInput from "./chat-input";
import { motion } from "framer-motion";

export default function HomeView() {
  return (
    <motion.div
      className="w-full flex flex-col items-center gap-6"
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 999 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div className="flex flex-col items-center gap-2">
        <h3 className="text-xl md:text-2xl font-bold text-white">Prompt Playground</h3>
        <p className="text-sm md:text-base max-w-2xl text-center text-neutral-500">Prompt playground is a tool to evaluate your prompt and score it and improve it</p>
      </div>
      <ChatInput />
    </motion.div>
  );
}
