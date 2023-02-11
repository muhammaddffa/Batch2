const cloudinary = require('cloudinary').v2
const fs = require('fs');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const uploadCloudinary = (req, res, next) =>{
    const pathFile = req.file.path
    const uniquieName = new Date().toISOString
    
    cloudinary.uploader.upload (
        pathFile,{
            
            resource_type: 'raw',
            public_id: `cloudinary-express/${uniquieName}`,
            tags: 'cloudinary-express'
        },
        (err, Image) => {
            if(err) return res.status(500).send(err)
        console.log('file upload to cloudinary');
        
        fs.unlinkSync(pathFile)
        req.Image = Image
        next();
        }
    )
}
module.exports = uploadCloudinary;
