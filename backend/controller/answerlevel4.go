package controllers

import (
	"net/http"
	"strings"

	"github.com/gin-gonic/gin"
)

// AnswerRequest ใช้รับข้อมูลคำตอบจากผู้ใช้
type AnswerRequest4 struct {
	Answer string `json:"answer" binding:"required"`
}

// AnswerResponse ใช้ส่งผลลัพธ์กลับไปยังผู้ใช้
type AnswerResponse4 struct {
	Correct bool   `json:"correct"`
	Message string `json:"message"`
}

// ValidateAnswer ฟังก์ชันสำหรับตรวจสอบคำตอบ
func ValidateAnswerlevel4(c *gin.Context) {
	var request AnswerRequest4

	// ตรวจสอบว่า JSON ที่ส่งมานั้นถูกต้องหรือไม่
	if err := c.ShouldBindJSON(&request); err != nil {
		c.JSON(http.StatusBadRequest, AnswerResponse4{
			Correct: false,
			Message: "กรุณากรอกคำตอบ !", // ส่งข้อความแจ้งเตือนเมื่อไม่มีข้อมูลคำตอบ
		})
		return
	}

	// คำตอบที่ถูกต้อง
	correctAnswer := "ENG23 4041"

	// ตรวจสอบคำตอบโดยการแปลงเป็นตัวพิมพ์เล็ก และตัดช่องว่าง
	if strings.TrimSpace(strings.ToLower(request.Answer)) == strings.TrimSpace(strings.ToLower(correctAnswer)) {
		c.JSON(http.StatusOK, AnswerResponse4{
			Correct: true,
			Message: "คำตอบถูกต้อง!", // ส่งข้อความเมื่อคำตอบถูกต้อง
		})
	} else {
		c.JSON(http.StatusOK, AnswerResponse4{
			Correct: false,
			Message: "คำตอบผิด ลองใหม่อีกครั้ง!", // ส่งข้อความเมื่อคำตอบไม่ถูกต้อง
		})
	}
}
