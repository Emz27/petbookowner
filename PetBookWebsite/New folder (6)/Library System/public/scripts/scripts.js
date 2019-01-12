firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                                  // User is signed in.
                              document.getElementById("not_signedin").style.display = "none";
                              document.getElementById("when_loggedin").style.display = "block";

                              var user = firebase.auth().currentUser;
                              if(user != null){
                                   var user_name = user.email;
                                   document.getElementById("user_").innerHTML = "Welcome, "+user_name;
                              }
            }
             else {
                             //No user is signed in.
                             document.getElementById("not_signedin").style.display = "block";
                             document.getElementById("when_loggedin").style.display = "none";
            }
});

function login(){

                 var email = document.getElementById("e_mail").value;
                 var password = document.getElementById("p_word").value;

                      firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
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
                    var email = document.getElementById("e_mail").value;
                    var password = document.getElementById("p_word").value;
                    var passwordd = document.getElementById("student_confirm_password").value;
                    var firstname = document.getElementById("student_fname").value;
                    var lastname = document.getElementById("student_lname").value;
                    var address = document.getElementById("student_address").value;
                    var contact = document.getElementById("student_contact").value;

                    if(email == "" || password == "" || firstname == "" || lastname == "" || address == "" || contact == ""){
                         window.alert("Please fill up all required informations");
                    }
                    else if(password.length<6){
                         alert("Password must be atleast 6 characters")
                    }
                    else if(password != passwordd){
                         window.alert("Password does not match");
                    }
                    else if(password == passwordd){
                         var data =
                         {
                         email: email,
                         password: password,
                         firstname: firstname,
                         lastname: lastname,
                         address: address,
                         contact: contact
                         }



                         firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
                         // Handle Errors here.
                         var errorCode = error.code;
                         var errorMessage = error.message;
                         window.alert("Error : " + errorMessage);

                         // ...
                         });


                         database.ref("users").orderByChild("email").equalTo(email).once('value', function(snapshot) {
                           var exists = (snapshot.val() !== null);

                           // exist = true|false

                           console.dir(snapshot.val());
                           if(exists){
                         }
                         else {
                              database.ref("users").push(data);
                              window.alert("Welcome "+firstname+" "+lastname+". You have successfully registered!");
                              return false;
                         }
                         });
                    }
}

function mathSubmit(){

               window.alert("Success!");
}

function progSubmit(){

               window.alert("Success!!");
}

function adminlogin(){

               var email = document.getElementById("e_mail").value;
               var password = document.getElementById("p_word").value;

               if ((email == '@informaticslibrarian') && (password == '123123')){
                    document.getElementById('form_id').action = "admin.html";
               }
               else if ((email == '') || (password == '')){
                    window.alert("Please input User Admin and Password!");
               }
               else{
                    window.alert("Incorrect User and Password!");
               }
}
