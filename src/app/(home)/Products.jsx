"use client"

import { faCartShopping, faHeart, faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import Image from "next/image";
import { notFound } from "next/navigation"
import { useEffect, useState } from "react";

function Products() {
  const [data, setData] = useState([])

  useEffect(() => {
    const getAllProducts = () => {
      fetch("/api/fetchProducts")
        .then(res => {
          if (res.ok) {
            return res.json()
          } else {
            notFound()
          }
        })
        .then(fetchedProducts => {
          setData(fetchedProducts.productsDB.slice(0, 4)) // Only take the first 3 products
        })
        .catch(error => {
          console.error("Error fetching products:", error);
        });
    }

    getAllProducts()
  }, [])

  return (
    <div className="proudacts-cards">
      {data.map((item) => (
        <article key={item._id} title={item.title} className="pro-card">
          {/* the poster image for product */}
          <div className="add-favo">
              <FontAwesomeIcon className="text-slate-600" width={"20px"} icon={faHeart} />
            </div>
          <div className="pro-poster">
            {/* add to favorite */}
          
            <Image
              src={item.imgUrl}
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>

          {/* name and description of product and price and action */}
          <div className="pro-desc p-2">
            <h3>{item.title.slice(0, 20)}</h3>
            <p>{item.descPro.slice(0, 110)}</p>
          </div>

          {/* card footer */}
          <div className="card-footer p-2">
            {/* product price */}
            <div className="price bg-green-100 p-1">
              <span className="text-green-700 font-semibold">{item.price} usd</span>
            </div>
            {/* buy event */}
            <div className="btn-buy">
              <Link href={`/ProductDetails/${item._id}`}>
                <FontAwesomeIcon width={"25px"} icon={faCartShopping} />
              </Link>
            </div>
          </div>

          <div className="divider"><hr /></div>

          {/* products info quantity , rating , byed */}
          <div className="pro-info flex justify-between items-center p-2">
            <div className="stock">
              <p>stock</p>
              <span>{item.quantity} pcs</span>
            </div>
            <div className="pro-rating">
              <p>rating</p>
              <span className="flex">{item.rating} <FontAwesomeIcon width={"10px"} className="text-yellow-500" icon={faStar} /></span>
            </div>
            <div className="sold">
              <p>sold</p>
              <span className="flex">{item.soldOut} pcs</span>
            </div>
          </div>
        </article>
      ))}


    </div>
  )
}

export default Products
