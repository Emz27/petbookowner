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