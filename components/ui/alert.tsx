"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";

export default function Alert({
  message,
  type,
  isVisible,
  onClose,
}: {
  message: string;
  type: "success" | "error" | "warning" | "info";
  isVisible: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className={`fixed bottom-6 right-6 z-50 min-w-75 border shadow-2xl rounded-2xl overflow-hidden backdrop-blur-xl ${
            type === "success"
              ? "bg-green-500/20 border-green-500/50 text-green-200"
              : type === "error"
                ? "bg-red-500/20 border-red-500/50 text-red-200"
                : type === "warning"
                  ? "bg-yellow-500/20 border-yellow-500/50 text-yellow-200"
                  : "bg-blue-500/20 border-blue-500/50 text-blue-200"
          }`}
        >
          <div className="flex items-center justify-between px-4 py-3">
            <p className="text-sm font-medium">{message}</p>
            <button
              onClick={onClose}
              className="ml-4 text-white/50 hover:text-white transition-colors"
            >
              <IoClose size={16} />
            </button>
          </div>
          <motion.div
            initial={{ width: "100%" }}
            animate={{ width: "0%" }}
            transition={{ duration: 3, ease: "linear" }}
            className={`h-0.5 ${
              type === "success"
                ? "bg-green-500"
                : type === "error"
                  ? "bg-red-500"
                  : type === "warning"
                    ? "bg-yellow-500"
                    : "bg-blue-500"
            }`}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
