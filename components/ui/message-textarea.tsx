import React from "react";

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
  return (
    <textarea
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      className="flex-1 min-h-11 max-h-48 py-2.5 px-3 resize-none outline-none bg-transparent text-white placeholder:text-neutral-500 text-sm leading-relaxed"
    />
  );
}
