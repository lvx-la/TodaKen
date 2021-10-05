package main

import (
	"math"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
)

func init() {
	jst, err := time.LoadLocation("Asia/Tokyo")
	if err != nil {
		panic(err)
	}
	time.Local = jst
}

func NokoriTime() (float64, float64) {
	var ctDays float64
	var ctWeeks float64

	endday := time.Date(2022, time.March, 31, 17, 0, 0, 0, time.Local)

	ct := endday.Sub(time.Now())
	ctDays = math.Ceil(ct.Hours() / 24)
	ctWeeks = math.Ceil(ctDays / 7)

	return ctDays, ctWeeks
}

func main() {
	var ctDays float64
	var ctWeeks float64

	ctDays, ctWeeks = NokoriTime()
	router := gin.Default()
	router.LoadHTMLGlob("templates/*")
	router.GET("/jesus", func(c *gin.Context) {
		c.HTML(http.StatusOK, "index.tmpl", gin.H{
			"ctDays":  ctDays,
			"ctWeeks": ctWeeks,
		})
	})

	router.Run(":5000")
}
