"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./sidebar.css"
import { faChevronRight, faCircleXmark, faClockRotateLeft, faHandshake, faHeadset, faHouse, faStore } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import { useState } from "react"

function Sidebar() {

  const [hideSidbar,sethideSidbar]=useState("")
  return (

    <aside className={`aside   ${hideSidbar}`}>
  <div className={`sidebar flex flex-col gap-5 `}>
    {/* btn to hide the sidebare */}
  <div className="hide-sidbarbtn" onClick={() => {
    console.log('btn clicked')

    if(hideSidbar==""){
      sethideSidbar("hidesidbar")
    }else{
      sethideSidbar("")
    }
    


  }
  }>
{hideSidbar==""? <FontAwesomeIcon width={"35px"}  icon={faChevronRight} /> : <FontAwesomeIcon className="text-red-400" width={"35"} icon={faCircleXmark} />}   </div>
  
  
    <div className="nav-brand"><a href="">bulkaccs<span> <FontAwesomeIcon width={"30px"} icon= {faHandshake} /></span></a> </div>
      <ul className="nav-menu">
        <li><Link href="/"><FontAwesomeIcon width={"15px"} icon={faHouse} /><span>home</span></Link></li>
        <li><Link href="/AllProducts"><FontAwesomeIcon width={"15px"} icon={faStore} /><span>products</span></Link></li>
        <li><a href=""><FontAwesomeIcon width={"15px"} icon={faHeadset} /><span>products</span></a></li>
        <li><a href=""><FontAwesomeIcon width={"15px"} icon={faHeadset} /><span>services</span></a></li>
        <li><a href=""><FontAwesomeIcon width={"15px"} icon={faHeadset} /><span>blogs</span></a></li>
        <li><a href=""><FontAwesomeIcon width={"15px"} icon={faHeadset} /><span>earn money</span></a></li>
        <li><a href=""><FontAwesomeIcon width={"15px"} icon={faHeadset} /><span>devlopement</span></a></li>
        <li><a href=""><FontAwesomeIcon width={"15px"} icon={faHeadset} /><span>sellers</span></a></li>
        <li><a href=""><FontAwesomeIcon width={"15px"} icon={faHeadset} /><span>support </span></a></li>
        <li><a href=""><FontAwesomeIcon width={"15px"} icon={faHeadset} /><span>tickeck</span></a></li>
  
      </ul>
    </div>

    </aside>
  )
}

export default Sidebar
