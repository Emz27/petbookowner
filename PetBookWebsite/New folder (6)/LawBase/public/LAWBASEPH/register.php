<html>
<head>

    <meta charset="utf-8">

    <link href="style.css" rel="stylesheet">
    <link href="node_modules/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
    <title>LawBase</title>
</head>
<body>
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
                <li class="nav-item"><a class="nav-link active" href="register">For Lawyers</a></li>
                <li class="nav-item"><a class="nav-link" href="#">About</a></li>
                <li class="nav-item"><a class="nav-link" href="list">List</a></li>
            </ul>
        </div>
    </div>
</nav>





<section class="p-5 regSection">
    <div class="container">
        <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-8 p-5 regForm">
                <table id="registerTable">
                    <tr>
                        <td>
                            <form action='<?PHP $_PHP_SELF?>' method="post">
                                <h1 class="title pb-3">Lawyer Registration</h1>

                                <input type="name" name="username" class="form-control" placeholder="Username" required autofocus=""></br>

                                <input type="password" name="password" class="form-control" placeholder="Password" required></br>


                                <input type="fistname" name="firstname" class="form-control" placeholder="Firstname" required></br>

                                <input type="name" name="middlename" class="form-control" placeholder="Middlename(Optional)"></br>

                                <input type="name" name="lastname" class="form-control" placeholder="Lastname" required></br>

                                <input type="name" name="address" class="form-control" placeholder="Address" required></br>

                                <input type="name" name="contact" class="form-control" placeholder="Contact Number" required></br>

                                <input type="number" name="roll"  class="form-control" placeholder="Roll no" min="10000" max="99999" required></br>

                                <select id="admit" name="admit" class="form-control" placeholder="Admitted to the bar" required>
                                    <option>Admitted to the bar</option>
                                    <?PHP
                                    for($x = 1960; $x <= 2020; $x++){
                                        echo '<option>'.$x.'</option>';
                                    }
                                    ?>
                                </select>></br>

                                <input type="name" name="firm" class="form-control" placeholder="Law firm (if any)"></br>

                                <input type="text" name="email" class="form-control" placeholder="Email" required></br>

                                <textarea class="form-control" rows="5" type="name" name="pitch" placeholder="Make a pitch for yourself" required></textarea></br>

                                <select name = "spec1" class="form-control" onchange="checkUnique(this.id);" required>
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
                                <select name = "spec2" class="form-control" onchange="checkUnique(this.id);" required>
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
                                <select name = "spec3"  class="form-control" onchange="checkUnique(this.id);" required>
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

                                <label class="checkbox-inline pb-3" style="color: white"><input type="checkbox" value="" required>I agree to the <a href="#">Terms and agreement</a>.</label><br>

                                <button type='submit' id="sub" value = 'lawyer' name='registerLawyer' class='btn btn-lg btn-block'>Register</button>
                            </form>
                        </td>
                        <td>

                            <form action='<?PHP $_PHP_SELF ?>' method="post">

                                <h1 class="pb-3 title">Lawyer <br> Login</h1>

                                <input type="name" name="username" class="form-control" placeholder="Username" required autofocus=""></br>

                                <input type="password" name="password" class="form-control" placeholder="Password" required></br>

                                <button type='submit' value = 'lawyerLogin' name='lawyerLogin' class='btn-default btn-lg btn-block'>Login</button>
                            </form>

                        </td>
                    </tr>
                </table>
            </div>
            <div class="col-md-2"></div>
        </div>
    </div>
</section>

<script src="node_modules/jquery/dist/jquery.min.js"></script>
<script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>

</body>
</html>
