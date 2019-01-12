

<html>
    <head>

        <meta charset="utf-8">

        <link href="node_modules/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
        <link href="style.css" rel="stylesheet">
        <title>LawBase</title>
    </head>
    <body>
        <header>
            <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
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


            <div class="main-header">
                <h1>"Get a Lawyer"</h1>
                <button type="button" class="header-button btn btn-dark">Post your task</button>
            </div>
        </header>


        <section class="section-buttons">
            <div class="container legal-areas">
                <div class="row">
                    <div class="col-md-3"></div>
                    <div class="col-md-6">
                        <h1>Legal Areas</h1>
                    </div>
                    <div class="col-md-3"></div>
                </div>
                <div class="legal-areas-buttons">
                    <div class="row">

                        <div class="col-md-4">
                            <div class="container myButton">
                                <div class="button-contents">
                                    <img src="img/icons/contract.png">
                                    <p>Contracts & Agreements</p>
                                        <div class="middle">
                                            <div class="text">
                                                <button id="Draft" onClick="taskButtons(this.id, 'CNA')" class="btn btn-light">Draft</button>
                                                <button id="Edit" onClick="taskButtons(this.id, 'CNA')" class="btn btn-light">Edit</button>
                                                <button id="Others" onClick="taskButtons(this.id, 'CNA')" class="btn btn-light">Others</button>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="container myButton">
                                <div class="button-contents">
                                    <img src="img/icons/business.png">
                                    <p>Start a business</p>
                                    <div class="middle">
                                        <div class="text">
                                            <button id="Corporation" onClick="taskButtons(this.id, 'BUS')" class="btn btn-light">Corporation</button>
                                            <button id="Partnership" onClick="taskButtons(this.id, 'BUS')" class="btn btn-light">Partnership</button>
                                            <button id="Sole_Proprietorship" onClick="taskButtons(this.id, 'BUS')" class="btn btn-light">Sole Proprietorship</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="container myButton">
                                <div class="button-contents">
                                    <img src="img/icons/counsel.png">
                                    <p>General counsel</p>
                                    <div class="middle">
                                        <div class="text">
                                            <button id="Post" onClick="taskButtons(this.id, 'CSL')" class="btn btn-light">Post</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-4">
                            <div class="container myButton">
                                <div class="button-contents">
                                    <img src="img/icons/labor.png">
                                    <p>Labor</p>
                                    <div class="middle">
                                        <div class="text">
                                            <button id="Post" onClick="taskButtons(this.id, 'LBR')" class="btn btn-light">Post</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="container myButton">
                                <div class="button-contents">
                                    <img src="img/icons/annulment.png">
                                    <p>Annulment / Separation</p>
                                    <div class="middle">
                                        <div class="text">
                                            <button id="post" onClick="taskButtons(this.id, 'ANL')" class="btn btn-light">Post</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="container myButton">
                                <div class="button-contents">
                                    <img src="img/icons/accident.png">
                                    <p>Accidents</p>
                                    <div class="middle">
                                        <div class="text">
                                            <button id="Victim" onClick="taskButtons(this.id, 'ACD')" class="btn btn-light">I am the victim</button>
                                            <button id="Cause" onClick="taskButtons(this.id, 'ACD')" class="btn btn-light">I caused the accident</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="container-fluid quote">
        </div>
        <script src="node_modules/jquery/dist/jquery.min.js"></script>
        <script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
        <script src="js/tasks.js"></script>
    </body>
</html>
