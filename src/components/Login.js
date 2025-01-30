import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div>
      <Header />
      <div className="relative">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7a8c0067-a424-4e04-85f8-9e25a49a86ed/web/IN-en-20250120-TRIFECTA-perspective_860a95da-c386-446e-af83-fef8ddd80803_large.jpg" alt="background" />
      </div>
      <form className="absolute flex flex-col p-12 top-[40%] right-[40%] bg-[#000a] rounded-2xl items-start">
        <h1 className="font-bold text-white text-3xl text-left py-4">Sign In</h1>
        <input type="text" placeholder='Email or Mobile Number' className="p-2 m-2 mb-4"/>
        <input type="Password" placeholder='Password' className="p-2 m-2"/>
        <button className="p-4 m-4 bg-red-600 text-white rounded-sm">Log In / Sign In</button>
      </form>
    </div>
  )
}

export default Login
