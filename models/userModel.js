

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
	name: {
		firstName: String,
		lastName: String
	},
	userName: String
})

UserSchema.methods.serialize = function() {
	return {
		userName: this.UserName
	}
}

module.exports = mongoose.model('User', UserSchema)