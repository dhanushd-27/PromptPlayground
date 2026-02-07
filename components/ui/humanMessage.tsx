import React from 'react'

export default function HumanMessage({ message }: { message: string }) {
  return (
    <div
      className="py-2 px-4 max-w-[80%]  rounded-lg bg-neutral-700 border border-neutral-700 text-neutral-100"
    >
      {message}
    </div>
  )
}
