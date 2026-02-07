import React from "react";
import { motion } from "framer-motion";

export default function MessageSkeleton() {
  return (
    <div className="w-full flex items-center justify-start">
      <div className="py-2 px-4 max-w-[80%] flex flex-col gap-2">
        <motion.div
          className="h-4 w-48 bg-white/10 rounded"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="h-4 w-32 bg-white/10 rounded"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.2,
          }}
        />
      </div>
    </div>
  );
}
