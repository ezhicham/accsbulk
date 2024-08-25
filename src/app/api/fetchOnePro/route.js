
import proModel from "app/mongoDbConfig/models/proSchema"
import { connectMongoDB } from "app/mongoDbConfig/mongoDb"
import { NextResponse } from "next/server"


export async function GET(request) {



  // connect data base with mongoose
  connectMongoDB()
   const currentProduct=await proModel.findOne({_id:request.nextUrl.searchParams.get("id")})

   console.log("-------current products now------------")
   console.log(currentProduct)
  
 return NextResponse.json(currentProduct)
}