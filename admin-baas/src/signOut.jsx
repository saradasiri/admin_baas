import { Button } from "bootstrap-4-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./firebase.config";

const SignOut = () => {
  const navigate = useNavigate();

  const handleSignout = async () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return <Button link style={{color:"#fff" ,backgroundColor:"none"}}onClick={handleSignout}>Sign out</Button>;
};

export default SignOut;
