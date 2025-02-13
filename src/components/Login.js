import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { LOGIN_BG, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);

  const [errorMessage, seterrorMessage] = useState(null);

  // const navigate = useNavigate();

  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };
  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // validate the form data

    // console.log(email.current.value);
    // console.log(password.current.value);
    const message = checkValidData(email.current.value, password.current.value);
    //  console.log(message)
    seterrorMessage(message);

    //proceed to sign in /sign up
    if (message) return;

    if (!isSignInForm) {
      //Sign Up Logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL:USER_AVATAR,
          }).then(() => {
            // Profile updated!
            // ...
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
            // navigate("/browse")
          }).catch((error) => {
            // An error occurred
            // ...
            seterrorMessage(error.message);
          });
          console.log(user)
          // navigate("/browse")

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + "-" + errorMessage)
        });

    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user)
          // navigate("/browse")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + "-" + errorMessage)
        });
    }

  }
  return (
    <div>
      <Header />
      <div className="relative">
        <img
          src={LOGIN_BG}
          alt="background"
        />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="w-4/12 absolute flex flex-col p-12 top-[25%] right-[35%] bg-[#000a] rounded-2xl items-start">
        <h1 className="font-bold text-white text-3xl text-left py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700 text-white"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="p-4 my-4 w-full bg-gray-700 text-white"
        />
        {isSignInForm ? (
          <input
            ref={password}
            type="Password"
            placeholder="Password"
            className="p-4 my-4 w-full bg-gray-700 text-white"
          />
        ) : (
          <input
            ref={password}
            type="Password"
            placeholder="Create Password"
            className="p-4 my-4 w-full bg-gray-700 text-white"
          />
        )}
        <p className="text-red-600 font-bold text-lg py-1">{errorMessage}</p>
        <button className="p-4 my-6 bg-red-600 text-white rounded-sm w-full" onClick={handleButtonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="my-4 text-white cursor-pointer"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign Up now"
            : "Already having account? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
