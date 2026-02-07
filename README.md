# Prompt Playground

Prompt Playground is a powerful tool designed to help developers and AI enthusiasts understand, evaluate, and refine their system prompts. It uses AI to score prompts based on clarity, specificity, context, and actionability, providing actionable feedback for improvement.

## 🚀 Key Features

- **AI-Powered Evaluation**: Automatically scores your prompts from 1 to 10.
- **Detailed Reasoning**: Get breakdown analysis based on:
  - **Clarity**: How easy is the prompt to understand?
  - **Specificity**: How precise and unambiguous is the request?
  - **Context Provided**: Does the prompt include enough background or constraints?
  - **Actionability**: Can the model act on it without making assumptions?
- **Automated Refinement**: Receive improved versions of your prompts instantly.
- **Interactive Chat**: Experiment with prompts in a real-time chat interface with history.
- **MDX Support**: Richly formatted AI responses for better readability.

## 🛠 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Runtime**: [Bun](https://bun.sh/)
- **AI SDK**: [LangChain](https://js.langchain.com/) + [Google Generative AI](https://ai.google.dev/) (Gemini 2.5 Flash)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Content**: [MDX](https://mdxjs.com/) (next-mdx-remote)

## 🏁 Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed on your machine.
- A [Google AI SDK Key](https://aistudio.google.com/app/apikey) (Gemini API).

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/dhanushd-27/PromptPlayground.git
   cd prompt-playground
   ```

2. **Install dependencies**:

   ```bash
   bun install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory and add your Google API key:

   ```env
   GOOGLE_API_KEY=your_api_key_here
   ```

4. **Run the development server**:
   ```bash
   bun dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📜 Development Rules

- **Aesthetics First**: Ensure the UI feels premium with smooth animations and curated color palettes.
- **Rich Interaction**: Use Framer Motion for micro-animations and transitions.
- **Strict Typing**: Use TypeScript for all components and logic.
- **MDX for Output**: Always render AI responses using MDX to support rich formatting.
