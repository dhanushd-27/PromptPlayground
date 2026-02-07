import React, { useRef, useEffect } from "react";

interface MessageTextareaProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
}

export function MessageTextarea({
  value,
  onChange,
  onKeyDown,
  placeholder = "Type a message...",
}: MessageTextareaProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      // Reset height to auto to get the correct scrollHeight
      textareaRef.current.style.height = "auto";
      // Set height based on scrollHeight
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]);

  return (
    <textarea
      ref={textareaRef}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      rows={1}
      className="flex-1 min-h-11 max-h-48 py-3 px-3 resize-none outline-none bg-transparent text-white placeholder:text-neutral-500 text-sm leading-relaxed overflow-y-auto transition-[height] duration-200"
    />
  );
}
