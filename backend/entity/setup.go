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

	database.AutoMigrate(&User{}, &Admin{}, &SuperUser{}, &Gender{}, &NamePrefix{})

	db = database
	// Employee --------------------------------------------------------------------------------------------------------
	password1, err := bcrypt.GenerateFromPassword([]byte("123456"), 14)
	admin1 := Admin{
		FirstName: "Siri",
		LastName:  "OK",
		Email:     "Siri@gmail.com",
		Password:  string(password1),
	}
	db.Model(&Admin{}).Create(&admin1)

	password2, err := bcrypt.GenerateFromPassword([]byte("456789"), 14)
	superuser1 := SuperUser{
		FirstName: "Araya",
		LastName:  "OK",
		Email:     "Ay@gmail.com",
		Password:  string(password2),
	}
	db.Model(&SuperUser{}).Create(&superuser1)

	// NamePrefix ----------------------------------------------------------------------------------------

	prefix1 := NamePrefix{PrefixName: "Master"}
	db.Model(&NamePrefix{}).Create(&prefix1)

	prefix2 := NamePrefix{PrefixName: "Mister"}
	db.Model(&NamePrefix{}).Create(&prefix2)

	prefix3 := NamePrefix{PrefixName: "Mistress"}
	db.Model(&NamePrefix{}).Create(&prefix3)

	prefix4 := NamePrefix{PrefixName: "Miss"}
	db.Model(&NamePrefix{}).Create(&prefix4)

	// Gender ----------------------------------------------------------------------------------------

	gender1 := Gender{GenderName: "Male"}
	db.Model(&Gender{}).Create(&gender1)

	gender2 := Gender{GenderName: "Female"}
	db.Model(&Gender{}).Create(&gender2)

	gender3 := Gender{GenderName: "Other"}
	db.Model(&Gender{}).Create(&gender3)

	//User ------------------------------
	password3, err := bcrypt.GenerateFromPassword([]byte("123456"), 14)

	user1 := User{
		FirstName:      "Suphawut",
		LastName:       "Thueanklang",
		NamePrefix:     prefix2,
		Identification: "1532233354543",
		Email:          "ADD@gmail.com",
		Password:       string(password3),
		Gender:         gender1,
		Mobile:         "0863321475",
		Address:        "123",
	}
	db.Model(&User{}).Create(&user1)

}
