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
	$ls = $_POST["ls"]; // 联赛
	$jlb = $_POST["jlb"]; // 俱乐部
	$sj = $_POST["sj"]; // 赛季
	$minZp = $_POST["minZp"];
	$maxZp = $_POST["maxZp"];
	$minTz = $_POST["minTz"];
	$maxTz = $_POST["maxTz"];
	$minSg = $_POST["minSg"];
	$maxSg = $_POST["maxSg"];
	$minCsnf = $_POST["minCsnf"];
	$maxCsnf = $_POST["maxCsnf"];
	$tx = $_POST["tx"];  // 体型
	$hsdz = $_POST["hsdz"]; // 花式动作

	$sql = "select player.sj, player.pos, player.gj, player.zp, player.jlb, player.name, player.hashid from player where 1 = 1";
	if (!empty($pos)) {
		$sql = $sql." and pos='$pos'";
	}
	if (!empty($ls)) {
		$sql = $sql." and ls=$ls";
	}
	if (!empty($jlb)) {
		$sql = $sql." and jlb=$jlb";
	}
	if (!empty($sj)) {
		$sql = $sql." and sj='$sj'";
	}
	if (!empty($minZp)) {
		$sql = $sql." and zp > $minZp"
	}
	if (!empty($maxZp)) {
		$sql = $sql." and zp < $maxZp"
	}
	if (!empty($minSg)) {
		$sql = $sql." and sg > $minSg"
	}
	if (!empty($maxSg)) {
		$sql = $sql." and sg < $maxSg"
	}
	if (!empty($tx)) {
		$sql = $sql." and tx = $tx";
	}
	if (!empty($hsdz)) {
		$sql = $sql." and hsdz = $hsdz";
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