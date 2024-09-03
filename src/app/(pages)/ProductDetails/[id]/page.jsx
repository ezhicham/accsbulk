"use client"
import "./detailsPro.css"

import { notFound } from "next/navigation"
import Image from "next/image"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Spinner from "app/Component/spinner/Spinner"
import Btnsaction from "../Btnsaction"
import { faCircleCheck, faHeart } from "@fortawesome/free-regular-svg-icons"
import { faMoneyCheckDollar } from "@fortawesome/free-solid-svg-icons"
import { useSession } from "next-auth/react"

function Page({ params }) {
  const { data: session, status } = useSession();
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)
console.log(session)
  useEffect(() => {
    fetch(`/api/fetchOnePro/?id=${params.id}`)
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          notFound()
        }
      })
      .then((data) => {
        setData(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error fetching product details:", error)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <div className="mt-10"><Spinner/></div>
  if (!data) return <p>this product not available data</p>



if(data){
  return (
    <>
  
      <div className="product-details">
      
        {/* Add the product details here */}
        <article className="card ">
      <div className="images-part">
      <Image src={data.imgUrl} width={400} height={400}  alt={data.title} />
      </div>

         <div className="details-part">
         <div className="header">    
        <h1>{data.title}</h1>
        <p> <FontAwesomeIcon width={"20px"} icon={faCircleCheck} /> <span>in Stock</span>: {data.quantity} pcs</p>
        <div className="line"></div> 
      </div>
      
          
        <div className="desc">
          <strong>description about product:</strong>
        <p>{data.descPro}</p>
        </div>
        <div className="line"></div> 
        <div className="price-quantity"> 
           
           <div className="quantity">
             <p>select quantity:</p>
            <span>-</span>
            <input type="text" placeholder="20"/>
            <span>+</span>
           </div>


           <div className="price flex gap-2 items-center ">
            <span>total:</span>
           <p className=" bg-green-100 p-1"> {data.price*5} USD</p>
           </div>

           </div>
          
          
          <div className="pay-add-btn">
            <button>checkout payment <FontAwesomeIcon width={"30px"} icon={faMoneyCheckDollar} /></button>
              <span><FontAwesomeIcon width={"50px"}  icon={faHeart} /></span>
          </div>
          {status=="authenticated"?    session.user.email==="zghariservices@gmail.com"?  <Btnsaction id={data._id}  imgPublicId={data.imgPublicId}/>:null
        :null
      }
      
          

         </div>


    
        </article>

        
      </div>
    </>
  )
}
  
}

export default Page
