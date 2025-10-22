import cloudinary from 'cloudinary';
// Note: Assuming process.env variables are loaded via dotenv.config() in server.js
import dotenv from 'dotenv';
dotenv.config();

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadImageToCloudinary = async (filePath) => {
    try{
        const result = await cloudinary.v2.uploader.upload(filePath);
        // ... rest of the function ...
        return {
            url: result.secure_url,
            publicId: result.public_id
        }
    }catch(error){
        console.error('Error uploading image to Cloudinary:', error);
        throw new Error('Image upload failed');
    }
}

export default uploadImageToCloudinary;