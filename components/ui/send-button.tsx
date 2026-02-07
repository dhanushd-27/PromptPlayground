import React from "react";
import { motion } from "framer-motion";
import { IoSend } from "react-icons/io5";

interface SendButtonProps {
  onClick: () => void;
}

export function SendButton({ onClick }: SendButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="w-10 h-10 rounded-xl bg-white text-black flex items-center justify-center cursor-pointer hover:bg-neutral-200 transition-colors shadow-lg active:scale-95"
    >
      <IoSend size={16} className="ml-0.5" />
    </motion.button>
  );
}
