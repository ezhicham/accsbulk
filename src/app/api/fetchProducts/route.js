import proModel from "app/mongoDbConfig/models/proSchema"
import { connectMongoDB } from "app/mongoDbConfig/mongoDb"

import { NextResponse } from "next/server"


export async function GET(request) {
  console.log("--------we are in products page----------------")
  connectMongoDB()

  const productsDB= await proModel.find()
  console.log("------=================================fetch product from db--------")
  // console.log(productsDB)






 return NextResponse.json({productsDB})
}