import express from 'express';
import { countByCitiy, countByType, createHotel, deleteHotel, getAllHotel, getByIdHotel, getHotelRooms, updateHotel } from '../controllers/hotel.js';
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

router.post('/', verifyUser, createHotel);

router.put('/:id', verifyAdmin, updateHotel);

router.delete('/:id', verifyAdmin, deleteHotel);
router.get('/', getAllHotel);

router.get('/find/:id', getByIdHotel);


router.get('/', getAllHotel);

router.get('/countByCitiy', countByCitiy);

router.get('/countByType', countByType);
router.get('/room/:id', getHotelRooms);





export default router; 