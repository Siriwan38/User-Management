package entity

import (
	"gorm.io/gorm"
)

// ตาราง Admin
type Admin struct {
	gorm.Model
	FirstName string
	LastName  string
	Email     string `gorm:"uniqueIndex"`
	Password  string
}
