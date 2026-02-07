"use client";

import React from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { MdContentCopy, MdCheck } from "react-icons/md";

export default function AssistantMessage({ message }: { message: string }) {
  const [mdxSource, setMdxSource] =
    React.useState<MDXRemoteSerializeResult | null>(null);
  const [copied, setCopied] = React.useState(false);

  const parts = message.split("---");
  const hasSeparator = parts.length > 1;

  const metadata = hasSeparator ? parts[0].trim() : "";
  const improvedPrompt = hasSeparator
    ? parts.slice(1).join("---").trim()
    : message.trim();

  React.useEffect(() => {
    if (improvedPrompt) {
      serialize(improvedPrompt).then(setMdxSource);
    }
  }, [improvedPrompt]);

  const handleCopy = () => {
    navigator.clipboard.writeText(improvedPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="py-2 px-4 max-w-[90%] md:max-w-[80%] flex flex-col gap-4">
      {/* Metadata Section - Score and Reasoning */}
      {metadata && (
        <div className="text-neutral-400 text-sm whitespace-pre-wrap leading-relaxed">
          {metadata}
        </div>
      )}

      {/* Improved Prompt Section - MDX with Copy Button */}
      <div className="relative group bg-neutral-900/50 border border-neutral-800 rounded-xl p-4 transition-all hover:border-neutral-700">
        <div className="flex justify-between items-start mb-2">
          <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-bold">
            Improved Prompt
          </span>
          <button
            onClick={handleCopy}
            className="p-1.5 rounded-md bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700 transition-all focus:ring-2 focus:ring-neutral-600 outline-none"
            title="Copy to clipboard"
          >
            {copied ? (
              <div className="flex items-center gap-1.5 px-1">
                <MdCheck className="text-green-500 size-4" />
                <span className="text-[10px] font-medium text-green-500">
                  Copied!
                </span>
              </div>
            ) : (
              <div className="flex items-center gap-1.5 px-1">
                <MdContentCopy className="size-4" />
                <span className="text-[10px] font-medium">Copy</span>
              </div>
            )}
          </button>
        </div>

        <div className="prose prose-invert prose-blue prose-sm max-w-none">
          {mdxSource && <MDXRemote {...mdxSource} />}
          {!mdxSource && (
            <p className="text-neutral-500 animate-pulse">
              Processing prompt...
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
