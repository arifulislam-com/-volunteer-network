import React, { useContext } from 'react';
import firebaseConfig from '../../firebase.config';
import Logo from '../Logo/Logo';
import firebase from "firebase/app";
import "firebase/auth";
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';


firebase.initializeApp(firebaseConfig);

const Login = () => {
    const user = useContext(userContext);
    const [loggedInUser, setLoggedInuser] = user;
    console.log(loggedInUser);
    let history = useHistory();
    let location = useLocation();
  
    let { from } = location.state || { from: { pathname: "/" } };


    const provider = new firebase.auth.GoogleAuthProvider();

    function handleSigninMethod(){
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;

            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            const email = user.email
            setLoggedInuser(email);
            history.replace(from);
            console.log("Susses ", user.displayName);
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("Fail ", errorMessage);
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
    }
    return (
        <div>
            <Logo/>
            <div className="login">
            <h1>user{loggedInUser}</h1>
                <h2>Login With</h2>
                <button onClick = {()=>handleSigninMethod()}>Continue with Google</button>
                <p>Don't have an account? <a href="#">Create an account</a></p>
            </div>
        </div>
    );
};

export default Login;