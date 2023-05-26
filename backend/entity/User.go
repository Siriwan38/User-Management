package entity

import (
	"gorm.io/gorm"
)

// ตาราง User
type User struct {
	gorm.Model
	FirstName string
	LastName  string
	Email     string `gorm:"uniqueIndex"`
	Password  string `json:"-"`

	RoleID *uint
	Role   Role `gorm:"references:id" valid:"-"`
}
