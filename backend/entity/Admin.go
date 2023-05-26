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
	RoleID    *uint
	Role      Role `gorm:"references:id" valid:"-"`
}
type Role struct {
	gorm.Model
	Name  string
	Admin []Admin `gorm:"foreignKey:RoleID"`
}
