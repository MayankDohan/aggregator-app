import {Link, useLocation} from "react-router-dom";
import SocialSignIn from "./SocialSignIn";
import styles from './auth.module.scss'

const AuthComp = ()=>{
const location = useLocation();
 const isLogin = location.pathname==='/login'

const typeForm = {
   loginText : {
    headingText : "Login with your email id",
    buttonText: "Log in",
    spanText : "Don't have an account?",
    link:"Sign up"
},
signUpText:{
    headingText : "Sign up with us",
    buttonText: "Sign up",
    spanText: "Already have an account?",
    link:"Log in"

}
}

    const formShowText = isLogin ? typeForm.loginText : typeForm.signUpText
    let nextLinkPath;
    if(formShowText.link==='Log in'){
    nextLinkPath = '/login';
    }
    else{
    nextLinkPath = '/signup';
    }

    return(
            <div className="container">
                <div className={`${styles.headingAuth} w-100`}>
                    <span>{formShowText.headingText}</span>
                   </div>
            <form>
                <div>
                    <div className={ `${styles.inputEmail} my-3 w-100`}>
                        <input type="email"  autoComplete="off" placeholder="enter your email" id="typeEmail" name="email"/>
                        <label for="typeEmail">Email Address</label>
                    </div>
                    <div className={ `${styles.inputPass} my-3  w-100 `} >
                    <input type="password" autoComplete="off" placeholder="enter your password"  id="typePass" name="password"/>
                    <label for="typePass">Password</label>
                    <span  className={`${styles.inputText}`} id="basic-addon2" >Forgot Password?</span>
                    </div>
                    <div className={`${styles.buttonS}  my-3 px-2 w-100`}>
                        <button type="submit" >{formShowText.buttonText}</button>
                    </div>
                    </div>
            </form>
            <div className={`${styles.accountSpan} `}>
               <div>
                <span>{formShowText.spanText}</span>
               <Link className={`${styles.linkStyling}`} to={nextLinkPath}>{formShowText.link}
               </Link>
               </div>
              
            </div>
            <SocialSignIn/>
            </div>
    )
}

export default AuthComp;