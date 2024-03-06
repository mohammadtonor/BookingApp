import express from 'express';
import { createHotel, deleteHotel, getAllHotel, getByIdHotel, updateHotel } from '../controllers/hotel.js';
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

router.post('/', verifyUser, createHotel);

router.put('/:id', verifyAdmin,updateHotel);

router.delete('/:id', verifyAdmin,deleteHotel);

router.get('/:id', getByIdHotel);

router.get('/', getAllHotel)


export default router; 