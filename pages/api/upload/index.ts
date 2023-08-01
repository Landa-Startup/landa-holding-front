import cloudinary from "@/libs/cloudinary";

export default async function upload (req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests allowed' });
  }
  
  const result = await cloudinary.uploader.upload(req.body.file, {
    resource_type: 'image'
  });
  
  return res.status(200).json({ result });
}