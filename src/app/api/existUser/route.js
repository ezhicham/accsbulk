import userModal from "app/mongoDbConfig/models/userSchema"
import { connectMongoDB } from "app/mongoDbConfig/mongoDb"
import { NextResponse } from "next/server"

export async function POST(request) {


  // receive the data from client side
  const userRegisData= await request.json()
    console.log('-------------------')
      console.log(userRegisData)

  // connect data base with mongoose
  connectMongoDB()

// check if the user exisst or not


const usercheck= await userModal.findOne({
   email:userRegisData.email
})
  //  console.log('-------------------')
if(usercheck==null){
  console.log("user not exist")
}else{
  console.log("user already exist")
  console.log(usercheck)
}



  // console.log(userRegisData)


 return NextResponse.json({usercheck})
}