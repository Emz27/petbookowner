function toggle(){
                                $("#menu-toggle").on('click', function() {
                                    $("#wrapper").toggleClass("toggled");
                                });
}

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
              //User is signed in.
              document.getElementById("not_loggedin").style.display = "none";
              document.getElementById("when_loggedin").style.display = "block";
  } else {
              //No user is signed in.
              document.getElementById("not_loggedin").style.display = "block";
              document.getElementById("when_loggedin").style.display = "none";
  }
});

function login(){

                 var emailAddress = document.getElementById("usr").value;
                 var password = document.getElementById("pwd").value;

                      firebase.auth().signInWithEmailAndPassword(emailAddress, password).catch(function(error) {
                           // Handle Errors here.
                             var errorCode = error.code;
                             var errorMessage = error.message;
                             window.alert("Error : " + errorMessage);
                                                           });             
}

function logout(){

                         firebase.auth().signOut().then(function() {
                              // Sign-out successful.
                              window.alert("Logged Out successfully!");
                         }).catch(function(error) {
                              // An error happened.
                         });
}

function writeUserData(){

                                var database = firebase.database();
                                var fname = document.getElementById("firstname").value;
                                var lname = document.getElementById("lastname").value;
                                var address = document.getElementById("address").value;
                                var email = document.getElementById("e_mail").value;
                                var password = document.getElementById("password_").value;
                                var confirm_password = document.getElementById("confirm_password").value;


                                if(email == "" || password_ == "" || confirm_password == "" || fname == "" || lname == "" || address == ""){
                                window.alert("Please fill up all required informations");
                                }
                                else if(password.length<6){
                                     alert("Password must be atleast 6 characters")
                                }
                                else if(password != confirm_password){
                                     window.alert("Password does not match");
                                }
                                else if(password == confirm_password){
                                     var data =
                                     {
                                     fname: fname,
                                     lname: lname,
                                     address: address,
                                     email: email,
                                     password: password
                                     }



                                     firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
                                     // Handle Errors here.
                                     var errorCode = error.code;
                                     var errorMessage = error.message;
                                      window.alert("Error : " + errorMessage);

                                     // ...
                                     });


                                     database.ref("users").orderByChild("e_mail").equalTo(email).once('value', function(snapshot) {
                                       var exists = (snapshot.val() !== null);

                                       // exist = true|false

                                       console.dir(snapshot.val());
                                       if(exists){
                                         alert("Email address is not available!");
                                     }
                                     else{
                                          database.ref("users").push(data);
                                          window.alert("Welcome "+fname+" "+lname+". You are successfully registered!");
                                     }
                                     });

                                }
}
