<?php
$url = "http://fifaonline3.inven.co.kr/dataninfo/player/player_layer.xml.php?code=93191189";
$contents = file_get_contents($url);
// $pattern = "/\<div class=\"infoBody\"\>(.*)<div class=\"basicInfo2\">/";
//$start = strpos($contents, '<div class = "basicInfo1">');
//$end = strpos($contents, '<div class = "basicInfo2">');
//echo substr($contents, $start, ($end - $start));
echo $contents;
?>