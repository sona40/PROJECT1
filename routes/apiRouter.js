const { Router } = require('express')
const router = new Router()
const apiController = require('../controler/apiControler')

router.get('/users', apiController.getUsers)
router.get('/posts', apiController.getPosts)
router.get('/posts/:id',  apiController.getCommentsByPost)

module.exports=router