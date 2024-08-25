
import proModel from "app/mongoDbConfig/models/proSchema"
import { connectMongoDB } from "app/mongoDbConfig/mongoDb"
import { NextResponse } from "next/server"
const cloudinary = require("cloudinary").v2;
export async function DELETE(request) {
   
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
  
  const productId=  await request.json()
  const publicID = productId.imgPublicId
  console.log("========== from front to delete products ===========")
  console.log(publicID) 

  console.log(productId)
await  connectMongoDB()


const deletedPro=await proModel.deleteOne({_id:productId.id})
console.log("message opo")
// console.log(deletedPro)
// delet image from cloudnary
await cloudinary.uploader.destroy(publicID);

// console.log(deletedPro)
 return NextResponse.json({})
}