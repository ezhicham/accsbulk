import React from 'react'
import "../registerLogin.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import FormLogin from './FormLogin';
import Link from 'next/link';


export const metadata = {
  title: "login ",
  description: "Generated by create next app",

};
function page() {
  return (
    <div className='register-login'>
    <div className="register-login-header">
      <h1>log in</h1>
      <p>hi dear user welcome back 👋 login to your accounts to have access to more features  💝</p>
      <span className='text-slate-700 capitalize'>new user in accsBulk ? <Link href='/Register' className='text-violet-400 capitalize'> creacte an account</Link></span>
    </div>
    
      <div className="register-login-methods">
        <div className='google '><FontAwesomeIcon className='text-orange-500'  width={"20px"} icon={faGoogle} /></div>
        <div className='facebook bg-blue-600'><FontAwesomeIcon   width={"20px"}  icon={faFacebook} /></div>
        <div className='redbuble bg-blue-400'><FontAwesomeIcon width={"20px"} icon={faTwitter} /></div>
        <div className='github bg-black'><FontAwesomeIcon  width={"20px"}   icon={faGithub} /></div>
      </div>
       <div className="lines">
        <div className="line"></div>
        <span>or</span>
        <div className="line"></div>
       </div>
           

           {/* form  */}
           <FormLogin/>


  </div>
  )
}

export default page
