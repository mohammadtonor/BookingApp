import express from 'express';
import { createUser, deleteUser, getAllUser, getByIdUser, updateUser } from '../controllers/user.js';
import { verifyToken, verifyUser, verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

router.get('/checkauthentication', verifyToken , (req, res, next) => {
    res.send("hello you are athenticaterd")
})

router.get('/checkuser/:id', verifyUser , (req, res, next) => {
    res.send("Hello user,you are loginedand can delete your account")
});

router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
  res.send("hello admin, you are logged in and you can delete all accounts")
})


router.put('/:id',verifyUser, updateUser);

router.delete('/:id', verifyUser ,deleteUser);

router.get('/:id', getByIdUser);

router.get('/', getAllUser)

export default router;