import { formatTodosForAI } from "./formatTodosForAI";

export const fetchSuggestions = async (board: Board) => {
  const todos = formatTodosForAI(board);
  //   console.log("Formatted todos: ", JSON.stringify({ todos }));

  const response = await fetch("/api/generateSummary", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ todos }),
  });

  if (response.status === 200) {
    const GPTData = await response.json();
    const { content } = GPTData;

    return content;
  } else {
    return null;
  }
};
