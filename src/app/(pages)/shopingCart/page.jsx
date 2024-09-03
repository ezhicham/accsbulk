import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import "./shopingCart.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

function page() {
  return (
    <div className="shoping-cart">
       <div className="carts">
        {/* item  */}
        <div className="cart-item">
          <div className="pro-img"><img src="https://i.pinimg.com/736x/69/4b/38/694b38846971e96afa72ab75d77d74a2.jpg" alt="" /></div>
          {/* pro title and description */}
          <div className="pro-desc">
            <h1>pro test</h1>
            <p>pro description ...</p>
          </div>
          {/* price of pro per unit */}
          <div className="price bg-green-100 text-green-500">23 usd</div>
            {/* buy event */}
            <div className="btn-buy">
              <Link href={`/ProductDetails/`}>
                <FontAwesomeIcon width={"25px"} icon={faCartShopping} />
              </Link>
            </div>
        </div>
          {/* item  */}
          <div className="cart-item">
          <div className="pro-img"><img src="https://i.pinimg.com/736x/69/4b/38/694b38846971e96afa72ab75d77d74a2.jpg" alt="" /></div>
          {/* pro title and description */}
          <div className="pro-desc">
            <h1>pro test</h1>
            <p>pro description ...</p>
          </div>
          {/* price of pro per unit */}
          <div className="price bg-green-100 text-green-500">23 usd</div>
            {/* buy event */}
            <div className="btn-buy">
              <Link href={`/ProductDetails/`}>
                <FontAwesomeIcon width={"25px"} icon={faCartShopping} />
              </Link>
            </div>
        </div>  {/* item  */}
        <div className="cart-item">
          <div className="pro-img"><img src="https://i.pinimg.com/736x/69/4b/38/694b38846971e96afa72ab75d77d74a2.jpg" alt="" /></div>
          {/* pro title and description */}
          <div className="pro-desc">
            <h1>pro test</h1>
            <p>pro description ...</p>
          </div>
          {/* price of pro per unit */}
          <div className="price bg-green-100 text-green-500">23 usd</div>
            {/* buy event */}
            <div className="btn-buy">
              <Link href={`/ProductDetails/`}>
                <FontAwesomeIcon width={"25px"} icon={faCartShopping} />
              </Link>
            </div>
        </div>  {/* item  */}
        <div className="cart-item">
          <div className="pro-img"><img src="https://i.pinimg.com/736x/69/4b/38/694b38846971e96afa72ab75d77d74a2.jpg" alt="" /></div>
          {/* pro title and description */}
          <div className="pro-desc">
            <h1>pro test</h1>
            <p>pro description ...</p>
          </div>
          {/* price of pro per unit */}
          <div className="price bg-green-100 text-green-500"><p>23 usd</p></div>
            {/* buy event */}
            <div className="btn-buy">
              <Link href={`/ProductDetails/`}>
                <FontAwesomeIcon width={"25px"} icon={faCartShopping} />
              </Link>
            </div>
        </div>
       </div>
    </div>
  )
}

export default page
