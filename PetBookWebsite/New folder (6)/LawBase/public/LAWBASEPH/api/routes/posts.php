<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

$app = new \Slim\App;

// Get all users
$app->get('/posts/lawyers', function(Request $request, Response $response){
    $sql = "SELECT * FROM tblLawyer";

    try{
        $db = new db();

        $db = $db->connect();

        $stmt = $db->query($sql);
        $users = $stmt->fetchAll(PDO::FETCH_OBJ);
        $db = null;

        echo json_encode($users);

    }catch(PDOException $e){
        echo '{"error":{"text": '.$e->getMessage().'}';
    }
});


//Post a task

$app->post('/posts/post', function(Request $request, Response $response){

    $postBody = $request->getParam('postBody');
    $postCategory = $request->getParam('postCategory');
    $postSubCategory = $request->getParam('postSubCategory');
    $postTime = $request->getParam('postTime');
    $posterName = $request->getParam('posterName');
    $posterEmail = $request->getParam('posterEmail');

    $sql = "INSERT INTO tblPosts (postBody, postCategory, postSubCategory, posterName, posterEmail, postTime) VALUES (:postBody, :postCategory, :postSubCategory, :posterName, :posterEmail, :postTime)";

    
try{
    DB::query('INSERT INTO tblPosts VALUES (\'\', :postBody, :postCategory, :postSubCategory, :posterName, :posterEmail, :postTime)', array(':postBody'=>$postBody, ':postCategory'=>$postCategory, ':postSubCategory'=>$postSubCategory, ':posterName'=>$posterName, 'posterEmail'=>$posterEmail, ':postTime'=>$postTime));
        echo '{"notice": {"text": "Post Added!!!"}';
    
}catch(PDOException $e){
    echo '{"error":{"text": '.$e->getMessage().'}qwe';
}     
    // try{
        
    //     $db = new db();

    //     $db = $db->connect();

    //     $stmt = $db->prepare($sql);

    //     $stmt->bindParam(':postBody', $postBody);
    //     $stmt->bindParam(':postCategory', $postCategory);
    //     $stmt->bindParam(':postSubCategory', $postSubCategory);
    //     $stmt->bindParam(':posterName', $posterName);
    //     $stmt->bindParam(':posterEmail', $posterEmail);
    //     $stmt->bindParam(':postTime', $postTime);

    //     $stmt->execute();

    //     echo '{"notice": {"text": "Post Added!!!"}';

    // }catch(PDOException $e){
    //     echo '{"error":{"text": '.$e->getMessage().'}';
    // }
});

$app->get('/posts/tasks', function(Request $request, Response $response){
    $sql = "SELECT * FROM tblPosts";

    try{
        $db = new db();

        $db = $db->connect();

        $stmt = $db->query($sql);
        $tasks = $stmt->fetchAll(PDO::FETCH_OBJ);
        $db = null;

        echo json_encode($tasks);

    }catch(PDOException $e){
        echo '{"error":{"text": '.$e->getMessage().'}';
    }
});