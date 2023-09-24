import SignUpForm from "../../components/sign-up/sign-up.component";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
function SignIn() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      sign in component
      <button onClick={logGoogleUser}>Sign in with google</button>
      <SignUpForm/>
    </div>
  );
}

export default SignIn;
