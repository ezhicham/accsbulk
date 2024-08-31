"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./navbar.css"

import { fa8, faBagShopping, faBars, faBarsStaggered, faChevronDown, faCircleInfo, faCrosshairs, faFootball, faFootballBall, faFutbolBall, faGamepad, faMagnifyingGlass, faPenToSquare, faPersonRifle, faPlus, faStar, faTrashCan, faWind, faXmark } from "@fortawesome/free-solid-svg-icons"
import { faBell } from "@fortawesome/free-regular-svg-icons"
import Link from "next/link"
import { signOut, useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

import Image from "next/image"
import { faCpanel, faFacebook, faInstagram, faPinterest, faPlaystation, faReddit, faSteam, faTiktok, faTwitch, faTwitter, faVk } from "@fortawesome/free-brands-svg-icons"



function Navbar() {
 const [listActive, setListActive]=useState("")
  const { data: session, status } = useSession();
const router=useRouter()

console.log(session)


 const handleTogglemenu=() => {
    
     if(listActive==""){
      setListActive("isActiveMenu")
     }else{
      setListActive("")
     }


 }
 
  return (
    <nav className="flex justify-between  ">
      {/* <div className="brand"><span>ezzghari</span></div> */}
      {/* search box */}
    <div className="first-part flex items-center gap-3">
    
      <input type="search" placeholder="search products..." />
      <button className="search-btn"><FontAwesomeIcon  width={"25px"} icon={ faMagnifyingGlass} /></button>
    
    </div>
      {/* icons and user name and user profile */}
    <div className="sec-part">
      {/* display a drop down for catigory of accounts and services  */}
      <div className="catigories">
      <FontAwesomeIcon className="menu-catigory-icon" icon={faBarsStaggered} />
       <div className="catigory-drop-menu flex gap-3">
        {/* accounts sections  */}
        <div className="accounts catigory">
          <h3>accounts</h3>
          <div className="catigory-icons">
            <a href=""><FontAwesomeIcon icon={faTwitter} /><p>twitter</p></a>
            <a href=""><FontAwesomeIcon icon={faInstagram} /><p>instagram</p></a>
            <a href=""><FontAwesomeIcon icon={faPinterest} /><p>pinterest</p></a>
            <a href=""><FontAwesomeIcon icon={faTiktok} /><p>tiktok</p></a>
            <a href=""><FontAwesomeIcon icon={faReddit} /><p>reddit</p></a>
            <a href=""><FontAwesomeIcon icon={faFacebook} /><p>facebook</p></a>
            <a href=""><FontAwesomeIcon icon={faVk} /><p>vk</p></a>
            <a href=""><FontAwesomeIcon icon={faTwitch} /><p>twitch</p></a>
          </div>
        </div>

   {/* games sections  */}
      <div className="games catigory">
          <h3>games</h3>
          <div className="catigory-icons">
            <a href=""><FontAwesomeIcon icon={faSteam} /><p>steam</p></a>
            <a href=""><FontAwesomeIcon icon={faGamepad } /><p>gta 5</p></a>
            <a href=""><FontAwesomeIcon icon={faGamepad} /><p>valorant</p></a>
            <a href=""><FontAwesomeIcon icon={faPlaystation} /><p>fifa 25</p></a>
            <a href=""><FontAwesomeIcon icon={faFutbolBall} /><p>pes 25</p></a>
            <a href=""><FontAwesomeIcon icon={fa8} /><p>8Ball</p></a>
            <a href=""><FontAwesomeIcon icon={faPersonRifle} /><p>cs</p></a>
            <a href=""><FontAwesomeIcon icon={faCrosshairs} /><p>fortnite</p></a>
            
          </div>
        </div>

        {/* games sections  */}
      <div className="services catigory">
          <h3>services</h3>
          <div className="catigory-icons">
            <a href=""><FontAwesomeIcon icon={faStar} /><p>reels bundels</p></a>
            <a href=""><FontAwesomeIcon icon={faStar } /><p>canva templates</p></a>
            <a href=""><FontAwesomeIcon icon={faStar} /><p>web developement</p></a>
            <a href=""><FontAwesomeIcon icon={faStar} /><p>ux design</p></a>
            <a href=""><FontAwesomeIcon icon={faStar} /><p>app mobile</p></a>
            <a href=""><FontAwesomeIcon icon={faStar} /><p>social media manager</p></a>
            <a href=""><FontAwesomeIcon icon={faPersonRifle} /><p>followers</p></a>
            <a href=""><FontAwesomeIcon icon={faSteam} /><p>proxy</p></a>
          </div>
        </div>

       </div>
       </div>
    <div className="cart"><a href=""><FontAwesomeIcon width={'20px'} style={{fontSize:"20px"}} icon={faBagShopping} /></a></div>
    <div className="notification"><span><FontAwesomeIcon width={'20px'} style={{fontSize:"20px"}} icon={faBell} /></span></div>
    
       

    {/* display drop down menu of user if the user is authenticated */}
    {status==="authenticated"?   <div className="user flex">
  
    
      <Image   
      src="https://static.vecteezy.com/system/resources/thumbnails/009/749/751/small_2x/avatar-man-icon-cartoon-male-profile-mascot-illustration-head-face-business-user-logo-free-vector.jpg"
      width={"100"}
      height={"100"}
      quality={50}
      alt="" />
      {/* drop menu for user  */}
      <div className="drop-menu" >
        {/* toggle show and hide  the drop down list when click on chervron down  */}
      <button className="drop-icon" onClick={handleTogglemenu}>
      <FontAwesomeIcon  width={"15px"} icon={faChevronDown} />
      </button>
       <ul className={`drop-list ${listActive}`}>
        <span className="closeDrop" onClick={handleTogglemenu}><FontAwesomeIcon className="text-red-400" width={"15px"} icon={faXmark} /></span>
      <li><Link href="">{status== "authenticated" ? <div><span className="text-slate-500 p-2">{session.user.name}</span></div>: null }</Link></li>
         <li><Link href="" className="text-red-400"> ballance: <span className="text-green-400">20usd</span></Link></li>
          <li><Link href=""><FontAwesomeIcon className="text-blue-400" width={'15px'} icon={faCircleInfo} /> <span>user info</span></Link></li>
          <li><Link href=""><FontAwesomeIcon className="text-green-500" width={'15px'} icon={faPenToSquare} /><span>edit profile</span></Link></li>
          <li><Link href=""><FontAwesomeIcon className="text-orange-400" width={'15px'} icon={faPlus} /><span>    {session.user.email==="admin@gmail.com"? <Link className="add-btn" href={"/admin/addProduct"}> add product </Link>:null}
      {/* display username of user if the status == authenticated if not  */}
         </span></Link></li>
          
          <li><button   onClick={(eo) => {
            // eo.preventDefault()
            signOut();
            router.push("/Login")
          }
          }><FontAwesomeIcon className="text-red-400" width={'15px'} icon={faTrashCan} /><span>log out</span></button></li>
       </ul>
      </div>
    </div>  :
    // if status == unauthenticated display button to login and register
    <div className="login-register-btn"> <Link href="/Register">register  </Link> / <Link href="Login">log in</Link></div>}
  
    </div>
    </nav>
  )
}

export default Navbar
