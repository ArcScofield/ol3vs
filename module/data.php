<?php
require_once("../includes/db.php");
$db = new DB();

$data = $_POST["data"]
//开始一个事务
mysql_query("BEGIN"); //或者mysql_query("START TRANSACTION");
$data1 = array(
    "name"=> ,  // 名字
    "ename"=> ,  // 英文名字
    "sj"=>   // 赛季
    "bigtx"=>,   // 大头像
    "smalltx"=>,  // 小头像
    "sg"=>,   // 身高
    "tz"=>,   // 体重
    "gj"=>,  //国籍
    "ls"=>,  // 联赛
    "jlb"=>, // 俱乐部
    "zj"=>,  // 左脚
    "yj"=>, //右脚
    "hs"=>   // 花式
    "zp"=>  // 总评
    "csnyr"=>  // 出生年月日
);

$data2 = array(
    "ss"=> , // 射术
    "smll"=> , // 射门力量
    "hx"=>  // 弧线
    "ys"=> // 远射
    "lkcs"=> // 凌空抽射
    "ryq"=> // 任意球
    "fdq"=>  // 罚点球
    "tq"=>  // 头球
    "zw"=> // 站位
    "sd"=>    // 速度
    "js"=>   // 加速
    "lh"=>  // 灵活
    "fy"=>  // 反应
    "tt"=>  // 弹跳
    "tl"=>  // 体力
    "qz"=>  // 强壮
    "ph"=> //平衡
    "dc"=> // 短传
    "cc"=>  // 长传
    "cz"=>  // 传中
    "sy"=>  // 视野
    "kq"=> // 控球
    "pd"=> // 盘带
    "pdsd"=> // 盘带速度
    "rdr"=> // 人盯人
    "qlx"=> // 侵略性
    "zsys"=> //战术意识
    "qd"=> //抢断
    "cd"=> // 铲断
    "gkpj"=> // GK扑救
    "gkskq"=> // GK手控球
    "gkfy"=> // GK反应
    "gkfszw"=> // GK防守站位
);
$res1->insert("player", $data1);
$res2->insert("playerxx", $data2);

if ($res1 && $res1) {
    mysql_query("COMMIT");
    $result = array("code"=> "ok", "desc"=> "插入数据成功！");
} else {
    mysql_query("ROLLBACK");
    $result = array("code"=> "error", "desc"=> "插入数据失败！");
}
mysql_query("END");
echo json_encode($result);
?>