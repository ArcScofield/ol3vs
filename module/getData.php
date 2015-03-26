<?php
header("Content-type: text/xml");
$strHTML = file_get_contents("http://fifaonline3.inven.co.kr/dataninfo/player/player_layer.xml.php?code=12190871"); 
echo $strHTML 
?>