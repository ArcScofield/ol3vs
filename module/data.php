<?php
require_once("../includes/db.php");
$db = new DB();

$d = $_POST["data"];

$hashid = time().rand(1000,9999);
$data = array(
    "name"=> $d["name"],  // 名字
    "sj"=> $d["sj"],  // 赛季
    "tx"=> $d["tx"],   // 大头像
    "sg"=> $d["sg"],   // 身高
    "tz"=> $d["tz"],   // 体重
    "gj"=> $d["gj"],  //国籍
    "ls"=> $d["ls"],  // 联赛
    "jlb"=> $d["jlb"], // 俱乐部
    "zj"=> $d["zj"],  // 左脚
    "yj"=> $d["yj"], //右脚
    "hs"=> $d["hs"],  // 花式
    "zp"=> $d["zp"], // 总评
    "csnyr"=> $d["csnyr"], // 出生年月日
    "pos"=> $d["pos"],  // max位置
    "poses"=> $d["poses"],  // 各个位置
    "hashid" => $hashid,   // 随机IE
    "ss"=> $d["ss"], // 射术
    "smll"=> $d["smll"], // 射门力量
    "hx"=> $d["hx"], // 弧线
    "ys"=> $d["ys"], // 远射
    "lkcs"=> $d["lkcs"], // 凌空抽射
    "ryq"=> $d["ryq"], // 任意球
    "fdq"=> $d["fdq"], // 罚点球
    "tq"=> $d["tq"], // 头球
    "zw"=> $d["zw"], // 站位
    "sd"=> $d["sd"], // 速度
    "js"=> $d["js"], // 加速
    "lh"=> $d["lh"], // 灵活
    "fy"=> $d["fy"], // 反应
    "tt"=> $d["tt"], // 弹跳
    "tl"=> $d["tl"], // 体力
    "qz"=> $d["qz"], // 强壮
    "ph"=> $d["ph"], //平衡
    "dc"=> $d["dc"], // 短传
    "cc"=> $d["cc"], // 长传
    "cz"=> $d["cz"], // 传中
    "sy"=> $d["sy"], // 视野
    "kq"=> $d["kq"], // 控球
    "pd"=> $d["pd"], // 盘带
    "pdsd"=> $d["pdsd"], // 盘带速度
    "rdr"=> $d["rdr"], // 人盯人
    "qlx"=> $d["qlx"], // 侵略性
    "zsys"=> $d["zsys"], //战术意识
    "qd"=> $d["qd"], //抢断
    "cd"=> $d["cd"], // 铲断
    "gkpj"=> $d["gkpj"], // GK扑救
    "gkskq"=> $d["gkskq"], // GK手控球
    "gkfy"=> $d["gkfy"], // GK反应
    "gkfszw"=> $d["gkfszw"], // GK防守站位
    "ycnl"=> $d["ycnl"] // 隐藏能力
);

$res = $db->insert("player", $data);

if ($res) {
    $result = array("code"=> "ok", "desc"=> "插入数据成功！");
} else {
    $result = array("code"=> "error", "desc"=> "插入数据失败！");
}
echo json_encode($result);

$url = "http://eafifa.tgbus.com/theme/eafifa/player_img/".$d["tx"];
getImage($url, "../tx/", $d["tx"]);

// 获取头像
function getImage ($url, $save_dir='', $filename='', $type = 1) {
    if ( trim($url) == '' ) {
        return array('file_name'=>'', 'save_path'=>'', 'error'=>1); 
    } 
    if ( trim($save_dir) == '' ) {
        $save_dir = './'; 
    }
    if ( trim($filename) == '' ) { //保存文件名
        $ext = strrchr($url, '.');
        if ( $ext != '.gif' && $ext != '.jpg' && $ext != "png") {
            return array('file_name'=>'', 'save_path'=>'', 'error'=>3);
        } 
        $filename = time().$ext;
    }
    if (0 !== strrpos($save_dir,'/') ){
        $save_dir .= '/';
    }

    // 创建保存目录 
    if( !file_exists($save_dir) && !mkdir($save_dir, 0777, true) ) {
        return array('file_name'=>'', 'save_path'=>'', 'error'=>5);
    }

    // 获取远程文件所采用的方法
    if ($type) { 
        $ch = curl_init();
        $timeout = 5;
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
        $img = curl_exec($ch);
        curl_close($ch);
    } else {
        ob_start();
        readfile($url);
        $img = ob_get_contents();
        ob_end_clean();
    } 
    //$size=strlen($img); 
    //文件大小  
    $fp2 = @fopen($save_dir.$filename, 'a');
    fwrite($fp2, $img);
    fclose($fp2);
    unset($img, $url);
    return array('file_name'=>$filename, 'save_path'=>$save_dir.$filename, 'error'=>0);
}
?>