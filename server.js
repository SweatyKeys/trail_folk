'use strict'

const express = require('express')

const app = express()

app.use(express.static('public'))

app.listen(process.env.PORT || 8080, () => {
	console.log(`Server is listening on ${process.env.PORT || 8080}`)
})