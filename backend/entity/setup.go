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

	database, err := gorm.Open(sqlite.Open("sa-65.db"), &gorm.Config{})

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
	password1, err := bcrypt.GenerateFromPassword([]byte("123456"), 14)
	admin1 := User{
		FirstName: "Siri",
		LastName:  "OK",
		Email:     "Siri@gmail.com",
		Password:  string(password1),
		Role:      role1,
	}
	db.Model(&User{}).Create(&admin1)

	password2, err := bcrypt.GenerateFromPassword([]byte("456789"), 14)
	superuser1 := User{
		FirstName: "Araya",
		LastName:  "OK",
		Email:     "Ay@gmail.com",
		Password:  string(password2),
		Role:      role2,
	}
	db.Model(&User{}).Create(&superuser1)

	//User ------------------------------
	password3, err := bcrypt.GenerateFromPassword([]byte("123456"), 14)

	user1 := User{
		FirstName: "Suphawut",
		LastName:  "Thueanklang",
		Email:     "ADD@gmail.com",
		Password:  string(password3),
		Role:      role3,
	}
	db.Model(&User{}).Create(&user1)

}
