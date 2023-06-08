package controller

import (
	"net/http"

	"github.com/Siriwan38/project-app/entity"
	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
)

// GET /user/:id
// ส่งข้อมูลทั้งตัวหลักและตัวย่อยไปที่หน้าบ้านด้วย id ที่ระบุมา
func GetSuperUser(c *gin.Context) {
	var user entity.User
	id := c.Param("id")
	if err := entity.DB().Raw("SELECT * FROM users WHERE id = ?", id).
		Find(&user).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": user})
}

// POST /users
func CreateSuperUser(c *gin.Context) {
	var user entity.User

	// ผลลัพธ์ที่ได้จากขั้นตอนที่ 7 จะถูก bind เข้าตัวแปร user
	if err := c.ShouldBindJSON(&user); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	}

	// // 8: ค้นหา nameprefix ด้วย id
	// if tx := entity.DB().Table("name_prefixes").Where("id = ?", user.NamePrefixID).First(&nameprefix); tx.RowsAffected == 0 {
	// 	c.JSON(http.StatusBadRequest, gin.H{"error": "nameprefix not found"})
	// 	return
	// }

	// เข้ารหัสลับรหัสผ่านที่ผู้ใช้กรอกก่อนบันทึกลงฐานข้อมูล
	bytes, err := bcrypt.GenerateFromPassword([]byte(user.Password), 14)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "error hashing password"})
		return
	}
	user.Password = string(bytes)

	// 12: สร้าง user
	u := entity.User{
		FirstName: user.FirstName,
		LastName:  user.LastName,
		Password:  user.Password,
		Email:     user.Email,
	}

	// 13: บันทึก
	if err := entity.DB().Create(&u).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": u})
}

// GET /users
// ส่งข้อมูลทั้งตัวหลักและตัวย่อยไปหน้าบ้านทั้งหมด
func ListSuperUsers(c *gin.Context) {
	var users []entity.User
	if err := entity.DB().Raw("SELECT * FROM users").
		Find(&users).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": users})
}
