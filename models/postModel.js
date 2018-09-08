'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postModel = new Schema({
	trailName: String,
	location: String,
	time: Number,
	img: { data: Buffer, contentType: String }
})

module.exports = mongoose.model('Post', postModel)