package entity

import (
	"time"

	"gorm.io/gorm"
)

// ตาราง SuperUser
type SuperUser struct {
	gorm.Model
	/* FirstName string
	LastName  string
	Email     string
	Age       uint8
	BirthDsy  time.Time */

	NamePrefixID *uint
	NamePrefix   NamePrefix `gorm:"references:ID"`

	FirstName string
	LastName  string

	BirthDay       time.Time
	Identification string `gorm:"uniqueIndex"`
	Email          string `gorm:"uniqueIndex"`
	Password       string `json:"-"`

	GenderID *uint
	Gender   Gender `gorm:"references:ID"`

	Mobile  string `gorm:"uniqueIndex"`
	Address string

	ProvinceID *uint
	Province   Province `gorm:"references:ID"`

	EmployeeID *uint
	Employee   Employee `gorm:"references:ID"`
}
