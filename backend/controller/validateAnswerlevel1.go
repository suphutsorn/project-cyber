// controllers/answerController.go
package controllers

import (
	"net/http"
	"strings"

	"github.com/gin-gonic/gin"
)

type AnswerRequest struct {
	Answer string `json:"answer" binding:"required"`
}

type AnswerResponse struct {
	Correct bool   `json:"correct"`
	Message string `json:"message"`
}

func ValidateAnswer(c *gin.Context) {
	var request AnswerRequest

	// ตรวจสอบว่ามีข้อมูลที่ถูกต้องหรือไม่
	if err := c.ShouldBindJSON(&request); err != nil {
		c.JSON(http.StatusBadRequest, AnswerResponse{
			Correct: false,
			Message: "กรุณากรอกคำตอบ !",
		})
		return
	}

	// ตรวจสอบคำตอบ
	correctAnswer := "hacker"
	if strings.TrimSpace(strings.ToLower(request.Answer)) == correctAnswer {
		c.JSON(http.StatusOK, AnswerResponse{
			Correct: true,
			Message: "คำตอบถูกต้อง!",
		})
	} else {
		c.JSON(http.StatusBadRequest, AnswerResponse{
			Correct: false,
			Message: "คำตอบผิด ลองใหม่อีกครั้ง!",
		})
	}
}
