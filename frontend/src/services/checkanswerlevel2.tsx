// services/checkanswerlevel5.ts
const apiUrl = "http://localhost:8080";

export interface Level2Response {
  correct: boolean;
  message: string;
}

export const validateAnswerLevel2 = async (answer: string): Promise<Level2Response> => {
  const response = await fetch(`${apiUrl}/validate-level2`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ answer }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "An error occurred while validating the answer.");
  }

  return response.json();
};
