import express from "express";
import multer from "multer";
import { UploadApiResponse, v2 as cloudinary } from "cloudinary";
import File from "../models/File";

const router = express.Router();

const storage = multer.diskStorage({});

let upload = multer({
  storage,
});

router.post("/upload", upload.single("myFile"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "Hey bro! We need the file" });
    }

    let uploadedFile: UploadApiResponse;

    try {
      uploadedFile = await cloudinary.uploader.upload(req.file.path, {
        folder: "filesharingapp",
        resource_type: "auto",
      });

      console.log(uploadedFile);
    } catch (error: any) {
      console.log(error.message);
      return res.status(500).json({ message: "Cloudinary Error :(" });
    }

    const { originalname } = req.file;
    const { secure_url, bytes, format } = uploadedFile;

    const file = await File.create({
      filename: originalname,
      secureUrl: secure_url,
      sizeInBytes: bytes,
      format,
    });

    res.status(201).json({
      id: file._id,
      download_link: `${process.env.API_BASE_ENDPOINT_CLIENT}/download/${file._id}`,
    });
  } catch (error: any) {
    console.log(error.message);
    return res.status(500).json({ message: "Server Error :(" });
  }
});

export default router;
