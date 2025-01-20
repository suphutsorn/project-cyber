package main

import (
	"cyber/controller" // ปรับ path ตามโครงสร้างโปรเจกต์
	"github.com/gin-gonic/gin"
)

func main() {
	// สร้าง Gin router
	r := gin.Default()

	// Middleware เพื่อรองรับ CORS
	r.Use(func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type")
		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(200)
			return
		}
		c.Next()
	})

	// Register routes
	r.POST("/validate-answer", controllers.ValidateAnswer)
	r.POST("/validate-level3", controllers.ValidateAnswerLevel3)
	r.POST("/validate-answer4", controllers.ValidateAnswerlevel4)
	r.POST("/validate-level5", controllers.ValidateAnswerLevel5)
	r.POST("/validate-level6", controllers.ValidateAnswerLevel6)

	// เริ่มเซิร์ฟเวอร์ที่พอร์ต 8080
	r.Run(":8080")
}
