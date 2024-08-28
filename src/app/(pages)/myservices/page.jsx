import React from 'react'
import "./myservices.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

function page() {
  return (
    <div className="our-services">
      <div className="title">
        <h1>what we provid</h1>
        <p>we provide many services like ux/ui web devlopment fullstack Lorem ipsum, 
          dolor sit amet consectetur adipisicing elit. Saepe, laboriosam!....</p>
      </div>

      <div className="services">
        <div className="service">
          {/* <div className="img"><img src="https://cdn-icons-png.flaticon.com/512/2721/2721616.png" width={"40"} alt="" /></div> */}
          <div className="service-Desc">
            <h3>front end developer</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam aperiam 
              quisquam hic, quis Lorem, ipsum dolor
              </p>
              <span className="status">available</span>
              <a href="">more details</a>
          </div>
          <a href='' className="contact-seller bg-green-300 p-2"><p>hire</p><FontAwesomeIcon width={"15"} icon={faWhatsapp} /></a>
        </div>

        <div className="service">
          {/* <div className="img"><img src="https://cdn-icons-png.flaticon.com/512/2721/2721616.png" width={"40"} alt="" /></div> */}
          <div className="service-Desc">
            <h3>full stack developer</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam aperiam 
              quisquam hic, quis Lorem, ipsum dolor
              </p>
              <span className="status">available</span>
              <a href="">more details</a>
          </div>
          <a href='' className="contact-seller bg-green-300 p-2"><p>hire</p><FontAwesomeIcon width={"15"} icon={faWhatsapp} /></a>
        </div>

        <div className="service">
          {/* <div className="img"><img src="https://cdn-icons-png.flaticon.com/512/2721/2721616.png" width={"40"} alt="" /></div> */}
          <div className="service-Desc">
            <h3>ux designer</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam aperiam 
              quisquam hic, quis Lorem, ipsum dolor
              </p>
              <span className="status">available</span>
              <a href="">more details</a>
          </div>
          <a href='' className="contact-seller bg-green-300 p-2"><p>hire</p><FontAwesomeIcon width={"15"} icon={faWhatsapp} /></a>
        </div>

        <div className="service">
          {/* <div className="img"><img src="https://cdn-icons-png.flaticon.com/512/2721/2721616.png" width={"40"} alt="" /></div> */}
          <div className="service-Desc">
            <h3>grapich designer</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam aperiam 
              quisquam hic, quis Lorem, ipsum dolor
              </p>
              <span className="status">available</span>
              <a href="">more details</a>
          </div>
          <a href='' className="contact-seller bg-green-300 p-2"><p>hire</p><FontAwesomeIcon width={"15"} icon={faWhatsapp} /></a>
        </div>

        <div className="service">
          {/* <div className="img"><img src="https://cdn-icons-png.flaticon.com/512/2721/2721616.png" width={"40"} alt="" /></div> */}
          <div className="service-Desc">
            <h3>social media manager</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam aperiam 
              quisquam hic, quis Lorem, ipsum dolor
              </p>
              <span className="status">available</span>
              <a href="">more details</a>
          </div>
          <a href='' className="contact-seller bg-green-300 p-2"><p>hire</p><FontAwesomeIcon width={"15"} icon={faWhatsapp} /></a>
        </div>

        <div className="service">
          {/* <div className="img"><img src="https://cdn-icons-png.flaticon.com/512/2721/2721616.png" width={"40"} alt="" /></div> */}
          <div className="service-Desc">
            <h3>app mobile developer</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam aperiam 
              quisquam hic, quis Lorem, ipsum dolor
              </p>
              <span className="status">available</span>
              <a href="">more details</a>
          </div>
          <a href='' className="contact-seller bg-green-300 p-2"><p>hire</p><FontAwesomeIcon width={"15"} icon={faWhatsapp} /></a>
        </div>
      
      
      </div>
    </div>
  )
}

export default page
