"use client"

import { useState } from "react"
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Spinner from "app/Component/spinner/Spinner";
function formLogin() {
  const router=useRouter()
  const [email , setEmail]=useState("")
  const [password , setPassword]=useState("")
  const [isLoading,setisLoading]=useState(false)
  const [error,setError]=useState("")
  
const handleLoginSubmit= async(e) => {


  console.log(e)
  setisLoading(true)
  e.preventDefault()
 if(!email || !password){
  
  setisLoading(false)
  
  return
 }


  const res = await signIn("credentials", {
    email:email,
    password:password,
    redirect: false,
  });
  if(!res.ok){
    console.log("login successfully")
    setError("wrong email or password")
  }
  if(res.ok){
    router.replace("/")
    console.log("login successfully")
    
    setError("")
  }
  

  setisLoading(false)
}

  return (
         <form action="" onSubmit={handleLoginSubmit}>
            <input type="email" placeholder='your email' onChange={(eo) => {
              setEmail(eo.target.value)
            }
            } />
            <input type="passord" placeholder='your password' onChange={(eo) => {
              setPassword(eo.target.value)
            }
            } />
            <a href="" className='text-violet-500 capitalize underline'>forget passord ?</a>
            {error && (
                <span className="p-2 bg-red-100 text-red-500">{error}</span>
            )}
                  {/* // Display a isLoading spinner on the button while sending data*/}
      
             {  isLoading?<Spinner/>:<button type="submit">register  </button>}
      

                     

           </form>
  )
}

export default formLogin
