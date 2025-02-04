import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSignInForm, setisSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm)
  }
  return (
    <div>
      <Header />
      <div className="relative">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7a8c0067-a424-4e04-85f8-9e25a49a86ed/web/IN-en-20250120-TRIFECTA-perspective_860a95da-c386-446e-af83-fef8ddd80803_large.jpg" alt="background" />
      </div>
      <form className="w-4/12 absolute flex flex-col p-12 top-[25%] right-[35%] bg-[#000a] rounded-2xl items-start">
        <h1 className="font-bold text-white text-3xl text-left py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input type="text" placeholder='Full Name' className="p-4 my-4 w-full bg-gray-700 text-white"/>}
        <input type="text" placeholder='Email or Mobile Number' className="p-4 my-4 w-full bg-gray-700 text-white"/>
        {isSignInForm ? <input type="Password" placeholder='Password' className="p-4 my-4 w-full bg-gray-700 text-white"/> : <input type="Password" placeholder='Create Password' className="p-4 my-4 w-full bg-gray-700 text-white"/>}
        <button className="p-4 my-6 bg-red-600 text-white rounded-sm w-full">{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className="my-4 text-white cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up now" : "Already having account? Sign In"}</p>
      </form>
    </div>
  )
}

export default Login
