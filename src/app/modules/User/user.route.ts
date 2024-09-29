import { Router } from 'express';
import UserController from './user.controller';

const router = Router();

router.post('/users/add', UserController.addUser); // Add new user
router.get('/users/:userId', UserController.getUser); // Get user info
router.post('/users/:userId/medicines/add', UserController.addMedicineToUser); // Add medicine to a user
router.get('/users/:userId/medicines', UserController.getUserMedicines); // Get user's medicines

export default router;
