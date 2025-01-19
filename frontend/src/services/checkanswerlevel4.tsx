const apiUrl = "http://localhost:8080";

export interface AnswerResponse {
    correct: boolean;
    message: string;
}

export const validateAnswerlevel4 = async (answer: string): Promise<AnswerResponse> => {
    const response = await fetch(`${apiUrl}/validate-answer4`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ answer }), // ส่งคำตอบในรูปแบบ JSON
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Something went wrong');
    }

    return response.json();
};
