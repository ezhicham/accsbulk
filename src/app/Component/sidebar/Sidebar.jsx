"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./sidebar.css"
import { faBriefcase, faChevronRight, faCircleXmark, faClockRotateLeft, faCode, faCoins, faHandshake, faHeadset, faHouse, faNewspaper, faStore, faTicket, faUsersViewfinder } from "@fortawesome/free-solid-svg-icons"
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
        <li><Link href="/myservices"><FontAwesomeIcon width={"15px"} icon={faBriefcase} /><span>services</span></Link></li>
        <li><a href=""><FontAwesomeIcon width={"15px"} icon={faNewspaper} /><span>blogs</span></a></li>
        <li><a href=""><FontAwesomeIcon width={"15px"} icon={faCoins} /><span>earn money</span></a></li>
        <li><a href=""><FontAwesomeIcon width={"15px"} icon={faCode} /><span>devlopement</span></a></li>
        <li><a href=""><FontAwesomeIcon width={"15px"} icon={faUsersViewfinder} /><span>become seller</span></a></li>
        <li><a href=""><FontAwesomeIcon width={"15px"} icon={faHeadset} /><span>support </span></a></li>
        <li><a href=""><FontAwesomeIcon width={"15px"} icon={faTicket} /><span>ticket</span></a></li>
  
      </ul>
    </div>

    </aside>
  )
}

export default Sidebar
