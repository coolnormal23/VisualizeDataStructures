import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js'

// If you enabled Analytics in your project, add the Firebase SDK for Google Analytics
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-analytics.js'

// Add Firebase products that you want to use
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js'
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js'
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
const db = getFirestore(app);
var currentuserdocument;

function signIn()
{
    var email = document.getElementById("email").value;
    var password = document.getElementById("psw").value;
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        console.log("Signed in");
        var currentuser = userCredential.user;
        document.getElementById('id01').style.display='none'
        document.getElementById('loginformopenbutton').style.display="none";
        document.getElementById('signedinstatus').style.display="block";
        document.getElementById('signedinstatus').innerHTML=("Signed in as " + currentuser.providerData[0].email);
        console.log(currentuser);
        console.log(currentuser.providerData);
        
        //database document
        console.log("Writing");
        var userFound = false;
        const querySnapshot = getDocs(collection(db, "userLogs"));
        querySnapshot.forEach((doc) => {
            // if document found with user email
            if(doc.data().user == currentuser.providerData[0].email)
            {
                userFound == true;
                currentuserdocument = doc;
                console.log("Document found");
            }
        });
        if(userFound == false)
        {
            const userdoc = addDoc(collection(db,"userLogs"),{
                user:(currentuser.providerData[0].email),
                //array
                arraySetSize: false,
                arraySetElement: false,
                arrayFindElement: false,
                
                //vector
                vectorPushBack: false,
                vectorPopBack: false,
                vectorFindElement: false,
                
                //linkedlist
                listAdd: false,
                listDelete: false,
                listFindElement: false,
                
                //bst
                treeInsert: false,
                
                //queue
                queueEnqueue: false,
                queueDequeue: false,
                queueFindElement: false,
                
                //stack
                stackPush: false,
                stackPop: false,
                
                //hash
                hashSetSize: false,
                hashAdd: false,
                hashDelete: false,
                hashFind: false
            });
            console.log("Document written ID: ",userdoc.id);
        }
        // ...
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("There was an error while signing in.");
        console.log(errorCode);
        console.log(errorMessage);
        document.getElementById('loginerror').style.display="block";
    });
}

function register()
{
    var email = document.getElementById("email").value;
    var password = document.getElementById("psw").value;
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        //signing in
        console.log("Signed in");
        var currentuser = userCredential.user;
        document.getElementById('id01').style.display='none'
        document.getElementById('loginformopenbutton').style.display="none";
        document.getElementById('signedinstatus').style.display="block";
        document.getElementById('signedinstatus').innerHTML=("Signed in as " + currentuser.providerData[0].email);
        console.log(currentuser);
        console.log(currentuser.providerData);
        
        //create user database document
        console.log("Writing");
        const userdoc = addDoc(collection(db,"userLogs"),{
            user:(currentuser.providerData[0].email),
            //array
            arraySetSize: false,
            arraySetElement: false,
            arrayFindElement: false,
            
            //vector
            vectorPushBack: false,
            vectorPopBack: false,
            vectorFindElement: false,
            
            //linkedlist
            listAdd: false,
            listDelete: false,
            listFindElement: false,
            
            //bst
            treeInsert: false,
            
            //queue
            queueEnqueue: false,
            queueDequeue: false,
            queueFindElement: false,
            
            //stack
            stackPush: false,
            stackPop: false,
            
            //hash
            hashSetSize: false,
            hashAdd: false,
            hashDelete: false,
            hashFind: false
        });
        console.log("Document written ID: ",userdoc.id);
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

function changeDb(field)
{
    var obj = {};
    obj[field] = true;
    updateDoc(currentuserdocument, obj);
}

onAuthStateChanged(auth, (user)=>{
    if(user)
    {
        document.getElementById("arraySetSizeButton").addEventListener("click", changeDb(arraySetSize));
    }
});