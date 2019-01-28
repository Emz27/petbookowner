

function toggle(){
                                $("#menu-toggle").on('click', function() {
                                    $("#wrapper").toggleClass("toggled");
                                });
}


function login(){

                 var emailAddress = document.getElementById("usr").value;
                 var password = document.getElementById("pwd").value;

                      firebase.auth().signInWithEmailAndPassword(emailAddress, password)
                      then(function(){
                        firebase.firestore().collection("users")
                      })
                      .catch(function(error) {
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

async function writeUserData(){
  var fname = document.getElementById("firstname").value;
  var lname = document.getElementById("lastname").value;
  var contact = document.getElementById("contact").value;
  var address = document.getElementById("address").value;
  var email = document.getElementById("e_mail").value;
  var comp_name = document.getElementById("comp_name").value;
  var comp_street = document.getElementById("comp_street").value;
  var comp_loc = document.getElementById("comp_loc").value;
  
  if(email == "" ||  fname == "" || lname == "" || contact == "" || address == "" || comp_name == "" || comp_street == "" || comp_loc == ""){
  window.alert("Please fill up all required informations");
  }
  else{
    var data = {
      fname: fname,
      lname: lname,
      contact: contact,
      address: address,
      email: email,
      type: "owner", 
      status: "inactive", 
    }
    var user = await firebase.firestore().collection("users").add(data);
    await firebase.firestore().collection("petshops").add({
      ownerDocId: user.id,
      name: comp_name,
      street: comp_street,
      barangay: comp_loc, 
      status: "inactive", 
    })
  }
}


async function displayPetshops(){
          var petshopResult = await db.collection("petshops").get();
          var groomerResult = await db.collection("groomers").get();
          var petshops = [];
          var groomers = [];
          var petshopList =""
          groomerResult.docs.forEach(( groomer )=>{
               var data = {
                    groomerDocId: groomer.id,
                    ...groomer.data(),
               }
               groomers.push( data);
          });
          petshopResult.docs.forEach(( petshop )=>{
               var data = {
                    petshopDocId: petshop.id,
                    ...petshop.data(),
               }
               petshops.push( data);
          });

          petshops.forEach(( item )=>{
               var groomerList = ""
               groomers.forEach(function(g){
                    if( g.petshopDocId === item.petshopDocId ){
                         try{
                              groomerList += `
                                   <div>
                                        ${g.fname}          ${g.lname}          ${g.contact}          ${g.w_exp}          ${g.gender}
                                        <button onclick ="deleteGroomer('${g.groomerDocId}')">x</button>
                                   </div>
                              `
                         }
                         catch(e){console.log(e.message)}

                    }
               })
               petshopList += `
               </br>
               </hr>
               <div class="row">
                    <div style="col-10">
                         <div>Firstname: ${item.fname}</div>
                         <div>Lastname: ${item.lname}</div>
                         <div>Contact: ${item.contact}</div>
                         <div>Address: ${item.address}</div>
                         <div>Email: ${item.email}</div>
                         <div>Pet Shop Name: ${item.comp_name}</div>
                         <div>Pet Shop Street: ${item.comp_street}</div>
                         <div>Baranggay: ${item.comp_loc}</div>
                    </div>
                    <div style="col-2">
                         Groomers:
                         ${groomerList}
                    </div>
               </div>
               <div class="row">
                     <button
                     onclick="addGroomer('${item.petshopDocId}')"
                      id="modal" type="button" class="btn btn-primary btn-lg btn-block" data-toggle="modal" data-target="#groomerModal">Add Groomer</button>

               </div>
               `;
          })
          $("#petshopList").html(petshopList);

}

async function addGroomer(petshopId){
     $("#groomerSubmit").val(petshopId)
     // db.collection("petshops").doc(petshopId)
}
function deleteGroomer(groomerId){
     db.collection("groomers").doc(groomerId).delete();
}

db.collection("groomers").onSnapshot(( groomers )=>{
     console.log("onSnapshot trigger groomers");
     displayPetshops();
})
db.collection("petshops").onSnapshot(( petshops )=>{
     console.log("onSnapshot trigger groomers");
     displayPetshops();
})

$(document).ready(function() {

     $("#groomerSubmit").on("click",async  ()=>{
          var petshopDocId = $("#groomerSubmit").val()
          await db.collection("groomers").add({
               fname: $("#firstname").val(),
               lname: $("#lastname").val(),
               contact: $("#contact").val(),
               address: $("#address").val(),
               w_exp: $("#w_exp").val(),
               gender: $("#gender").val(),
               petshopDocId: petshopDocId,
          });
          $("#firstname").val("");
          $("#lastname").val("");
          $("#contact").val("");
          $("#address").val("");
          $("#w_exp").val("");
          $("#gender").val("");
     })
});
