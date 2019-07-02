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
        <li id="userLink" class="nav-item">
          <a class="nav-link" href="/admin/index.html">Shop Branches <span class="sr-only">(current)</span></a>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto">
          <li class="nav-item dropdown">
            <a id="userLink" class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Administrator
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

  $("#logoutButton").click(function(){
    localStorage.clear();
    window.location.href = "/login.html";
  })

  
});