import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };
  return (
    <div>
      <h1>Sign IN</h1>
      <button onClick={logGoogleUser}>sign in with Google Popup</button>
    </div>
  );
};

export default SignIn;
