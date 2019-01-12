<?PHP
include('classes/DB.php');

function redirect(){
        header('location: index');
        exit();
}

if(!isset($_GET['email']) || !isset($_GET['token'])){
    redirect(); 
}else{
    $email = $_GET['email'];
    $token = $_GET['token'];

    $savedEmail = DB::query( 'SELECT userEmail FROM tblLawyer WHERE userEmail=:userEmail', array(':userEmail'=>$email) )[0]['userEmail'];
    $savedToken = DB::query( 'SELECT emailVerificationToken FROM tblLawyer WHERE emailVerificationToken=:emailVerificationToken', array(':emailVerificationToken'=>$token) )[0]['emailVerificationToken'];

    if(($email == $savedEmail) && ($token == $savedToken)){
        DB::query( 'UPDATE tblLawyer SET isEmailVerified=:isEmailVerified', array(':isEmailVerified'=>1) );
        redirect();
        exit();
    }else{
        echo "token".$token;
        echo "Saved".$savedToken;
    }
}

?>