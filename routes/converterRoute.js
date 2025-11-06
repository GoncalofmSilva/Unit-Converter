import express from 'express';
const router = express.Router();
import { convertLength, convertWeight, convertTemperature } from '../controllers/converterController.js';

router.post('/length', convertLength);
router.post('/weight', convertWeight);
router.post('/temperature', convertTemperature);

export default router;