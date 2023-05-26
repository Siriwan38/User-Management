package entity

import (
	"gorm.io/gorm"
)

// ตาราง SuperUser
type SuperUser struct {
	gorm.Model

	FirstName string
	LastName  string
	Email     string `gorm:"uniqueIndex"`
	Password  string `json:"-"`
	RoleID    *uint
	Role      Role `gorm:"references:id" valid:"-"`
}
