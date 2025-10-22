import express from 'express';
import authMiddleware from '../middleware/auth-middleware.js';
import adminMiddleware from '../middleware/admin-middleware.js';
import uploadMiddleware from '../middleware/image-middleware.js';
import {uploadImage , fetchImagesController} from '../controllers/image-controllers.js';
const router = express.Router();

// upload the image
router.post(
    '/upload',
     authMiddleware, 
     adminMiddleware, 
     uploadMiddleware.single('image'), 
     uploadImage);

// to get all the images
router.get(
    '/get',
    authMiddleware,
    fetchImagesController
);

export default router;