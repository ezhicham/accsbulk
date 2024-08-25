
import proModel from "app/mongoDbConfig/models/proSchema"
import { connectMongoDB } from "app/mongoDbConfig/mongoDb"
import { NextResponse } from "next/server"
const cloudinary = require("cloudinary").v2;
export async function PUT(request) {
   
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
  
  const targetedProDetails=  await request.json()
      
  console.log(targetedProDetails)
  // connect to database 
     connectMongoDB()


const productID=targetedProDetails.productId
console.log("///////////////////////////////////")
console.log(productID)
  const updatedProduct=await proModel.updateOne({_id:productID},{
    title:targetedProDetails.title,
    descPro:targetedProDetails.descPro,
    price:targetedProDetails.price,
    quantity:targetedProDetails.quantity,
    dataAccs:targetedProDetails.dataAccs,
    
  })
  console.log("*****************************************************")
  console.log(updatedProduct)

    
  

  

    



 return NextResponse.json({})
}