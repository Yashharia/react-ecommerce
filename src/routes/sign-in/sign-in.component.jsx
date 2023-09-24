import React from "react";
import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

function SignIn(props) {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (<div>
    sign in component
    <button onClick={logGoogleUser}>Sign in with google</button>
    </div>);
}

export default SignIn;
