// initialize firebase
try {
firebase.initializeApp({
  apiKey: "AIzaSyCHUtKxC3ywtoHHj1QVuZVG6FliyR-u4pw",
  authDomain: "petbook-d35a1.firebaseapp.com",
  databaseURL: "https://petbook-d35a1.firebaseio.com",
  projectId: "petbook-d35a1",
  storageBucket: "petbook-d35a1.appspot.com",
  messagingSenderId: "397515456686"
})
} catch (err) {
    // we skip the "already exists" message which is
    // not an actual error when we're hot-reloading
    if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)
    }
}
var db = firebase.firestore();

db.settings({
  timestampsInSnapshots: true
});

// session checker
(async function(){
  var userSession = JSON.parse(sessionStorage.getItem("user"));
  console.log("userSession: ", userSession)
  if(userSession){
    try{
      var type = userSession.type;
      
      var userResult = await firebase.firestore().collection("users").where("username", "==", userSession.username).get()
      if(userResult.docs.length == 0){
        sessionStorage.clear();
        location.replace('/login.html');
      }
      else if( !window.location.pathname.includes("login.html") 
          && !window.location.pathname.includes("register.html")
          && !window.location.pathname.includes("/"+type+"/")
      ){
        location.replace("/"+type+"/index.html");
      }
    }
    catch(e){
      console.log(e.message);
    }
    
  }
  else{
    if(!window.location.pathname.includes("login.html") && !window.location.pathname.includes("register.html")){
      console.log("no user, redirecting to login page");
      location.replace('/login.html');
    }
  }
})()