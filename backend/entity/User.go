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
	Role   Role `gorm:"references:id"`
}
type Role struct {
	gorm.Model
	Name string
	User []User `gorm:"foreignKey:RoleID"`
}
