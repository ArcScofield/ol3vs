<?php
// 检查是否直接访问本页面
if( isset($_SERVER['HTTP_REFERER']) ) {
    $url_array = explode('http://', $_SERVER['HTTP_REFERER']);
    $url = explode('/', $url_array[1]);
    if($_SERVER['SERVER_NAME'] != $url[0]) {
        exit('Access Denied! You are not coming from the site!');
    }
} else {
	exit('Access Denied! Please do not load this page directly.');
}

print_r($_POST["name"]);
?>