import Image from '../models/Image.js';
import uploadImageToCloudinary from '../helpers/cloudinary-helpers.js';
import fs from 'fs';
import { error } from 'console';
const uploadImage = async (req , res) => {
    try{

        //check if file is missing in req body
        if(!req.file){
            return res.status(400).json({
                message: 'Image file is required. Please upload an image.',
                success: false
            })
        }
        //upload to cloudinary
        const {url , publicId} = await uploadImageToCloudinary(req.file.path);

        // store the image url and public id along with the uploaded user id
        const newlyUploadedImage = new Image({
            url,
            publicId,
            uploadedBy: req.userInfo.userId,
            description: req.body.description || ''
        });

        await newlyUploadedImage.save();

        //delete the file from local uploads folder after uploading to cloudinary
        fs.unlinkSync(req.file.path);

        res.status(201).json({
            message: 'Image uploaded successfully',
            success: true,
            image: newlyUploadedImage
        });

    }catch(error){
        console.log('Error uploading image:', error);
        res.status(500).json({
            message: 'Internal server error',
            success: false
        })
    }

}

const fetchImagesController = async (req, res) => {
    try{
        const images = await Image.find();

        if(images){
            res.status(200).json({
                message: 'Images fetched successfully',
                success: true,
                images
            });
        }

    }catch(error){
        console.log('Error fetching images:', error);
        res.status(500).json({
            message: 'Internal server error',
            success: false
        })
    }
}
export { uploadImage , fetchImagesController };