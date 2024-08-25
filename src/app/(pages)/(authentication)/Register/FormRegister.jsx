"use client"

import Spinner from "app/Component/spinner/Spinner";
import { useRouter } from "next/navigation";
import { useState } from "react";
  


const FormRegister = () => {
  const [name, setname]=useState("");
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  const [isLoading,setLoading]=useState(false);
  const [error, setError]=useState(null);
   const[success,setSuccess]=useState("");
   
  const router =useRouter()

  // handle submit event to register  
  // step 1:check if the fields aren't empty
  // step2: post request to db to check if the email exist or not
  // step3: if not exist post request to save the data user in db 
  // step4:handle errors 

  // Function to handle registration form submission
  const handlRegiSubmit=async(e) => {
    e.preventDefault();
    setLoading(true);
    
    // Check if password length meets minimum requirements
    if(password.length < 6){
      setError("password should be more 6 characters")
       setLoading(false)
      return
    }
    // Check that the inputs are not empty
  if(!name||!email||!password){
  
    setError("input fields empty please fill them ")


    setLoading(false)
    return
  }
  // check if the user is already exist in data base
    const responsExistUser = await fetch("/api/existUser", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
    
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ email }), // body data type must match "Content-Type" header
       
    });


 
   const ifUserExist= await responsExistUser.json()
   
  console.log(ifUserExist.usercheck)
  //  if condition check if the "ifUserExist" = null if null move to next registeration function
  if(ifUserExist.usercheck==null){
    setError(null)
    console.log("user not exist ")
    // send data to server side with post request if the user not exist
    const response = await fetch("api/register", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
    
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({name, email ,password}), // body data type must match "Content-Type" header
    });
    // check if the data sended successfullly 
    if(response.ok){
      setLoading(false)
      setSuccess("activeSuccessMsg")
      // Use setTimeout to display a successful registration message to clients
          setTimeout(() => {
          setSuccess("")
          router.push("/Login")
       }, 2000)
    
      // Handle case where response is not OK and data is not sent to backend, showing an error message to clients
    }else{
      setError("sorry somthing go wrong please try again or contact support ")
      // stop loading 
    setLoading(false)
    }

    
    return response.json(); // parses JSON response into native JavaScript objects

    //error! user already exist in data base  showing  an error message 
  }else{
  
    console.log("the email  exist ")
    console.log(ifUserExist.usercheck.username)

    setError("the email already exist please try with other email")

    setLoading(false)
  }
     
     


  }
  

  // form component
  return (
    <form action="" onSubmit={handlRegiSubmit}>
     <div className={`successMsg p-3 bg-green-300 text-green-800 ${success}`}>
      <p>you register successfully ✌️
      </p>
     </div>
    <input type="text" placeholder='your  username' onChange={(eo) => {
      setname(eo.target.value)
    }
    } />
    <input type="email" placeholder='your email' onChange={(eo) => {
      setEmail(eo.target.value)
    }
    }  />
    <input type="passord" placeholder='your password' onChange={(eo) => {
      setPassword(eo.target.value)
    }
    } />

    <a href="" className='text-violet-500 capitalize underline'>forget passord ?</a>
    {error && (
  <span className="p-2 bg-red-100 text-red-500">{error}</span>
  )}
    
  


    
      {/* // Display a loading spinner on the button while sending data*/}
      
 {  isLoading?<Spinner/>:<button type="submit">register  </button>}
      
   </form>
  )
}

export default FormRegister
