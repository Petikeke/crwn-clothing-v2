import {signInWithGooglePopup , createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils'

const SignIn = () => {
    const logGoogleUser = async() => {
        const {user} = await signInWithGooglePopup();
        createUserDocumentFromAuth(user)
    }
return (
<div>
    <h1>Sign in page you shit</h1>
    <button onClick={logGoogleUser}>Sign in with Google</button>
</div>)
   }

export default SignIn;