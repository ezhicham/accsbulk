// @ts-nocheck
import { faAngleRight, faCartShopping, faHouse, faHeart, faStar, faPlus, faAnglesRight, faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import next from "next";
import Image from "next/image";
import { resolve } from "styled-jsx/css";
import Products from "./Products";
import { Suspense } from "react";
import Spinner from "../Component/spinner/Spinner.jsx";



const prodcutsArray=[
{  
  id:1,
  proName:"instagram +50 followers",
  proImg:"https://i.pinimg.com/564x/40/8d/85/408d850cac86b310732cfe7a9cca67f8.jpg",
  proDesc:"  ipsum dolor, sit amet ",
  proPrice:5,
  proStock:800,
  proSoldTime:662,
  proRating:4,proRating:5, },
  {  
    id:2,
    proName:"instagram +50 followers",
    proImg:"https://i.pinimg.com/564x/40/8d/85/408d850cac86b310732cfe7a9cca67f8.jpg",
    proDesc:"  ipsum dolor, sit amet ",
    proPrice:5,
    proStock:800,
    proSoldTime:662,
    proRating:4,proRating:5, },
    {  
      id:2,
      proName:"instagram +50 followers",
      proImg:"https://i.pinimg.com/564x/40/8d/85/408d850cac86b310732cfe7a9cca67f8.jpg",
      proDesc:"  ipsum dolor, sit amet ",
      proPrice:5,
      proStock:800,
      proSoldTime:662,
      proRating:4,proRating:5, },{  
        id:2,
        proName:"instagram +50 followers",
        proImg:"https://i.pinimg.com/564x/40/8d/85/408d850cac86b310732cfe7a9cca67f8.jpg",
        proDesc:"  ipsum dolor, sit amet ",
        proPrice:5,
        proStock:800,
        proSoldTime:662,
        proRating:4,proRating:5, },
  

]






  async function Home() {


  return (
    <main>
      <div className="hero-section  ">
        <div className="main-section">
          {/*========= intro text for home page section=============  */}
          <section className="text-intro ">


            <div className="overlay">
              <div className="description">

                <h1> bulkaccs games : cheaper , faster , trusted , warranty for ever</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At molestiae
                  odio adipisci quas quidem!
                  Fugiat voluptas temporibus maiores fugit. Nisi.</p>
                <button>see products</button>

              </div>
            </div>



          </section>

          {/* =========the features  section========  */}
          <section className="feartures">
            {/* card section for each features */}
            <section className="card-feartures">
              <img src="../images/6371914.png" alt="" />
              <p>Lorem ipsum dolor, sit amet </p>
            </section>
            {/* card section for each features */}
            <section className="card-feartures">
              <img src="../images/14488615.png" alt="" />
              <p>Lorem ipsum dolor, sit amet </p>
            </section>

            {/* card section for each features */}
            <section className="card-feartures">
              <img src="../images/10319754.png" alt="" />
              <p>Lorem ipsum dolor, sit amet </p>
            </section>

          </section>


          {/* ==============display products section==========  */}
          <section className="display-products mt-3">
            <div className="title">
              <h2>our products</h2>

            </div>

            {/*============ cards of prodcuts=================== */}
             
         <Suspense fallback={  <Spinner/>}>
              <Products/>
         </Suspense>

          </section>
  
            {/* ===========button discover more products============ */}

          <section className="discover-more-products mt-5 mx-auto">
            <a href=""> <span>discover more products</span> <FontAwesomeIcon width={"25px"} icon={faArrowRightLong} /></a>
          </section>

        </div>


        { /* ===============the best products in our website second side ========= */}
        <div className="popular-products bg-orange-500">

          <div className="product-title">
            <h2>best products</h2>
          </div>

          { /*============ the best products card in our website======= */}
             <div className="best-products-cards">
          {prodcutsArray.map((item, index) => (
        <div className="card-product" key={index}>
          <img width={30} src="https://cdn-icons-png.flaticon.com/512/3955/3955024.png" alt="" />
          <div className="desc-title">
            <h3>instagram 2012</h3>
            <p dangerouslySetInnerHTML={{ __html: item.proDesc }} />
            <span>12.3 USD</span>
          </div>
          <a href="">
            <FontAwesomeIcon width={"20px"} icon={faCartShopping} />
          </a>
        </div>
      ))}

</div>

        {/* Link for products pages  */}
          <a href="" className="more-pro-btn">
            <span>more products</span>
            <FontAwesomeIcon width={"10px"} icon={faAngleRight} />

          </a>


           {/* ========== Apng posters for ads for other website ========  */}
          <div className="products-poster">
            <div className="title">
              <h2>ads products</h2>
            </div>



            {/* poster of products and adversting part */}
            <div className="posters">


              <a href="" className="poster">
                <img src="https://i.pinimg.com/736x/5e/58/31/5e5831368f4778eb68310ff6eef756a3.jpg" alt="" />

              </a>

              {/* poster of product and adversting part */}
              <a href="" className="poster">
                <img src="https://i.pinimg.com/736x/b6/8d/37/b68d37447bde9b019e9f0952ff30c4b7.jpg" alt="" />

              </a>

            </div>
          </div>


        </div>


      </div>



  
    </main>
  );
}


export default Home;