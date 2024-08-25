
"use client"

import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Spinner from 'app/Component/spinner/Spinner'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

function Btnsaction({id,imgPublicId}) {
const [succesDelet,setSuccesDelet]=useState(false)
const [isLoading,setisLoading]=useState(false)
  const router=useRouter()
  console.log(" -------------id is ---------")
console.log(id)
  // funtion to delete and update the products
  const handelUpdate=() => {
    console.log("handelUpdate function working !!")
 
  }
  
  const handelDelete = async() => {

    setisLoading(true)
   console.log("handelDelete  function  working !!")

  

  const deletRes = await  fetch('http://localhost:3000/api/deletePro', {
      method: 'DELETE',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({id,imgPublicId})
  })

  if(deletRes.ok){
  
    console.log(" deleted successfully")
    setSuccesDelet(true)

    setTimeout(() => {
      
    router.replace("/AllProducts")
    }, 2000)
    
  }
  setisLoading(false)


  
  

 
 }

  return (
    <div>
      
      <div className="btns">
        <button onClick={handelUpdate} className='update'><Link href={`/admin/updateProduct/${id}`}><span>update </span> </Link><FontAwesomeIcon width={"15px"}  icon={faPenToSquare} />
        </button>
        <button onClick={handelDelete} className='delete'> {isLoading?<Spinner/>:<><span>delete</span><FontAwesomeIcon width={"15px"} icon={faTrashCan} /></>}</button>
      </div>
      {succesDelet&&(<div className="successMessage bg-green-100 text-green-700  p-3 mt-3"><span>products deleted successuffly!</span></div>  )}
    </div>
  )
}

export default Btnsaction
