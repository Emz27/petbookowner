
<?php 
include_once('connection.php');

?>

<html>
    <head>

        <meta charset="utf-8">
        
        <link href="style.css" rel="stylesheet">
        <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
        <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
        <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
        <link href="node_modules/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
        <title>LawBase</title>
    </head>
    <body>
        <header class="header">
            <nav class="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
                <div class="container">
                <button class="navbar-toggler" data-toggle="collapse" data-target="#collapse_target">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="collapse_target">
                    <ul class="header-nav navbar-nav mr-auto">
                    </ul>

                    <ul class="header-nav navbar-nav">
                        <li class="nav-item"><a class="nav-link" href="#">Database</a></li>
                        <li class="nav-item"><a class="nav-link" href="register">For Lawyers</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">About</a></li>
                        <li class="nav-item"><a class="nav-link" href="list">List</a></li>
                    </ul>
                </div>
            </div>
        </nav>

        <div class="container text-center" style="border: 1px yellow solid">
            <div class="form-group row pt-lg-5 pb-lg-5 pt-5">
                <div class="col-sm-12 col-md-5 offset-md-2 loginForm">
                <input type="name" name="username" class="form-control" placeholder="Username" required autofocus=""></br>

<input type="password" name="password" class="form-control" placeholder="Password" required></br>


<input type="fistname" name="firstname" class="form-control" placeholder="Firstname" required></br>

<input type="name" name="middlename" class="form-control" placeholder="Middlename(Optional)"></br>

<input type="name" name="lastname" class="form-control" placeholder="Lastname" required></br>

<input type="name" name="address" class="form-control" placeholder="Address" required></br>

<input type="name" name="contact" class="form-control" placeholder="Contact Number" required></br>

<input type="number" name="exp" min="0" max="70" step="1" value="0" class="form-control" placeholder="Years of Experience" required></br>

<input type="name" name="firm" class="form-control" placeholder="Law firm (if any)"></br>

<input type="text" name="email" class="form-control" pattern="[a-zA-Z0-9!#$%&amp;'*+\/=?^_`{|}~.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*" placeholder="Email" required></br>

<textarea class="form-control" rows="5" type="name" name="pitch" placeholder="Make a pitch for yourself" required></textarea></br>

 <select name = "spec1" id="" class="form-control" onchange="checkUnique(this.id);" required>
     <option value="NON" selected>Specialization</option>
<?PHP
$query = "SELECT * FROM tbl_practices;";
$result = mysqli_query($conn, $query);

if(mysqli_num_rows($result) > 0){
  while($row = mysqli_fetch_assoc($result))
  {
          echo '<option value= "'.$row['pracCode'].'" >'.$row['pracCode'] . " - " . $row['pracName'].'</option>';
  }
}
?>
</select>
</br>
 <select name = "spec2" id="" class="form-control" onchange="checkUnique(this.id);" required>
     <option value="NON" selected>Specialization</option>
<?PHP
$query = "SELECT * FROM tbl_practices;";
$result = mysqli_query($conn, $query);

if(mysqli_num_rows($result) > 0){
  while($row = mysqli_fetch_assoc($result))
  {
          echo '<option value= "'.$row['pracCode'].'" >'.$row['pracCode'] . " - " . $row['pracName'].'</option>';
  }
}
?>
</select>
</br>
<select name = "spec3" id="" class="form-control" onchange="checkUnique(this.id);" required>
     <option value="NON" selected>Specialization</option>
<?PHP
$query = "SELECT * FROM tbl_practices;";
$result = mysqli_query($conn, $query);

if(mysqli_num_rows($result) > 0){
  while($row = mysqli_fetch_assoc($result))
  {
          echo '<option value= "'.$row['pracCode'].'" >'.$row['pracCode'] . " - " . $row['pracName'].'</option>';
  }
}
?>
</select>
</br>

<label class="checkbox-inline"><input type="checkbox" value="" required>I agree to the <a href="#">Terms and agreement</a>.</label>

<button type='submit' value = 'lawyer' name='lawyer' class='btn-default btn-lg btn-block'>Register</button>
                </div>  
            </div>
        </div>
                

        </header>

        <section>
        </section>

        <script src="node_modules/jquery/dist/jquery.min.js"></script>
        <script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
        
    </body>
</html>