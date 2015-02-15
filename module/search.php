<?php
require_once("../includes/db.php");
$db = new DB();

// 检查是否直接访问本页面
/*
if( isset($_SERVER['HTTP_REFERER']) ) {
    $url_array = explode('http://', $_SERVER['HTTP_REFERER']);
    $url = explode('/', $url_array[1]);
    if($_SERVER['SERVER_NAME'] != $url[0]) {
        exit('Access Denied! You are not coming from the site!');
    }
} else {
	exit('Access Denied! Please do not load this page directly.');
}
*/

$act = $_GET["act"];

if ($act === "list") {
	$pos = $_POST["pos"];
	$ls = $_POST["ls"];
	$sj = $_POST["sj"];
	$hsdz = $_POST["hsdz"];

	$sql = "select player.sj, player.pos, player.gj, player.zp, player.jlb, player.name, hashid from player";
	if (isset($pos)) {
		$sql = $sql." pos='".$pos."'";
	}
	if (isset($ls)) {
		$sql = $sql." ls=".$ls;
	}
	if (isset($sj)) {
		$sql = $sql." sj='".$sj."'";
	}

	$data = $db->get_all($sql);

	if (is_array($data)) {
		$result = array("code"=> "ok", "desc"=> "读取数据成功！", "content"=> $data);
	} else {
		$result = array("code"=> "error", "desc"=> "读取数据失败！");
	}
	echo json_encode($result);
} else if ($act === "xx") {
	$sql = "select * from cup where id = ".$id;
	$data = $db->get_one($sql);

	if (is_array($data)) {
		$result = array("code"=> "ok", "desc"=> "读取数据成功！", "content"=> $data);
	} else {
		$result = array("code"=> "error", "desc"=> "读取数据失败！");
	}
	echo json_encode($result);
}
?>