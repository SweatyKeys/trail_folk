const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()



router.get('/user', (req, res) => {
	User.find()
	.then(data => res.json(data))
	.catch(error => res.jso(error))
})

router.post('/user', jsonParser,(req, res) => {
	const item = user.create(req.body.name, req.body.userName)
	res.status(201).json(item)
	}
)
