import proModel from "app/mongoDbConfig/models/proSchema"
import { connectMongoDB } from "app/mongoDbConfig/mongoDb"
import { uploadStream } from "helper/uploadImgCloudnary";
import { NextResponse } from "next/server"


export async function POST(request) {


  // receive the data from client side
  const producDetails = await request.formData();
    console.log('-------------------')
      // const img=producDetails.formData.file
      // console.log(img)
      // console.log(producDetails.get("imgUrl"))
      const productImg=producDetails.get("imgUrl")
         const productAccsArray=producDetails.get("dataAccs").split("/")
         console.log("---------//..,,,,,,,,,,,,,,,,")
        //  const slicedarray=productAccsArray.slice(0,2)
        // console.log(slicedarray)
            




        // test a code  ======++++++++
        let essentielarray = ["test1", "test2", "test3", "test4","test5", "test6", "test7",
                                 "test8","test9", "test10", "test11", "test12","test13", "test14", "test15"];
        let secondArray=essentielarray.splice(0,10)
        console.log("essentiel array")
        console.log( essentielarray)
        console.log("secondary  array")
        console.log(secondArray)



        
      // store the image in cloudanary and get  the url and save it on database 
      const bytes = await productImg.arrayBuffer();
const buffer = Buffer.from(bytes);
const uploadedImg = await uploadStream(buffer)
// console.log(uploadedImg.secure_url)
console.log("===============================upload image==========================")
// console.log(uploadedImg)
// get public_id for image from cloudnary to use it to delet the image 
const publicID=uploadedImg.public_id
console.log(publicID)
  // connect data base with mongoose
  connectMongoDB()

 try {
  // store data product in db
  //

    const createdProduct=  await proModel.create({
    imgUrl:uploadedImg.secure_url,
    imgPublicId: publicID,
    title:producDetails.get("title"),
    descPro:producDetails.get("descPro"),
    dataAccs:productAccsArray,
    price:producDetails.get("price"),
    quantity:producDetails.get("quantity"),
    soldOut:0,
    rating:0,
   })
   console.log(createdProduct)
 } catch (error) {
  console.log("++++++++++" + error)
  console.log("sorry data =================================not saved in db")
 }


   console.log('-------------------')
  




 return NextResponse.json({})
}