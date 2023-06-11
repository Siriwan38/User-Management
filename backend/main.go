package main

import (
	"github.com/Siriwan38/project-app/controller"

	"github.com/gin-gonic/gin"

	"github.com/Siriwan38/project-app/entity"
	"github.com/Siriwan38/project-app/middlewares"
)

func main() {
	entity.SetupDatabase()

	r := gin.Default()
	r.Use(CORSMiddleware())

	api := r.Group("")
	{
		protected := api.Use(middlewares.Authorizes())
		{
			//User
			// User Routes
			// protected.POST("/users", controller.CreateUser)
			protected.GET("/users", controller.ListUsers)
			protected.GET("/user/:id", controller.GetUser)
			protected.PATCH("/users", controller.UpdateUser)
			protected.DELETE("/Users/:id", controller.DeleteUser)

			// // Province Routes
			// protected.GET("/provinces", controller_user.ListProvince)
			// protected.GET("/province/:id", controller_user.GetProvince)
			// protected.POST("/provinces", controller_user.CreateProvince)
			// // NamePrefix Routes
			// protected.GET("/nameprefixes", controller_user.ListNamePrefix)
			// protected.GET("/nameprefix/:id", controller_user.GetNamePrefix)
			// protected.POST("/nameprefixes", controller_user.CreateNamePrefix)
			// // Gender Routes
			// protected.GET("/genders", controller_user.ListGender)
			// protected.GET("/gender/:id", controller_user.GetGender)
			// protected.POST("/genders", controller_user.CreateGender)
			// // Employee Routes
			// protected.GET("/employees", controller_user.ListEmployee)
			// protected.GET("/employee/:id", controller_user.GetEmployee)
			// protected.POST("/employees", controller_user.CreateEmployee)

		}
	}

	// Authentication Routes
	r.POST("/login/user", controller.LoginUser)
	r.POST("/users", controller.CreateUser)

	// Run the server
	r.Run()
}

func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT, DELETE, PATCH")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}
