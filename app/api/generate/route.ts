import { NextRequest, NextResponse } from "next/server";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import {
  HumanMessage,
  AIMessage,
  SystemMessage,
} from "@langchain/core/messages";

const model = new ChatGoogleGenerativeAI({
  model: "gemini-2.5-flash",
  apiKey: process.env.GOOGLE_API_KEY,
});

const SYSTEM_PROMPT = `You are a prompt engineering expert. 
Your task is to analyze the user's input prompt and score it from 1 to 10 based on:
1. Clarity
2. Specificity
3. Context provided
4. Actionability

Provide your response in the following format:
Score: [X]/10
Reasoning: [Brief explanation]
---
[Your actual response to the user's prompt]`;

interface Message {
  role: "user" | "assistant";
  content: string;
}

export async function POST(req: NextRequest) {
  try {
    const { userPrompt, history } = await req.json();

    if (!userPrompt) {
      return NextResponse.json(
        { error: "userPrompt is required" },
        { status: 400 },
      );
    }

    const chatHistory = (history || []).map((msg: Message) => {
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
