import express from 'express';
const router = express.Router();
import WelcomeController from '../controllers/WelcomeController';

router.get('/', WelcomeController.index);

export default router;