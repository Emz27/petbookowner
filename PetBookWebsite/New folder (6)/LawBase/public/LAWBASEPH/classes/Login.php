<?php
class Login {
        public static function isLoggedIn() {
                if (isset($_COOKIE['SNID'])) {
                        if (DB::query('SELECT lawyerID FROM tblTokens WHERE token=:token', array(':token'=>sha1($_COOKIE['SNID'])))) {
                                $lawyerID = DB::query('SELECT lawyerID FROM tblTokens WHERE token=:token', array(':token'=>sha1($_COOKIE['SNID'])))[0]['lawyerID'];
                                if (isset($_COOKIE['lawyerID'])) {
                                        return $lawyerID;
                                } else {
                                        $cstrong = True;
                                        $token = bin2hex(openssl_random_pseudo_bytes(64, $cstrong));
                                        DB::query('INSERT INTO tblTokens VALUES (\'\', :token, :lawyerID)', array(':token'=>sha1($token), ':lawyerID'=>$lawyerID));
                                        DB::query('DELETE FROM tblTokens WHERE token=:token', array(':token'=>sha1($_COOKIE['SNID'])));
                                        setcookie("SNID", $token, time() + 60 * 60 * 24 * 7, '/', NULL, NULL, TRUE);
                                        setcookie("lawyerID", '1', time() + 60 * 60 * 24 * 3, '/', NULL, NULL, TRUE);
                                        return $lawyerID;
                                }
                        }
                }
                return false;
        }
}
?>