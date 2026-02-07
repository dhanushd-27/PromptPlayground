import React from 'react'

export default function AssistantMessage({ message }: { message: string }) {
  return (
    <div
      className="py-2 px-4 max-w-[80%]"
    >
      {message}
    </div>
  )
}
