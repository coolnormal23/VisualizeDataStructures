import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js'
    
// If you enabled Analytics in your project, add the Firebase SDK for Google Analytics
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-analytics.js'

// Add Firebase products that you want to use
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js'
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js'
const firebaseConfig = {
    apiKey: "AIzaSyAVubYGtFuLci5rpbMH4VC0ST8Hz7ayV88",
    authDomain: "visualizedatastructures.firebaseapp.com",
    projectId: "visualizedatastructures",
    storageBucket: "visualizedatastructures.appspot.com",
    messagingSenderId: "309159364427",
    appId: "1:309159364427:web:25297eedee8fe2fdde8ace",
    measurementId: "G-3TKWZPJZ9D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

function signIn()
{
    var email = document.getElementById("email").value;
    var password = document.getElementById("psw").value;
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        console.log("Signed in");
        var user = userCredential.user;
        document.getElementById('id01').style.display='none'
        document.getElementById('loginformopenbutton').style.display="none";
        document.getElementById('signedinstatus').style.display="block";
        document.getElementById('signedinstatus').innerHTML=("Signed in as "+user.providerData.email);
        // ...
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("There was an error while signing in.");
        console.log(errorCode);
        console.log(errorMessage);
        document.getElementById('loginerror').style.display="block";
    })
}

function register()
{
    var email = document.getElementById("email").value;
    var password = document.getElementById("psw").value;
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        console.log("Signed in");
        var user = userCredential.user;
        document.getElementById('id01').style.display='none'
        document.getElementById('loginformopenbutton').style.display="none";
        document.getElementById('signedinstatus').style.display="block";
        document.getElementById('signedinstatus').innerHTML="Signed in";
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("There was an error while signing in.");
        console.log(errorCode);
        console.log(errorMessage);
        document.getElementById('loginerror').style.display="block";
    })
}

window.onload = function(){
    document.getElementById("loginbutton").addEventListener("click", signIn);
    document.getElementById("registerbutton").addEventListener("click", register);
}