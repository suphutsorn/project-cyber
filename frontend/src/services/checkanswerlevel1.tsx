
const apiUrl = "http://localhost:8080";
// services/answerService.ts
export interface AnswerResponse {
    correct: boolean;
    message: string;
  }
  
  export const validateAnswer = async (answer: string): Promise<AnswerResponse> => {
    const response = await fetch(`${apiUrl}/validate-answer`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ answer }),
    });
  
    if (!response.ok) {
      const errorData = await response.json();

      throw new Error(errorData.message || 'Something went wrong');
    }
  
    return response.json();
  };
  