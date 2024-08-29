import React from 'react'
import "./footer.css"
import Image from 'next/image'
import { faEnvelope, faLocationDot, faSquarePhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons'
function Footer() {
  return (
    <footer className='footer'>
      {/* first section of footer contain info to contact us */}
      <section className="contact-section  mb-5">
      {/* our position */}
        <div className="find-us flex  gap-2">
        <FontAwesomeIcon width={"20px"} className='text-violet-500' icon={faLocationDot} />
          <article>
          <span>find us</span>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          </article>
        </div>
      
        {/* our position */}
        <div className="number flex gap-2">
        <FontAwesomeIcon width={"20px"} className='text-violet-500' icon={faSquarePhone} />
          <article>
          <span>number  phone</span>
          <p>+212620438734</p>
          </article>
        </div>

        {/* our email */}
        <div className="email flex gap-2">
      
        <FontAwesomeIcon width={"20px"} className='text-violet-500' icon={faEnvelope} />
          <article>
          <span>email us</span>
          <p>zghariservices@gmail.com</p>
          </article>
        </div>

      </section>

      <hr />

      {/* second secion of footer contain brand  links, social media  */}
      <section className="info-about-us mb-5">
        {/* about our brand */}
        <div className='brand'>
            <strong>EZ ZaGaroV</strong>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Sequi perspiciatis nulla 
            facilis dolore aperiam. Nemo ex tempora aut cum voluptas.</p>
        </div>
            {/* the useful links  part of footer */} 
       <div className="useful-links">
        <strong>useful links</strong>
        <ul className="links flex gap-3">
          {/* social media accounts links */}
        <ul className="social-accs">
        <li><a href="">instagram accs</a></li>
          <li><a href="">facebook accs</a></li>
          <li><a href="">twitter aged</a></li>
          <li><a href="">pinterest us</a></li>
          <li><a href="">tiktok beta</a></li>
        </ul>

        {/* subscriptions links */}
        <ul className="social-accs">
        <li><a href="">netflix 4k </a></li>
          <li><a href="">canva pro lifetime </a></li>
          <li><a href="">windows 11 keys aged</a></li>
          <li><a href="">pinterest us</a></li>
          <li><a href="">tiktok beta</a></li>
        </ul>

        </ul>
       </div>
      {/*  follow us on social media  */}
    <div className="follow-us">
      <strong>follow us</strong>
     <div className="platforms flex gap-3">
     <a className="instagram">  <FontAwesomeIcon width={"15px"} icon={faInstagram} /></a>
      <a className="twitter">  <FontAwesomeIcon width={"15px"} icon={faTwitter} /></a>
      <a className="facebook">  <FontAwesomeIcon width={"15px"} icon={faFacebook} /></a>
      <a className="telegram">  <FontAwesomeIcon width={"15px"} icon={faTelegram} /></a>
     </div>
    </div>

      </section>

      <hr />
      {/* payment method  + other our websites */}
     <section className='payment-method-website mt-5'>
      {/* payment method */}
      <div className="payment m-2">
        <strong>payment method</strong>
        {/* <div className="payment-image flex items-center gap-3">
          <a href=""><Image width={"40"} height={"40"} src="https://i.pinImage.com/564x/07/73/4c/07734cf160091516ce46a0e71b9f1cab.jpg" alt="" /></a>
          
            <a href=""><Image width={"40"} height={"40"} quality={30} src="https://i.pinImage.com/564x/56/65/ac/5665acfeb0668fe3ffdeb3168d3b38a4.jpg" alt="" /></a>
        <a href=""> <Image width={"40"} height={"40"} quality={30} src="data:image/jpeg;base64,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" alt="" /></a>
          <a href=""> <Image width={"40"} height={"40"} quality={30} src="https://i.pinImage.com/564x/90/12/4c/90124cbeaf3abf53f38d827503f75836.jpg" alt="" /></a>
      
        </div> */}
      </div>
      {/* our website */}
      <div className="payment m-2">
        <strong>payment method</strong>
        <div className="websites flex items-center gap-3">
        <a href="" className='text-slate-500'>EZ games</a>
            <a href="">problems accs</a>
              <a href="">dev x </a>
            <a href="">  button style </a>
        </div>
      </div>
      {/* our website */} 
      <div className="payment m-2">
        <strong>developer </strong>
        <div className="websites flex items-center gap-3">
        {/* <a href="" ><span>ezzghari hicham </span><Image width={"40"} height={"40"} src="https://i.pinImage.com/564x/90/12/4c/90124cbeaf3abf53f38d827503f75836.jpg" alt="" /></a> */}
            
        </div>
      </div>
      
     </section>


    </footer>
  )
}

export default Footer
