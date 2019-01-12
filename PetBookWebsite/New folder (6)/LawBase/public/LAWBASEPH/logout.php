<?PHP
include('classes/DB.php');
include('classes/Login.php');

if(!Login::isLoggedIn()){
    header('location: index');
}else{
    if(isset($_COOKIE['SNID'])){
        DB::query('DELETE FROM tblTokens WHERE lawyerID=:lawyerID', array(':lawyerID'=>Login::isLoggedIn()));
    }
    setcookie("SNID",null, '1', '/');
    setcookie("lawyerID",null, '1', '/');
    setcookie("specialization1",null, '1', '/');
    setcookie("specialization2",null, '1', '/');
    setcookie("specialization3",null, '1', '/');

    unset($_COOKIE['SNID']);
    unset($_COOKIE['lawyerID']);
    unset($_COOKIE['specialization1']);
    unset($_COOKIE['specialization2']);
    unset($_COOKIE['specialization3']);

    header('location: index');
}
?>