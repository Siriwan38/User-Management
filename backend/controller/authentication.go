package controller

import (
	"fmt"
	"net/http"

	"github.com/Siriwan38/project-app/entity"
	"github.com/Siriwan38/project-app/service"
	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
)

// LoginPayload login body
type LoginPayload struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

// LoginResponse token response
type LoginResponse struct {
	Token string `json:"token"`
	Role  string `json:"role"`
}

// POST /login/user
func LoginUser(c *gin.Context) {
	var payload LoginPayload
	var user entity.User
	var role entity.Role
	// ผลลัพธ์ที่ได้จากการ login จะถูก bind เข้าตัวแปร payload
	if err := c.ShouldBindJSON(&payload); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	// ค้นหา user ด้วย email ที่ผู้ใช้กรอกเข้ามา
	if err := entity.DB().Preload("roles").Raw("SELECT * FROM users WHERE email = ?", payload.Email).Scan(&user).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if err := entity.DB().Raw("SELECT * FROM roles WHERE id = ?", user.RoleID).Scan(&role).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// ตรวจสอบรหัสผ่าน

	err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(payload.Password))
	fmt.Printf("%v", user.Password)
	fmt.Printf("%v", payload.Password)
	fmt.Printf("%v", err)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid user credentials"})
		return
	}

	jwtWrapper := service.JwtWrapper{
		SecretKey:       "SvNQpBN8y3qlVrsGAYYWoJJk56LtzFHx",
		Issuer:          "AuthService",
		ExpirationHours: 24,
	}

	signedToken, err := jwtWrapper.GenerateToken(user.Email)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "error signing token"})
		return
	}

	tokenResponse := LoginResponse{
		Token: signedToken,

		Role: role.Name,
	}

	c.JSON(http.StatusOK, gin.H{"data": tokenResponse})
}
