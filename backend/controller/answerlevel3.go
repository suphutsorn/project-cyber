package controllers

import (
	"net/http"
	"strings"

	"github.com/gin-gonic/gin"
)

// AnswerRequest ใช้รับข้อมูลคำตอบจากผู้ใช้
type AnswerRequest3 struct {
	Answer string `json:"answer" binding:"required"`
}

// AnswerResponse ใช้ส่งผลลัพธ์กลับไปยังผู้ใช้
type AnswerResponse3 struct {
	Correct bool   `json:"correct"`
	Message string `json:"message"`
}

// ValidateAnswerLevel3 ฟังก์ชันสำหรับตรวจสอบคำตอบ
func ValidateAnswerLevel3(c *gin.Context) {
	var request AnswerRequest3

	// ตรวจสอบว่า JSON ที่ส่งมานั้นถูกต้องหรือไม่
	if err := c.ShouldBindJSON(&request); err != nil {
		c.JSON(http.StatusBadRequest, AnswerResponse3{
			Correct: false,
			Message: "⚠️ กรุณากรอกคำตอบ!", // ส่งข้อความแจ้งเตือนเมื่อไม่มีข้อมูลคำตอบ
		})
		return
	}

	// คำตอบที่ถูกต้อง
	correctAnswer := " SuranareeUniversityOfTechnology"

	// ตรวจสอบคำตอบโดยการแปลงเป็นตัวพิมพ์เล็ก และตัดช่องว่าง
	if strings.TrimSpace(strings.ToLower(request.Answer)) == strings.TrimSpace(strings.ToLower(correctAnswer)) {
		c.JSON(http.StatusOK, AnswerResponse3{
			Correct: true,
			Message: "🎉 คำตอบถูกต้อง! ยินดีต้อนรับสู่ Level ถัดไป!", // ส่งข้อความเมื่อคำตอบถูกต้อง
		})
	} else {
		c.JSON(http.StatusOK, AnswerResponse3{
			Correct: false,
			Message: "❌ คำตอบผิด ลองใหม่อีกครั้ง!", // ส่งข้อความเมื่อคำตอบไม่ถูกต้อง
		})
	}
}
