(function(){
  var navBar = 
  `<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <a class="navbar-brand" href="#">
        <img src="/images/pet.jpg" width="30" height="30" class="d-inline-block align-top" alt="">
      PetBook
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li id="reservationLink" class="nav-item">
          <a class="nav-link" href="/owner/index.html">Reservations <span class="sr-only">(current)</span></a>
        </li>
        <li id="groomerLink" class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Groomers
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="/owner/groomer_list.html">List</a>
            <a class="dropdown-item" href="/owner/groomer_create.html">Create</a>
          </div>
        </li>
        <li id="serviceLink" class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Services
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="/owner/service_list.html">List</a>
            <a class="dropdown-item" href="/owner/service_create.html">Create</a>
          </div>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto">
          <li class="nav-item dropdown">
            <a id="userLink" class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Name
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a id="logoutButton" class="dropdown-item" href="#">Logout</a>
            </div>
          </li>
        </ul>
    </div>
  </nav>`;
  $("body").prepend(navBar);
})()

$(document).ready(function(){
  var user = JSON.parse(localStorage.getItem("user"));
  $("#userLink").html(user.firstname+" "+user.lastname + "&nbsp&nbsp&nbsp&nbsp");
  if(window.location.pathname.includes("reservation") || window.location.pathname.includes("index")) $("#reservationLink").addClass("active");
  else if(window.location.pathname.includes("groomer")) $("#groomerLink").addClass("active");
  else if(window.location.pathname.includes("service")) $("#serviceLink").addClass("active");

  $("#logoutButton").click(function(){
    localStorage.clear();
    window.location.href = "/login.html";
  })

  
});