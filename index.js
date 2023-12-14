/* === Imports === */
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js"
import { getAuth, 
         createUserWithEmailAndPassword, 
         signInWithEmailAndPassword,
         signOut } from "firebase/auth"

/* === Firebase Setup === */
const firebaseConfig = {
    apiKey: "AIzaSyA3v6lb8zIBFXvpzGT6SVRrIqqiHqzeatw",
    authDomain: "moody-cce82.firebaseapp.com",
    projectId: "moody-cce82",
    storageBucket: "moody-cce82.appspot.com",
    messagingSenderId: "438652529307",
    appId: "1:438652529307:web:d56e96a3b63046640bb43e"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

/* === UI === */

/* == UI - Elements == */

const viewLoggedOut = document.getElementById("logged-out-view")
const viewLoggedIn = document.getElementById("logged-in-view")

const signInWithGoogleButtonEl = document.getElementById("sign-in-with-google-btn")

const emailInputEl = document.getElementById("email-input")
const passwordInputEl = document.getElementById("password-input")

const signInButtonEl = document.getElementById("sign-in-btn")
const createAccountButtonEl = document.getElementById("create-account-btn")

/* == UI - Event Listeners == */

signInWithGoogleButtonEl.addEventListener("click", authSignInWithGoogle)

signInButtonEl.addEventListener("click", authSignInWithEmail)
createAccountButtonEl.addEventListener("click", authCreateAccountWithEmail)

/* === Main Code === */

showLoggedOutView()

/* === Functions === */

/* = Functions - Firebase - Authentication = */

function authSignInWithGoogle() {
    console.log("Sign in with Google")
}

function authSignInWithEmail() {
    
    const email = emailInputEl.value
    const password = passwordInputEl.value

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            showLoggedInView()
        })
        .catch((error) => {
            console.error(error.message)
        })
}

function authCreateAccountWithEmail() {

    const email = emailInputEl.value
    const password = passwordInputEl.value

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            showLoggedInView()
        })
        .catch((error) => {
            console.error(error.message)
        })
}

/* == Functions - UI Functions == */

function authSignOut() {
 
    signOut(auth).then(() => {
        showLoggedOutView()
        }).catch((error) => {
            console.error(error.message)
        })
}

function showLoggedOutView() {
    hideElement(viewLoggedIn)
    showElement(viewLoggedOut)
}

function showLoggedInView() {
    hideElement(viewLoggedOut)
    showElement(viewLoggedIn)
}

function showElement(element) {
    element.style.display = "flex"
}

function hideElement(element) {
    element.style.display = "none"
}