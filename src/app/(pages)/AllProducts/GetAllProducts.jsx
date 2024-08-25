
"use client"

import Image from "next/image";
import "./AllProducts.css"
import { notFound } from "next/dist/client/components/not-found"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
function GetAllProducts() {
  const [data, setData] = useState([])
  useEffect(() => {

    const getAllProducts = async () => {

      const res = await fetch('/api/fetchProducts')
      // The return value is *not* serialized
      // You can return Date, Map, Set, etc.
      if (res.ok) {
        const fetchedProducts=await res.json()
        setData(fetchedProducts.productsDB)
          //  console.log(fetchedProducts.productsDB.slice(0,5))
      }
      if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        notFound()
      }
    }

    getAllProducts()
  

  }
    , [])

    
  return (
    <div className="all-Products">
      {data.map((pro) => {
        return (
          <article key={pro.id}  className="pro-card">
      

                    {/* the poster image for product */}
                    <div className="pro-poster">
                      {/* add to favorite */}
                      <div className="add-favo">
                        <FontAwesomeIcon className="text-slate-600" width={"20px"} icon={faHeart} />
                      </div>
    
                    {/* <img src={pro.productImg} alt="" /> */}
                    <Image
                 src={pro.imgUrl}
                  width={500}
                 height={500}
                alt="Picture of the author"
            />
                    </div>
    
                    {/* name and description of product and price and action */}
                    <div className="pro-desc p-2">
                      <h3 >{pro.title.slice(0,20)}</h3>
                      <p>{pro.descPro.slice(0,110)}</p>
    
                    </div>
    
                    {/* card footer */}
                    <div className="card-footer  p-2">
                      {/* product price */}
                      <div className="price bg-green-100 p-1"><span className="text-green-700 font-semibold">{pro.price} usd</span></div>
                      {/* buy event */}
                      <div className="btn-buy"><Link href={`/ProductDetails/${pro._id}`}><FontAwesomeIcon width={"25px"} icon={faCartShopping} /></Link></div>
    
                    </div>
    
                    <div className="divider"><hr /></div>
    
                    {/* products info quantity , rating , byed  */}
                    <div className="pro-info flex justify-between pros-center p-2">
                      <div className="stock">
                        <p>stock</p>
                        <span>{pro.quantity} pcs</span>
                      </div>
    
                      <div className="pro-rating">
                        <p>rating</p>
                        <span className="flex">{pro.rating} <FontAwesomeIcon width={"10px"} className="text-yellow-500" icon={faStar} /> </span>
                      </div>
                      <div className="sold">
                        <p>sold</p>
                        <span className="flex">{pro.soldOut} pcs </span>
                      </div>
                    </div>
    
    
                  </article>
        )
      }
      )}


    </div>
  )
}

export default GetAllProducts
