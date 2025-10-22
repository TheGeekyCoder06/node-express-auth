import multer from "multer";
import path from "path";

// Set up storage engine
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // specify the destination directory
    },
    filename: function (req, file, cb) {
        cb(null,
           file.fieldname + '-' + Date.now() + path.extname(file.originalname) 
        ) 
    }
})

//file filter to allow only image files
const checkFileFilter = (req , file , cb) => {
    if(file.mimetype.startsWith('image/')){
        cb(null , true);
    }else{
        cb(new Error('Only image files are allowed!'), false);
    }
}

// multer middleware
const uploadMiddleware = multer({
    storage: storage,
    fileFilter: checkFileFilter,
    limits: { fileSize: 5 * 1024 * 1024 } // limit file size to 5MB
});

export default uploadMiddleware;