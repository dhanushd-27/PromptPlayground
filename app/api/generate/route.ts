import { NextRequest, NextResponse } from "next/server";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { HistoryItem } from "@/lib/types";

import {
  HumanMessage,
  AIMessage,
  SystemMessage,
} from "@langchain/core/messages";

const model = new ChatGoogleGenerativeAI({
  model: "gemini-2.5-flash",
  apiKey: process.env.GOOGLE_API_KEY,
});

const SYSTEM_PROMPT = `You are a **prompt engineering expert**.

Your task is to **analyze the user's input prompt** and assign a **score from 1 to 10** based on the following criteria:

1. **Clarity**  
   – How easy is the prompt to understand?

2. **Specificity**  
   – How precise and unambiguous is the request?

3. **Context Provided**  
   – Does the prompt include enough background or constraints?

4. **Actionability**  
   – Can the model confidently act on the prompt without making assumptions?


### Response Formatting Requirements

- The response **must be written in Markdown (.md)**
- Use **clear spacing and line breaks** between sections
- Avoid dense paragraphs; prefer short, readable blocks
- Follow **exactly** the format below:


Score: [X]/10

Reasoning:  
[Brief and clear explanation justifying the score]

---

[Your improved or actual response to the user's prompt]


### Additional Instructions

- Be concise but precise  
- Do not add extra sections outside the specified format  
- Ensure the response is easy to scan and visually clean`;

export async function POST(req: NextRequest) {
  try {
    const { userPrompt, history }: { userPrompt: string, history: HistoryItem[] } = await req.json();

    if (!userPrompt) {
      return NextResponse.json(
        { error: "userPrompt is required" },
        { status: 400 },
      );
    }

    const chatHistory = (history || []).map((msg: HistoryItem) => {
      if (msg.role === "user") {
        return new HumanMessage(msg.content);
      } else if (msg.role === "assistant") {
        return new AIMessage(msg.content);
      }
      return new HumanMessage(msg.content);
    });

    const messages = [
      new SystemMessage(SYSTEM_PROMPT),
      ...chatHistory,
      new HumanMessage(userPrompt),
    ];

    const response = await model.invoke(messages);

    return NextResponse.json({
      content: response.content,
    });
  } catch (error: unknown) {
    console.error("Error in generate route:", error);
    return NextResponse.json(
      {
        error: "Internal Server Error",
        details:
          error instanceof Error ? error.message : "An unknown error occurred",
      },
      { status: 500 },
    );
  }
}
