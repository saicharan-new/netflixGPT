import React, { useState } from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { removeUser } from '../utils/userSlice';
const Header = () => {
  // const [isSignIn, setisSignIn] = useState(true)
  const user = useSelector(store => store.user);
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const handleSignout = () => {
    signOut(auth).then(() => {
      // setisSignIn(!isSignIn);
      // dispatch(removeUser());
      navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex items-center justify-between">
      <div className="image">
        <img className="w-44" src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
      </div>
      {user && (
        <div className="flex gap-1 items-center">
          <img className="w-12 h-12" src={user?.photoURL} alt="usericon" />
          <button className="text-white font-bold" onClick={handleSignout}>(sign out)</button>
        </div>
      )}
    </div>
  )
}

export default Header
