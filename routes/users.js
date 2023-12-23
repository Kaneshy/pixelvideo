import express from 'express'
import { update, deleted, dislike, getUser, like, subscribe, unsubscribe } from '../controllers/user.js'
import { verifyToken } from '../verifyToken.js'

const router = express.Router()

//updata user 
router.put('/:id', verifyToken, update)

//delete user 
router.delete('/:id', verifyToken, deleted)

//get a user
router.get('/find/:id', getUser)

//subscribe a user
router.put('/sub/:id', verifyToken, subscribe)


//unsubscribe
router.put('/unsub/:id', verifyToken, unsubscribe)

//like a video
router.put('/like/:videoId', verifyToken, like)


//dislike a vides
router.put('/dislike/:videoId', verifyToken, dislike)


export default router