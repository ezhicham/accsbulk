import userModal from "app/mongoDbConfig/models/userSchema"
import { connectMongoDB } from "app/mongoDbConfig/mongoDb"
import { NextResponse } from "next/server"
 
import bcrypt from "bcrypt";

export async function POST(request) {


  // receive the data from client side
  const userRegisData= await request.json()
    console.log('-------------------')
      console.log(userRegisData)

  // connect data base with mongoose
  connectMongoDB()

// hashing password 
const salt = await bcrypt.genSalt();
const hashedPassword = await bcrypt.hash(userRegisData.password, salt);

// store data users in db
   await userModal.create({
    name:userRegisData.name,
    email:userRegisData.email,
    password:hashedPassword,
   })

  //  console.log('-------------------')
  // console.log(userModal)



  console.log(userRegisData)
 return NextResponse.json({})
}