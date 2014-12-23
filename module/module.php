<?php
session_start();
require_once("../includes/db.php");
$db = new DB();
$act = $_POST["act"];

switch ($act) {
	case "del":
		$id = $_POST["id"];
		del($db, $id);
		break;
	case "mod":
	
		break;
	case "add":
		
		break;
	case "list":
		listData($db, $_POST["id"]);
		break;
	default:
		break;
}

/*
* 列出文章数据
* $db object 数据库连接对象
* $id 查询的分类ID
*/
function listData($db, $id = null) {
	if (empty($id)) {
		$sql = "select id, title, time from match";
		$data = $db->get_all($sql);
	} else {
		$sql = "select * from article where id = ".$id;
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
* 更新文章，包括增加和修改
* $db object 数据库连接对象
* $act string 操作类型
*/
function mod ($db, $act) {
	$title = $_POST["title"];
	$summary = $_POST["summary"];
	$sort = $_POST["sort"];
	$thumbnails = $_POST["thumbnails"];
	$content = $_POST["content"];
	$seotitle = $_POST["seotitle"];
	$seokeyword = $_POST["seokeyword"];
	$seodesc = $_POST["seodesc"];

	$data = array(
		"title" => $title,
		"summary" => $summary,
		"sort" => $sort,
		"thumbnails" => $thumbnails,
		"author" => $author,
		"content" => $content,
		"time" => date('Y-m-d H:i:s',time()),
		"seotitle"=> $seotitle,
		"seokeyword" => $seokeyword,
		"seodesc" => $seodesc
	);
	if ($act === "add") {
		$data["author"] = $_SESSION['username'];
		add($db, $data);
	} else {
		edit($db, $data, $id);
	}
}

/*
* 发布文章
* $db object 数据库连接对象
* $data array 数据对象
*/
function add ($db, $data) {
	$result = $db->insert("article", $data);
	if ($result) {
		$result = array("code"=> "ok", "desc"=> "发布文章成功！");
	} else {
		$result = array("code"=> "error", "desc"=> "发布文章失败！");
	}
	echo json_encode($result);
}

/*
* 修改文章
* $db object 数据库连接对象
* $data array 数据对象
* $id number 需要修改的id
*/
function edit ($db, $data, $id) {
	$result = $db->update("article", $data, "id=".$id);
	if ($result) {
		$result = array("code"=> "ok", "desc"=> "修改文章成功！");
	} else {
		$result = array("code"=> "error", "desc"=> "修改文章失败！");
	}
	echo json_encode($result);
}

/*
* 删除文章
* $db object 数据库连接对象
* $id number  分类ID
*/
function del($db, $id) {
	$result = $db->delete("article", "id in (".$id.")");
	if ($result) {
		$result = array("code"=> "ok", "desc"=> "删除文章成功！");
	} else {
		$result = array("code"=> "error", "desc"=> "删除文章失败！");
	}
	echo json_encode($result);
}
?>