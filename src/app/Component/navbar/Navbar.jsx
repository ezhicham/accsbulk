"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./navbar.css"

import { faBagShopping, faBars, faChevronDown, faCircleInfo, faMagnifyingGlass, faPenToSquare, faPlus, faTrashCan, faXmark } from "@fortawesome/free-solid-svg-icons"
import { faBell } from "@fortawesome/free-regular-svg-icons"
import Link from "next/link"
import { signOut, useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

import Image from "next/image"



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
      <div className="brand"><span>ezzghari</span></div>
      {/* search box */}
    <div className="first-part flex items-center gap-3">
    
      <input type="search" placeholder="search products..." />
      <button className="search-btn"><FontAwesomeIcon  width={"25px"} icon={ faMagnifyingGlass} /></button>
    {/* display a drop down for catigory of accounts and services  */}
      <div className="catigories">
       <FontAwesomeIcon width={"30px"} icon={faBars} />
       </div>
    </div>
      {/* icons and user name and user profile */}
    <div className="sec-part">
    <div className="cart"><a href=""><FontAwesomeIcon width={'20px'} icon={faBagShopping} /></a></div>
    <div className="notification"><span><FontAwesomeIcon width={'20px'} icon={faBell} /></span></div>
    
       

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
