// @ts-nocheck
import { faAngleRight, faCartShopping, faHouse, faHeart, faStar, faPlus, faAnglesRight, faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import next from "next";
import Image from "next/image";
import { resolve } from "styled-jsx/css";
import Products from "./Products";
import { Suspense } from "react";
import Spinner from "../Component/spinner/Spinner.jsx";
import "./home.css"



const prodcutsArray=[
{  
  id:1,
  proName:"instagram +50 followers",
  proImg:"https://i.pinimg.com/564x/40/8d/85/408d850cac86b310732cfe7a9cca67f8.jpg",
  proDesc:"  ipsum dolor, sit amet ipsum dolor, ipsum dolor, sit amet ipsum dolor,ipsum dolor, sit amet ipsum dolor ",
  proPrice:5,
  proStock:800,
  proSoldTime:662,
  proRating:4,proRating:5, },
  {  
    id:2,
    proName:"instagram +50 followers",
    proImg:"https://i.pinimg.com/564x/40/8d/85/408d850cac86b310732cfe7a9cca67f8.jpg",
    proDesc:"  ipsum dolor, sit amet ipsum dolor, sit amet ipsum dolor, ipsum dolor, sit amet ipsum dolor,ipsum dolor, sit amet ipsum dolor  ",
    proPrice:5,
    proStock:800,
    proSoldTime:662,
    proRating:4,proRating:5, },
    {  
      id:2,
      proName:"instagram +50 followers",
      proImg:"https://i.pinimg.com/564x/40/8d/85/408d850cac86b310732cfe7a9cca67f8.jpg",
      proDesc:"  ipsum dolor, sit amet  ipsum dolor, sit amet ipsum dolor, ipsum dolor, sit amet ipsum dolor,ipsum dolor, sit amet ipsum dolor",
      proPrice:5,
      proStock:800,
      proSoldTime:662,
      proRating:4,proRating:5, },{  
        id:2,
        proName:"instagram +50 followers",
        proImg:"https://i.pinimg.com/564x/40/8d/85/408d850cac86b310732cfe7a9cca67f8.jpg",
        proDesc:"  ipsum dolor, sit amet  ipsum dolor, sit amet ipsum dolor, ipsum dolor, sit amet ipsum dolor,ipsum dolor, sit amet ipsum dolor",
        proPrice:5,
        proStock:800,
        proSoldTime:662,
        proRating:4,proRating:5, },
  

]






  async function Home() {


  return (
    
      <main className="main-content">
        <div className="main-section flex">
          {/*========= intro text for home page section=============  */}
          <section className="hero-section ">


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
              <p>fast delivery </p>
            </section>
            {/* card section for each features */}
            <section className="card-feartures">
              <img src="../images/14488615.png" alt="" />
              <p>warranty and safe </p>
            </section>

            {/* card section for each features */}
            <section className="card-feartures">
              <img src="../images/10319754.png" alt="" />
              <p>cheap & HQ</p>
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
        <div className="popular-products ">

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
            <p>{item.proDesc.slice(0,40)}...</p>
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


           

        </div>


      </main>



  
  
  );
}


export default Home;