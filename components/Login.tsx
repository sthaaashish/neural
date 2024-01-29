"use client";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, provider } from "@/features/googleAuth";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "@/app/lib/userSlice";
import { useRouter } from 'next/navigation'

const GoogleLogin = () => {
  const router =useRouter();
  const dispatch=useDispatch();
  const [error, setError] = useState(null);

  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
      
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential && credential.accessToken;

        const signedInUser = result.user;
        dispatch(addUser(signedInUser));
        router.push("/", {scroll:false})
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
  
    
            <>
            <button onClick={handleClick}>Sign in with Google</button>
            {error && <p>Error: {error}</p>}
            </>

  );
};

export default GoogleLogin;
