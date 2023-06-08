package entity

import (
	"golang.org/x/crypto/bcrypt"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var db *gorm.DB

func DB() *gorm.DB {
	return db
}

func SetupDatabase() {

	database, err := gorm.Open(sqlite.Open("Usermanagement.db"), &gorm.Config{})

	if err != nil {

		panic("failed to connect database")

	}

	// Migrate the schema

	database.AutoMigrate(&User{}, &Role{})

	db = database
	role1 := Role{
		Name: "Admin",
	}
	db.Model(&Role{}).Create(&role1)

	db = database
	role2 := Role{
		Name: "Superuser",
	}
	db.Model(&Role{}).Create(&role2)

	db = database
	role3 := Role{
		Name: "User",
	}
	db.Model(&Role{}).Create(&role3)
	// Employee --------------------------------------------------------------------------------------------------------

	//User ------------------------------
	password, err := bcrypt.GenerateFromPassword([]byte("123456"), 14)

	user1 := User{
		FirstName: "Taylor",
		LastName:  "Swift",
		Email:     "ADD@gmail.com",
		Password:  string(password),
		Role:      role3,
	}
	db.Model(&User{}).Create(&user1)

	user2 := User{
		FirstName: "Suphawut",
		LastName:  "Thueanklang",
		Email:     "BB@gmail.com",
		Password:  string(password),
		Role:      role2,
	}
	db.Model(&User{}).Create(&user2)

	user3 := User{
		FirstName: "Suphawut",
		LastName:  "Thueanklang",
		Email:     "AA@gmail.com",
		Password:  string(password),
		Role:      role1,
	}
	db.Model(&User{}).Create(&user3)

}
