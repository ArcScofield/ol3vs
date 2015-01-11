<?php
require_once("../includes/db.php");
$db = new DB();

// 建立用户表
$db->create_table("user", "id INT AUTO_INCREMENT PRIMARY KEY, username varchar(255) NOT NULL, pwd varchar(255) NOT NULL, userid varchar(255) NOT NULL, competence varchar(255) NOT NULL, time DATETIME NOT NULL");
?>