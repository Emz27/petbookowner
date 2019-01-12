<?PHP
if(isset($_GET['subCategory']) && isset($_GET['category'])){

}
?>
<html>
    <head>

        <meta charset="utf-8">
        
        <link href="node_modules/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
        <link href="style.css" rel="stylesheet">
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
                        <li class="nav-item"><a class="nav-link" href="register">For Lawyers</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">About</a></li>
                        <li class="nav-item"><a class="nav-link" href="list">List</a></li>
                        <?PHP
                        if(isset($_COOKIE['SNID'])){
                            echo '
                            <li class="nav-item"><a class="nav-link" id="logout" href="logout">Logout</a></li>';
                        }
                        ?>
                    </ul>
                </div>
            </div>
        </nav>

        <section>
            <div class="container">
                <div class="row">
                    <div class="col-md-2"></div>
                    <div class="col-md-8 postText">
                        <h1>Post your <?PHP echo $_GET['category']?> task here!</h1>
                    </div>
                    <div class="col-md-2"></div>
                </div>
            </div>
        </section>

        <script src="node_modules/jquery/dist/jquery.min.js"></script>
        <script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
    </body>
</html>