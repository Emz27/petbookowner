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

                                                           setTimeout(function() {
                                                                window.location='index.html'
                                                           }, 2500);
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
                                var lname = document.getElementById("contact").value;
                                var address = document.getElementById("address").value;
                                var email = document.getElementById("e_mail").value;
                                var comp_name = document.getElementById("comp_name").value;
                                var comp_street = document.getElementById("comp_street").value;
                                var comp_loc = document.getElementById("comp_loc").value;
                                if(email == "" ||  fname == "" || lname == "" || contact == "" || address == "" || comp_name == "" || comp_street == "" || comp_loc == ""){
                                window.alert("Please fill up all required informations");
                                }
                                else{
                                     var data =
                                     {
                                     fname: fname,
                                     lname: lname,
                                     contact: contact,
                                     address: address,
                                     email: email,
                                     comp_name: comp_name,
                                     comp_street: comp_street,
                                     comp_loc: comp_loc,
                                     }


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
                                          setTimeout(function() {
                                               window.location='index.html'
                                          }, 2500);
                                     }
                                     });

                                }
}
