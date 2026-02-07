"use client";

import React from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

export default function AssistantMessage({ message }: { message: string }) {
  const [mdxSource, setMdxSource] =
    React.useState<MDXRemoteSerializeResult | null>(null);

  React.useEffect(() => {
    serialize(message).then(setMdxSource);
  }, [message]);

  return (
    <div className="py-2 px-4 max-w-[80%] prose prose-invert prose-sm">
      {mdxSource && <MDXRemote {...mdxSource} />}
    </div>
  );
}
