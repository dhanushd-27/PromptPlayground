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
      <p className="text-2xl font-bold text-white">Prompt Playground</p>
      <ChatInput />
    </motion.div>
  );
}
