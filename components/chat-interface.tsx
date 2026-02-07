"use client";

import React from "react";
import HomeView from "./home-view";
import ChatView from "./chat-view";
import { AnimatePresence } from "framer-motion";
import { useAppSelector } from "@/lib/hooks/redux";

export default function ChatInterface() {
  const chatActive = useAppSelector((state) => state.chatActive.value);

  return (
    <div className="w-full max-w-4xl h-full flex flex-col justify-center">
      <AnimatePresence mode="wait">
        {!chatActive ? <HomeView key="home" /> : <ChatView key="chat" />}
      </AnimatePresence>
    </div>
  );
}
