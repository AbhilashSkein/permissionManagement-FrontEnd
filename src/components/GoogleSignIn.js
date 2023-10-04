import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google"

const GoogleSignIn = () =>{
   const clientId = "126934305380-fv01cf43vl47dfvoe5rtcoli3g3c5rcq.apps.googleusercontent.com"

   const responseGoogle = (response)=>{
    console.log(response.profileObj);
   }
    return(
        <>
        <GoogleOAuthProvider clientId={clientId}>
            <GoogleLogin useOneTap
                buttonText="Login with Google"
                onSuccess={responseGoogle}
                onFailure={()=> console.log('Login Failed')}
                cookiePolicy={"Single_host_origin"}
                scope="https://www.googleapis.com/auth/userinfo.email"
            />
        </GoogleOAuthProvider>
            
        </>
    )
}

export default GoogleSignIn;