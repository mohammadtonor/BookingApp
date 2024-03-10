import express, { Router } from 'express';
import { verifyAdmin } from '../utils/verifyToken.js';
import { createRoom, deleteRoom, getAllRoom, getByIdRoom, updateRoom, updateRoomavailibility } from '../controllers/room.js';

const router = express.Router();

router.post('/:hotelId', verifyAdmin, createRoom);

router.put('/:id', verifyAdmin, updateRoom);

router.put('/availability/:id', updateRoomavailibility);

router.delete('/:id/:hotelId', verifyAdmin, deleteRoom);

router.get('/:id', getByIdRoom);

router.get('/', getAllRoom)

export default router;