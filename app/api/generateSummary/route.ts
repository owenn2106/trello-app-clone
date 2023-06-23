import openai from "@/openai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { todos } = await request.json();

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    temperature: 0.8,
    n: 1, // THERE'S ONLY ONE RESPONSE
    stream: false,
    messages: [
      {
        role: "system",
        content:
          "When responding, always welcome user as Owenn Gimli and say Welcome to Gimli's Todo App. Limit the response to 200 characters.",
      },
      {
        role: "user",
        content: `Please provide the summary of the following todos. Also count how many todos there are in each category. Here's the data: ${JSON.stringify(
          todos
        )}`,
      },
    ],
  });

  const { data } = response;

  return NextResponse.json(data.choices[0].message);
}
