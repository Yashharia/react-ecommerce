import React from "react";
import { useState } from "react";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";

import "./sign-in-styles.scss";
import Button from "../button/button.component";
const defaultFormField = {
  email: "",
  password: "",
};

function SignInForm(props) {
  const [formFields, setFormFields] = useState(defaultFormField);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const logGoogleUser = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
    } catch (err) {
      switch (err.code) {
        case "auth/wrong-password":
          alert("incorrect password");
          break;
        case "auth/invalid-login-credentials":
          alert("invalid credentials");
          break;
        default:
          console.log(err);
          break;
      }
      if (err.code == "auth/invalid-login-credentials")
        alert("invalid login credentials");
      console.log(err.message);
    }
  };

  return (
    <div className="sign-up-container">
      <h1>Sign up with your email and password</h1>
      <form>
        <FormInput
          label="Email"
          type="email"
          onChange={handleChange}
          required
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          onChange={handleChange}
          required
          name="password"
          value={password}
        />

        <div className="buttons-container">
          <Button type="submit" onClick={handleSubmit}>
            Sign in
          </Button>
          <Button type="button" buttonType="google" onClick={logGoogleUser}>
            Google Sign in
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
