import { action } from "@solidjs/router";

export const submitAnswer = action(async (answer: string): Promise<boolean> => {
  "use server";
  if (typeof answer !== "string") {
    throw new Error("Missing or invalid answer provided");
  }

  return true;
});
