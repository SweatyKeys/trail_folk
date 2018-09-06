'use strict'
// libraries
const express = require('express')
const mongoose = require('mongoose')

// models
const user = require('./models/userModel')

// server
const app = express()

// static files
app.use(express.static('public'))

mongoose.connect('mongodb://localhost:27017/trail_folk-app')

app.get('/user', (req, res) => {
	User.find()
	.then(data => res.json(data))
	.catch(error => res.jso(error))
})

app.post('/user', (req, res) => {
	User.create(user)
	.then(response => console.log(response))
	.catch(err => console.error(error))
})


app.listen(process.env.PORT || 8080, () => {
	console.log(`Server is listening on ${process.env.PORT || 8080}`)
})