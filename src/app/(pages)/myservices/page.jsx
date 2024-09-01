import React from "react"
import "./myservices.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"

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
            <p>I build responsive, visually appealing websites using HTML,
               CSS, JavaScript, React.js, and Next.js, ensuring smooth performance across all devices
              </p>
              <span className="status">available</span>
              <a href="">more details</a>
          </div>
          <a href="" className="contact-seller bg-green-300 p-2"><p>hire</p><FontAwesomeIcon width={"15"} icon={faWhatsapp} /></a>
        </div>

        <div className="service">
          {/* <div className="img"><img src="https://cdn-icons-png.flaticon.com/512/2721/2721616.png" width={"40"} alt="" /></div> */}
          <div className="service-Desc">
            <h3>full stack developer</h3>
            <p>I develop full-stack web applications using HTML, CSS, JavaScript, React.js, Node.js, and Express, delivering seamless front-end and back-end integration.
              </p>
              <span className="status">available</span>
              <a href="">more details</a>
          </div>
          <a href="" className="contact-seller bg-green-300 p-2"><p>hire</p><FontAwesomeIcon width={"15"} icon={faWhatsapp} /></a>
        </div>

        <div className="service">
          {/* <div className="img"><img src="https://cdn-icons-png.flaticon.com/512/2721/2721616.png" width={"40"} alt="" /></div> */}
          <div className="service-Desc">
            <h3>ux/ui designer</h3>
            <p>I design intuitive and engaging user interfaces, focusing on seamless 
              user experiences with modern UX/UI principles and tools
              </p>
              <span className="status">available</span>
              <a href="">more details</a>
          </div>
          <a href="" className="contact-seller bg-green-300 p-2"><p>hire</p><FontAwesomeIcon width={"15"} icon={faWhatsapp} /></a>
        </div>

        <div className="service">
          {/* <div className="img"><img src="https://cdn-icons-png.flaticon.com/512/2721/2721616.png" width={"40"} alt="" /></div> */}
          <div className="service-Desc">
            <h3>grapich designer</h3>
            <p>I create stunning visual designs, including logos, banners, and graphics, using tools like Adobe Photoshop and Illustrator to elevate your brand look
              </p>
              <span className="status">available</span>
              <a href="">more details</a>
          </div>
          <a href="" className="contact-seller bg-green-300 p-2"><p>hire</p><FontAwesomeIcon width={"15"} icon={faWhatsapp} /></a>
        </div>

        <div className="service">
          {/* <div className="img"><img src="https://cdn-icons-png.flaticon.com/512/2721/2721616.png" width={"40"} alt="" /></div> */}
          <div className="service-Desc">
            <h3>social media manager</h3>
            <p>I manage your social media presence with tailored strategies, engaging content,
               and analytics to 
              boost your brand s visibility and growth
              </p>
              <span className="status">available</span>
              <a href="">more details</a>
          </div>
          <a href="" className="contact-seller bg-green-300 p-2"><p>hire</p><FontAwesomeIcon width={"15"} icon={faWhatsapp} /></a>
        </div>

        <div className="service">
          {/* <div className="img"><img src="https://cdn-icons-png.flaticon.com/512/2721/2721616.png" width={"40"} alt="" /></div> */}
          <div className="service-Desc">
            <h3>app mobile developer</h3>
            <p>I build intuitive and high-performance mobile apps for iOS and Android,
               using technologies like React Native and Flutter for a seamless user experience
              </p>
              <span className="status">available</span>
              <a href="">more details</a>
          </div>
          <a href="" className="contact-seller bg-green-300 p-2"><p>hire</p><FontAwesomeIcon width={"15"} icon={faWhatsapp} /></a>
        </div>
      
      
      </div>
    </div>
  )
}

export default page
