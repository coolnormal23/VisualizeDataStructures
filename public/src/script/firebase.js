import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js'

// If you enabled Analytics in your project, add the Firebase SDK for Google Analytics
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-analytics.js'

// Add Firebase products that you want to use
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js'
import { getFirestore, collection, doc, addDoc, updateDoc, getDocs, getDoc } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js'
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
        document.getElementById('progress').style.display="block";
        document.getElementById('signedinstatus').innerHTML=("Signed in as " + currentuser.providerData[0].email);
        console.log(currentuser);
        console.log(currentuser.providerData);
        
        //database document
        console.log("Writing in signin");
        var userFound = false;
        getDocs(collection(db, "userLogs")).then((querySnapshot) => {
            querySnapshot.forEach((foundDocument) => {
                if((foundDocument.data().user) == (currentuser.providerData[0].email))
                {
                    userFound = true;
                    console.log("Document found");
                    const docref = doc(db,"userLogs",foundDocument.id);
                    //progress page
                    const docSnap = getDoc(docref);
                    function updateProgress()
                    {
                        if(docSnap.data().arraySetSize == true) {
                            document.getElementById("arraySetSizeReport").innerHTML = "Set Size: ✔";
                        } 
                        if(docSnap.data().arraySetElement == true) {
                            document.getElementById("arraySetElementReport").innerHTML = "Set Element: ✔";
                        } 
                        if(docSnap.data().arrayFindElement == true) {
                            document.getElementById("arrayFindElementReport").innerHTML = "Find Element: ✔";
                        }
                        if(docSnap.data().vectorPushBack == true) {
                            document.getElementById("vectorPushBackReport").innerHTML = "push_back: ✔";
                        }
                        if(docSnap.data().vectorPopBack == true) {
                            document.getElementById("vectorPopBackReport").innerHTML = "pop_back: ✔";
                        }
                        if(docSnap.data().vectorFindElement == true) {
                            document.getElementById("vectorFindElementReport").innerHTML = "Find Element: ✔";
                        }
                        if(docSnap.data().listAdd == true) {
                            document.getElementById("listAddReport").innerHTML = "Add Element: ✔";
                        }
                        if(docSnap.data().listDelete == true) {
                            document.getElementById("listDeleteReport").innerHTML = "Delete Element: ✔";
                        }
                        if(docSnap.data().listFindElement == true) {
                            document.getElementById("listFindElementReport").innerHTML = "Find Element: ✔";
                        }
                        if(docSnap.data().treeInsert == true) {
                            document.getElementById("treeInsertReport").innerHTML = "Add Element: ✔";
                        }
                        if(docSnap.data().queueEnqueue == true) {
                            document.getElementById("queueEnqueueReport").innerHTML = "Enqueue Element: ✔";
                        }
                        if(docSnap.data().queueDequeue == true) {
                            document.getElementById("queueDequeueReport").innerHTML = "Dequeue Element: ✔";
                        }
                        if(docSnap.data().queueFindElement == true) {
                            document.getElementById("queueFindElementReport").innerHTML = "Find Element: ✔";
                        }
                        if(docSnap.data().stackPush == true) {
                            document.getElementById("stackPushReport").innerHTML = "Push Element: ✔";
                        }
                        if(docSnap.data().stackPop == true) {
                            document.getElementById("stackPopReport").innerHTML = "Pop Element: ✔";
                        }
                        if(docSnap.data().stackFindElement == true) {
                            document.getElementById("stackFindElementReport").innerHTML = "Find Element: ✔";
                        }
                        if(docSnap.data().hashSetSize == true) {
                            document.getElementById("hashSetSizeReport").innerHTML = "Set Size: ✔";
                        }
                        if(docSnap.data().hashAdd == true) {
                            document.getElementById("hashAddReport").innerHTML = "Add Element: ✔";
                        }
                        if(docSnap.data().hashDelete == true) {
                            document.getElementById("hashDeleteReport").innerHTML = "Delete Element: ✔";
                        }
                        if(docSnap.data().hashFind == true) {
                            document.getElementById("hashFindReport").innerHTML = "Find Element: ✔";
                        }
                    }
                    updateProgress();
                    //click listeners
                    //arrays
                    document.getElementById("arraySetSizeButton").addEventListener("click", function(){updateDoc(docref,{
                        arraySetSize:true
                    })});
                    document.getElementById("arraySetElementButton").addEventListener("click", function(){updateDoc(docref,{
                        arraySetElement:true
                    })});
                    document.getElementById("arrayFindElementButton").addEventListener("click", function(){updateDoc(docref,{
                        arrayFindElement:true
                    })});
                    
                    //vectors
                    document.getElementById("vectorPushBackButton").addEventListener("click", function(){updateDoc(docref,{
                        vectorPushBack:true
                    })});
                    document.getElementById("vectorPopBackButton").addEventListener("click", function(){updateDoc(docref,{
                        vectorPopBack:true
                    })});
                    document.getElementById("vectorFindElementButton").addEventListener("click", function(){updateDoc(docref,{
                        vectorFindElement:true
                    })});
                    
                    //lists
                    document.getElementById("listAddButton").addEventListener("click", function(){updateDoc(docref,{
                        listAdd:true
                    })});
                    document.getElementById("listDeleteButton").addEventListener("click", function(){updateDoc(docref,{
                        listDelete:true
                    })});
                    document.getElementById("listFindElementButton").addEventListener("click", function(){updateDoc(docref,{
                        listFindElement:true
                    })});
                    
                    //stacks
                    document.getElementById("stackPushButton").addEventListener("click", function(){updateDoc(docref,{
                        stackPush:true
                    })});
                    document.getElementById("stackPopButton").addEventListener("click", function(){updateDoc(docref,{
                        stackPop:true
                    })});
                    document.getElementById("stackFindElementButton").addEventListener("click", function(){updateDoc(docref,{
                        stackFindElement:true
                    })});
                    
                    //queues
                    document.getElementById("queueEnqueueButton").addEventListener("click", function(){updateDoc(docref,{
                        queueEnqueue:true
                    })});
                    document.getElementById("queueDequeueButton").addEventListener("click", function(){updateDoc(docref,{
                        queueDequeue:true
                    })});
                    document.getElementById("queueFindElementButton").addEventListener("click", function(){updateDoc(docref,{
                        queueFindElement:true
                    })});
                    
                    //bst
                    document.getElementById("bstinsertButton").addEventListener("click", function(){updateDoc(docref,{
                        treeInsert:true
                    })});
                    
                    //hashes
                    document.getElementById("hashAddButton").addEventListener("click", function(){updateDoc(docref,{
                        hashAdd:true
                    })});
                    document.getElementById("hashDeleteButton").addEventListener("click", function(){updateDoc(docref,{
                        hashDelete:true
                    })});
                    document.getElementById("hashFindElementButton").addEventListener("click", function(){updateDoc(docref,{
                        hashFind:true
                    })});
                    document.getElementById("hashSetSizeButton").addEventListener("click", function(){updateDoc(docref,{
                        hashSetSize:true
                    })});
                    console.log("Document found");
                }
            });
            return null;
        }).then(function(){
            if(!userFound)
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
                    stackFindElement: false,
                    
                    //hash
                    hashSetSize: false,
                    hashAdd: false,
                    hashDelete: false,
                    hashFind: false
                });
                console.log("Document written ID: ",userdoc.id);
            }
            return null;
        });
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
        document.getElementById('progress').style.display="block";
        document.getElementById('signedinstatus').innerHTML=("Signed in as " + currentuser.providerData[0].email);
        console.log(currentuser);
        console.log(currentuser.providerData);
        
        //create user database document
        console.log("Writing register");
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
            stackFindElement: false,

            //hash
            hashSetSize: false,
            hashAdd: false,
            hashDelete: false,
            hashFind: false
        });
        console.log("Document written ID: ",userdoc.id);
        getDocs(collection(db, "userLogs")).then((querySnapshot) => {
            querySnapshot.forEach((foundDocument) => {
                if((foundDocument.data().user) == (currentuser.providerData[0].email))
                {
                    userFound = true;
                    //progress page
                    const docref = doc(db,"userLogs",foundDocument.id);
                    const docSnap = getDoc(docref);
                    function updateProgress()
                    {
                        if(docSnap.data().arraySetSize == true) {
                            document.getElementById("arraySetSizeReport").innerHTML = "Set Size: ✔";
                        } 
                        if(docSnap.data().arraySetElement == true) {
                            document.getElementById("arraySetElementReport").innerHTML = "Set Element: ✔";
                        } 
                        if(docSnap.data().arrayFindElement == true) {
                            document.getElementById("arrayFindElementReport").innerHTML = "Find Element: ✔";
                        }
                        if(docSnap.data().vectorPushBack == true) {
                            document.getElementById("vectorPushBackReport").innerHTML = "push_back: ✔";
                        }
                        if(docSnap.data().vectorPopBack == true) {
                            document.getElementById("vectorPopBackReport").innerHTML = "pop_back: ✔";
                        }
                        if(docSnap.data().vectorFindElement == true) {
                            document.getElementById("vectorFindElementReport").innerHTML = "Find Element: ✔";
                        }
                        if(docSnap.data().listAdd == true) {
                            document.getElementById("listAddReport").innerHTML = "Add Element: ✔";
                        }
                        if(docSnap.data().listDelete == true) {
                            document.getElementById("listDeleteReport").innerHTML = "Delete Element: ✔";
                        }
                        if(docSnap.data().listFindElement == true) {
                            document.getElementById("listFindElementReport").innerHTML = "Find Element: ✔";
                        }
                        if(docSnap.data().treeInsert == true) {
                            document.getElementById("treeInsertReport").innerHTML = "Add Element: ✔";
                        }
                        if(docSnap.data().queueEnqueue == true) {
                            document.getElementById("queueEnqueueReport").innerHTML = "Enqueue Element: ✔";
                        }
                        if(docSnap.data().queueDequeue == true) {
                            document.getElementById("queueDequeueReport").innerHTML = "Dequeue Element: ✔";
                        }
                        if(docSnap.data().queueFindElement == true) {
                            document.getElementById("queueFindElementReport").innerHTML = "Find Element: ✔";
                        }
                        if(docSnap.data().stackPush == true) {
                            document.getElementById("stackPushReport").innerHTML = "Push Element: ✔";
                        }
                        if(docSnap.data().stackPop == true) {
                            document.getElementById("stackPopReport").innerHTML = "Pop Element: ✔";
                        }
                        if(docSnap.data().stackFindElement == true) {
                            document.getElementById("stackFindElementReport").innerHTML = "Find Element: ✔";
                        }
                        if(docSnap.data().hashSetSize == true) {
                            document.getElementById("hashSetSizeReport").innerHTML = "Set Size: ✔";
                        }
                        if(docSnap.data().hashAdd == true) {
                            document.getElementById("hashAddReport").innerHTML = "Add Element: ✔";
                        }
                        if(docSnap.data().hashDelete == true) {
                            document.getElementById("hashDeleteReport").innerHTML = "Delete Element: ✔";
                        }
                        if(docSnap.data().hashFind == true) {
                            document.getElementById("hashFindReport").innerHTML = "Find Element: ✔";
                        }
                    }
                    updateProgress();
                    //arrays
                    document.getElementById("arraySetSizeButton").addEventListener("click", function(){updateDoc(docref,{
                        arraySetSize:true
                    })});
                    document.getElementById("arraySetElementButton").addEventListener("click", function(){updateDoc(docref,{
                        arraySetElement:true
                    })});
                    document.getElementById("arrayFindElementButton").addEventListener("click", function(){updateDoc(docref,{
                        arrayFindElement:true
                    })});
                    
                    //vectors
                    document.getElementById("vectorPushBackButton").addEventListener("click", function(){updateDoc(docref,{
                        vectorPushBack:true
                    })});
                    document.getElementById("vectorPopBackButton").addEventListener("click", function(){updateDoc(docref,{
                        vectorPopBack:true
                    })});
                    document.getElementById("vectorFindElementButton").addEventListener("click", function(){updateDoc(docref,{
                        vectorFindElement:true
                    })});
                    
                    //lists
                    document.getElementById("listAddButton").addEventListener("click", function(){updateDoc(docref,{
                        listAdd:true
                    })});
                    document.getElementById("listDeleteButton").addEventListener("click", function(){updateDoc(docref,{
                        listDelete:true
                    })});
                    document.getElementById("listFindElementButton").addEventListener("click", function(){updateDoc(docref,{
                        listFindElement:true
                    })});
                    
                    //stacks
                    document.getElementById("stackPushButton").addEventListener("click", function(){updateDoc(docref,{
                        stackPush:true
                    })});
                    document.getElementById("stackPopButton").addEventListener("click", function(){updateDoc(docref,{
                        stackPop:true
                    })});
                    document.getElementById("stackFindElementButton").addEventListener("click", function(){updateDoc(docref,{
                        stackFindElement:true
                    })});
                    
                    //queues
                    document.getElementById("queueEnqueueButton").addEventListener("click", function(){updateDoc(docref,{
                        queueEnqueue:true
                    })});
                    document.getElementById("queueDequeueButton").addEventListener("click", function(){updateDoc(docref,{
                        queueDequeue:true
                    })});
                    document.getElementById("queueFindElementButton").addEventListener("click", function(){updateDoc(docref,{
                        queueFindElement:true
                    })});
                    
                    //bst
                    document.getElementById("bstinsertButton").addEventListener("click", function(){updateDoc(docref,{
                        treeInsert:true
                    })});
                    
                    //hashes
                    document.getElementById("hashAddButton").addEventListener("click", function(){updateDoc(docref,{
                        hashAdd:true
                    })});
                    document.getElementById("hashDeleteButton").addEventListener("click", function(){updateDoc(docref,{
                        hashDelete:true
                    })});
                    document.getElementById("hashFindElementButton").addEventListener("click", function(){updateDoc(docref,{
                        hashFind:true
                    })});
                    document.getElementById("hashSetSizeButton").addEventListener("click", function(){updateDoc(docref,{
                        hashSetSize:true
                    })});
                    console.log("Document found");
                }
            });
            return null;
        });
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