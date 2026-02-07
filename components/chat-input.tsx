"use client";

import React from "react";
import { motion } from "framer-motion";

import { IoSend } from "react-icons/io5";
import Alert from "./ui/alert";
import { useAppDispatch } from "@/lib/hooks/redux";
import { setIsChatActive } from "@/lib/store/slices/ChatActiveSlice";

export default function ChatInput() {
  const [message, setMessage] = React.useState("");
  const [showAlert, setShowAlert] = React.useState(false);
  const dispatch = useAppDispatch();

  const sendMessage = () => {
    if (message.trim() !== "") {
      dispatch(setIsChatActive(true));
      setMessage("");
      setShowAlert(false);
    } else {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    }
  };

  return (
    <>
      <div className="w-full rounded-2xl bg-white/5 border border-white/10 p-2 flex gap-3 items-end shadow-2xl backdrop-blur-xl transition-all hover:border-white/20 group focus-within:border-white/30">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              sendMessage();
            }
          }}
          placeholder="Type a message..."
          className="w-full min-h-11 max-h-48 py-2.5 px-3 resize-none outline-none bg-transparent text-white placeholder:text-neutral-500 text-sm leading-relaxed"
        />
        <motion.button
          onClick={sendMessage}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-10 h-10 rounded-xl bg-white text-black flex items-center justify-center cursor-pointer hover:bg-neutral-200 transition-colors shadow-lg active:scale-95"
        >
          <IoSend size={16} className="ml-0.5" />
        </motion.button>
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
