<?php
require_once("../includes/db.php");
$db = new DB();
$act = $_GET["act"];

switch ($act) {
	case "del":
		$id = $_POST["id"];
		del($db, $id);
		break;
	case "mod":
		mod($db, $act);
		break;
	case "add":
		mod($db, $act);
		break;
	case "list":
		$page = $_POST["page"];
		listData($db, $_POST["id"], $page);
		break;
	default:
		break;
}

/*
* 更新户名，包括增加和修改
* $db object 数据库连接对象
* $act string 操作类型
*/
function mod ($db, $act) {
	$id = $_POST["id"];
	$username = $_POST["username"];
	$pwd = $_POST["pwd"];
	$competence = $_POST["competence"];

	if (strlen($username) === 0 && $act === "add") {
		echo json_encode(array("code"=> "error", "desc"=> "用户名不能为空"));
		exit();
	} else {
		$username = htmlspecialchars($username);
	}

	if (strlen($pwd) === 0) {
		echo json_encode(array("code"=> "error", "desc"=> "密码不能为空"));
		exit();
	} else {
		$pwd = md5($pwd);
	}

	$data = array(
		"pwd"=> $pwd,
		"competence"=> $competence,
		"time"=> date('Y-m-d H:i:s',time())
	);
	if ($act === "add") {
		$data["username"] = $username;
		add($db, $data);
	} else {
		edit($db, $data, $id);
	}
}

/*
* 增加用户
* $db object 数据库连接对象
* $data array 数据对象
*/
function add ($db, $data) {
	$result = $db->insert("user", $data);
	if ($result) {
		$result = array("code"=> "ok", "desc"=> "注册用户成功！");
	} else {
		$result = array("code"=> "error", "desc"=> "注册用户失败！");
	}
	echo json_encode($result);
}

/*
* 修改用户
* $db object 数据库连接对象
* $data array 数据对象
* $id number 需要修改的id
*/
function edit ($db, $data, $id) {
	$result = $db->update("user", $data, "id=".$id);
	if ($result) {
		$result = array("code"=> "ok", "desc"=> "修改用户成功！");
	} else {
		$result = array("code"=> "error", "desc"=> "修改用户失败！");
	}
	echo json_encode($result);
}

/*
* 删除用户
* $db object 数据库连接对象
* $id number  用户ID
*/
function del($db, $id) {
	$result = $db->delete("user", "id in (".$id.")");
	if ($result) {
		$result = array("code"=> "ok", "desc"=> "删除用户成功！");
	} else {
		$result = array("code"=> "error", "desc"=> "删除用户失败！");
	}
	echo json_encode($result);
}

/*
* 列出用户数据
* $db object 数据库连接对象
* $id 查询的用户ID
*/
function listData($db, $id = null, $page = 1) {
	if (empty($id)) {
		$sql = "select id, username, competence, time from user limit ".(($page - 1) * 1).",1";
		$data = $db->get_all($sql);
	} else {
		$sql = "select id, username, competence from user where id = ".$id;
		$data = $db->get_one($sql);
	}

	$count = $db->get_one("select count(*) as count from user");

	if (is_array($count)) {
		$count = intval($count["count"], 10);
	} else {
		$count = 0;
	}

	if (is_array($data)) {
		$result = array("code"=> "ok", "desc"=> "获取用户数据成功！", "count"=> $count, "content"=> $data);
	} else {
		$result = array("code"=> "error", "desc"=> "获取用户数据失败！");
	}
	echo json_encode($result);
}
?>