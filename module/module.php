<?php
session_start();
require_once("../includes/db.php");
$db = new DB();
$act = $_GET["act"];

switch ($act) {
	case "del":
		$id = $_POST["id"];
		del($db, $id);
		break;
	case "mod":
	
		break;
	case "add":
		mod ($db, "add");
		break;
	case "list":
		listData($db, $_POST["id"]);
		break;
	default:
		break;
}

/*
* 列出杯赛数据
* $db object 数据库连接对象
* $id 查询的分类ID
*/
function listData($db, $id = null) {
	if (empty($id)) {
		$sql = "select id, title, time from cup";
		$data = $db->get_all($sql);
	} else {
		$sql = "select * from cup where id = ".$id;
		$data = $db->get_one($sql);
	}

	if (is_array($data)) {
		$result = array("code"=> "ok", "desc"=> "读取文章数据成功！", "content"=> $data);
	} else {
		$result = array("code"=> "error", "desc"=> "读取文章数据失败！");
	}
	echo json_encode($result);
}

/*
* 更新杯赛，包括增加和修改
* $db object 数据库连接对象
* $act string 操作类型
*/
function mod ($db, $act) {
	$title = $_POST["title"];
	$start = $_POST["start"];
	$end = $_POST["end"];
	$type = $_POST["type"];
	$num = $_POST["num"];
	$desc = $_POST["desc"];
	$reward = $_POST["reward"];

	$data = array(
		"title" => $title,
		"start" => $start,
		"end" => $end,
		"type" => $type,
		"nums" => $num,
		"desp" => $desc,
		"reward" => $reward,
		"time" => date('Y-m-d H:i:s',time())
	);
	if ($act === "add") {
		$data["author"] = "sdada";
		add($db, $data);
	} else {
		edit($db, $data, $id);
	}
}

/*
* 增加杯赛
* $db object 数据库连接对象
* $data array 数据对象
*/
function add ($db, $data) {
	$result = $db->insert("cup", $data);
	if ($result) {
		$result = array("code"=> "ok", "desc"=> "发布杯赛成功！");
	} else {
		$result = array("code"=> "error", "desc"=> "发布杯赛失败！");
	}
	echo json_encode($result);
}

/*
* 修改杯赛
* $db object 数据库连接对象
* $data array 数据对象
* $id number 需要修改的id
*/
function edit ($db, $data, $id) {
	$result = $db->update("cup", $data, "id=".$id);
	if ($result) {
		$result = array("code"=> "ok", "desc"=> "修改杯赛成功！");
	} else {
		$result = array("code"=> "error", "desc"=> "修改杯赛失败！");
	}
	echo json_encode($result);
}

/*
* 删除杯赛
* $db object 数据库连接对象
* $id number  分类ID
*/
function del ($db, $id) {
	$result = $db->delete("cup", "id in (".$id.")");
	if ($result) {
		$result = array("code"=> "ok", "desc"=> "删除杯赛成功！");
	} else {
		$result = array("code"=> "error", "desc"=> "删除杯赛失败！");
	}
	echo json_encode($result);
}
?>