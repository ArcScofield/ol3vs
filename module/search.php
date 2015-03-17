<?php
require_once("../includes/db.php");
$db = new DB();

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

$act = $_GET["act"];

if ($act === "list") {
	$pos = $_POST["pos"];
	$ls = $_POST["ls"]; // 联赛
	$jlb = $_POST["jlb"]; // 俱乐部
	$sj = $_POST["sj"]; // 赛季
	$minZp = $_POST["minZp"]; // 总评下限
	$maxZp = $_POST["maxZp"]; // 总评上限
	$minTz = $_POST["minTz"]; // 体重下限
	$maxTz = $_POST["maxTz"]; // 体重上限
	$minSg = $_POST["minSg"]; // 身高下限
	$maxSg = $_POST["maxSg"]; // 身高上限
	$minCsnf = $_POST["minCsnf"]; // 出生年份下限
	$maxCsnf = $_POST["maxCsnf"]; // 出生年份上限
	$tx = $_POST["tx"];  // 体型
	$hsdz = $_POST["hsdz"]; // 花式动作
	
	$xx1 = $_POST["xx1"]; // 详细字段1
	$xx1val = $_POST["xx1val"];  // 详细字段1的值
	$xx2 = $_POST["xx2"];  // 详细字段2
	$xx2val = $_POST["xx2val"]; // 详细字段2的值

	$sql = "select sj, pos, zp, jlb, name, hashid from player where 1 = 1";
	if (!empty($pos)) {
		$sql = $sql." and poses like '%$pos%'";
	}
	if (!empty($ls) && is_numeric($ls) ) {
		$sql = $sql." and ls=$ls";
	}
	if (!empty($jlb) && is_numeric($jlb) ) {
		$sql = $sql." and jlb=$jlb";
	}
	if (!empty($sj)) {
		$sql = $sql." and sj='$sj'";
	}
	if ( !empty($minZp) && is_numeric($minZp) ) {
		$sql = $sql." and zp >= $minZp";
	}
	if ( !empty($maxZp) && is_numeric($maxZp) ) {
		$sql = $sql." and zp < $maxZp";
	}
	if ( !empty($minSg) && is_numeric($minSg) ) {
		$sql .= " and sg > $minSg";
	}
	if ( !empty($maxSg) && is_numeric($maxSg) ) {
		$sql .= " and sg < $maxSg";
	}
	if ( !empty($tx) && is_numeric($tx) ) {
		$sql .= " and tx = $tx";
	}
	if ( !empty($hsdz) && is_numeric($hsdz) ) {
		$sql .= " and hsdz > $hsdz";
	}
	if ( !empty($xx1) && is_numeric($xx1val)) {
		$sql .= " and $xx1 > $xx1val";
	}
	if ( !empty($xx2) && is_numeric($xx2val)) {
		$sql .= " and $xx2 > $xx2val";
	}

	$sql .=" limit 0, 200";

	$data = $db->get_all($sql);

	if (is_array($data)) {
		$result = array("code"=> "ok", "desc"=> "读取数据成功！", "players"=> $data);
	} else {
		$result = array("code"=> "error", "desc"=> "读取数据失败！");
	}
	echo json_encode($result);
} else if ($act === "xx") {
	$hashid = $_POST["hashid"];
	$sql = "select * from player where hashid = '".$hashid."'";
	$data = $db->get_one($sql);

	if (is_array($data)) {
		$result = array("code"=> "ok", "desc"=> "读取数据成功！", "players"=> $data);
	} else {
		$result = array("code"=> "error", "desc"=> "读取数据失败！");
	}
	echo json_encode($result);
}
?>