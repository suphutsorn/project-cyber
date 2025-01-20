// services/checkanswerlevel5.ts
const apiUrl = "http://localhost:8080";

export interface Level3Response {
  correct: boolean;
  message: string;
}

export const validateAnswerLevel3 = async (answer: string): Promise<Level3Response> => {
  const response = await fetch(`${apiUrl}/validate-level3`, {
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
