import express from 'express'
import { googleAuth, signin, signup } from '../controllers/auth.js'

const router = express.Router()

//shift alt uparrow downarrow
// CREATE A USER
router.post('/signup', signup )

//SIDN IN
router.post('/signin', signin)

// GOOGLE AUTH
router.post('/google', googleAuth)







export default router