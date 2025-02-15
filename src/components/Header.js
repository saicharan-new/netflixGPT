import React, { useEffect} from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';
// import { useDispatch } from 'react-redux';
// import { removeUser } from '../utils/userSlice';
const Header = () => {
  // const [isSignIn, setisSignIn] = useState(true)
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const handleSignout = () => {
    signOut(auth).then(() => {
      // setisSignIn(!isSignIn);
      // dispatch(removeUser());
      // navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });

    // unsubscribe when component unmounts
    return () => unsubscribe();

  }, []);

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex items-center justify-between h-20">
      <div className="image">
        <img className="w-40" src={LOGO} alt="logo" />
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
