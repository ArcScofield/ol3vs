<?php
session_start();
require_once("includes/db.php");
$db = new DB();

echo $_COOKIE["username"];
?>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<meta name="renderer" content="webkit" />
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
<link rel="stylesheet" href="http://cdn.bootcss.com/bootstrap/3.3.2/css/bootstrap.min.css" media="all">
<link href="static/css/common.css" rel="stylesheet" media="all">
<link href="static/css/css.css" rel="stylesheet" media="all">
<link href="static/css/plug.css" rel="stylesheet" media="all">
<title>FIFA Online3 杯赛系统</title>
<style type="text/css">

</style>
</head>

<body>
<div class="nav">
    <div class="wrap">
        <ul class="list-nav">
            <li class="nav-item">
                <a class="nav-item" href="index.html">球员数据库</a>
            </li>
            <li class="nav-item nav-item-cur">
                <a href="javascript:;" class="nav-item nav-item-cur">战队系统</a>
            <li>
        </ul>
    </div>
    <!--
    <a class="nav-item" href="#" data-toggle="modal" data-target="#loginModal">登陆</a>
    <a class="nav-item" href="#" data-toggle="modal" data-target="#regModal">注册</a>
    <a class="nav-item" href="module/user.php?act=loginout">退出</a>
    -->
</div>
<div class="wrap clearfix">
    <div class="list-group side">
        <a href="javascript:;" class="list-group-item active" id="btnGoHome"><span class="glyphicon glyphicon-home"></span> 战队首页</a>
        <!--
        <a href="javascript:;" class="list-group-item"><span class="glyphicon glyphicon-tower"></span> 队内联赛</a>
        -->
        <?php
        // if (isset($_SESSION['username'])) {
        ?>
        <a href="javascript:;" class="list-group-item" id="btnGoCup"><span class="glyphicon glyphicon-glass"></span><span class="badge">2</span> 队内杯赛</a>
        <a href="javascript:;" class="list-group-item" id="btnGoTeamer"><span class="glyphicon glyphicon-list"></span> 队内数据</a>
        <a href="javascript:;" class="list-group-item" id="btnGoSetting"><span class="glyphicon glyphicon-cog"></span> 个人设置</a>
        <?php
        // }
        ?>
    </div>
    <div class="main">
        <div id="boxHome" class="box-main-item" style="display: block;">
            <div class="box-card">
                <h2>FIFA OL3公告</h2>
                <div class="box-main-body">
                    <ul class="list-news">
                        <li>
                            <span class="type">[活动]</span>
                            <a href="#">年末狂欢宴 史上最强福利即将开启！</a>
                            <span class="time">2014-12-19</span>
                        </li>
                        <li>
                            <span class="type">[新闻]</span>
                            <a href="#">年末狂欢宴 史上最强福利即将开启！</a>
                            <span class="time">2014-12-19</span>
                        </li>
                        <li>
                            <span class="type">[新闻]</span>
                            <a href="#">“14时代”数据更新指南</a>
                            <span class="time">2014-12-17</span>
                        </li>
                        <li>
                            <span class="type">[活动]</span>
                            <a href="#">年末狂欢宴 史上最强福利即将开启！</a>
                            <span class="time">2014-12-19</span>
                        </li>
                        <li>
                            <span class="type">[新闻]</span>
                            <a href="#">年末狂欢宴 史上最强福利即将开启！</a>
                            <span class="time">2014-12-19</span>
                        </li>
                        <li>
                            <span class="type">[新闻]</span>
                            <a href="#">“14时代”数据更新指南</a>
                            <span class="time">2014-12-17</span>
                        </li>
                    </ul>
                </div>
            </div>
            <?php
            // if (isset($_SESSION['username'])) {
            ?>
            <div class="box-card">
                <h2>个人战绩</h2>
                <ul class="list-data">
                    <li>
                        <span><span>最好成绩：</span>冠军</span>
                        <span><span>冠军次数：</span>1次</span>
                        <span><span>亚军次数：</span>3次</span>
                        <span><span>季军次数：</span>4次</span>
                    </li>
                    <li>
                        <span><span>出 场 数：</span>100</span>
                        <span><span>胜 场 数：</span>100</span>
                        <span><span>平 场 数：</span>100</span>
                        <span><span>负 场 数：</span>100</span>
                    </li>
                    <li>
                        <span><span>进 球 数：</span>100</span>
                        <span><span>场均进球：</span>100</span>
                        <span><span>失 球 数：</span>100</span>
                        <span><span>场均失球：</span>100</span>
                    </li>
                </ul>
            </div>
            <?php
            // }
            ?>
            <div class="box-card">
                <h2>税费计算器</h2>
                <div class="box-tool-tax">
                    <label>出售价格：<input maxlength="11" type="text" id="txtPrice"></label>
                    <span class="txt-item">手续费：<span id="txtTax"></span></span>
                    <span class="txt-item">获得：<span id="txtResult"></span></span>
                </div>
            </div>
        </div>
        <div id="boxListCup" class="box-main-item">
            <div class="box-card">
                <h2>战队杯赛<button  data-toggle="modal" data-target="#cupModal" type="button" class="btn btn-sm btn-primary">创建杯赛</button></h2>
                <div class="box-main-body">
                    <table class="tb-match">
                        <tr>
                            <th>比赛名称：</th>
                            <td>大鸟杯</td>
                        </tr>
                        <tr>
                            <th>比赛类型：</th>
                            <td>3 VS 3</td>
                        </tr>
                        <tr>
                            <th>比赛说明：</th>
                            <td>杯赛说明杯赛说明杯赛说明杯赛说明杯赛说明杯赛说明杯赛说明杯赛说明杯赛说明</td>
                        </tr>
                        <tr>
                            <th>比赛奖励：</th>
                            <td>20QB</td>
                        </tr>
                        <tr>
                            <th>杯赛状态：</th>
                            <td>报名中</td>
                        </tr>
                        <tr>
                            <th></th>
                            <td>
                                <button type="button" class="btn btn-sm btn-primary">我要报名</button>
                                <button type="button" class="btn btn-sm btn-primary">杯赛赛况</button></td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="box-card">
                <h2>杯赛赛况</h2>
                <table class="tb-team table table-bordered">
                    <tr>
                        <th width="5%">A组</th>
                        <th>队员</th>
                        <th width="5%">出场</th>
                        <th width="5%">胜</th>
                        <th width="5%">平</th>
                        <th width="5%">负</th>
                        <th width="5%">进球</th>
                        <th width="5%">失球</th>
                        <th width="7%">净胜球</th>
                        <th width="5%">积分</th>
                    </tr>
                    <tr>
                        <td></td>
                        <td>超毛</td>
                        <td>6</td>
                        <td>2</td>
                        <td>2</td>
                        <td>2</td>
                        <td>10</td>
                        <td>20</td>
                        <td>20</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>超毛</td>
                        <td>6</td>
                        <td>2</td>
                        <td>2</td>
                        <td>2</td>
                        <td>10</td>
                        <td>20</td>
                        <td>20</td>
                        <td>20</td>
                    </tr><tr>
                        <td></td>
                        <td>超毛</td>
                        <td>6</td>
                        <td>2</td>
                        <td>2</td>
                        <td>2</td>
                        <td>10</td>
                        <td>20</td>
                        <td>20</td>
                        <td>20</td>
                    </tr>
                    </tr><tr>
                        <td></td>
                        <td>超毛</td>
                        <td>6</td>
                        <td>2</td>
                        <td>2</td>
                        <td>2</td>
                        <td>10</td>
                        <td>20</td>
                        <td>20</td>
                        <td>20</td>
                    </tr>
                </table>
            </div>
        </div>
        <div id="boxTeamer" class="box-main-item">
            <div class="box-card">
                <h2>战队成员</h2>
                <table class="tb-team table">
                    <tr>
                        <th>队员ID</th>
                        <th width="7%">出场</th>
                        <th width="7%">胜</th>
                        <th width="7%">平</th>
                        <th width="7%">负</th>
                        <th width="7%">进球</th>
                        <th width="7%">失球</th>
                        <th width="7%">净胜球</th>
                        <th width="7%">操作</th>
                    </tr>
                    <tr>
                        <td>超毛</td>
                        <td>6</td>
                        <td>2</td>
                        <td>2</td>
                        <td>2</td>
                        <td>10</td>
                        <td>20</td>
                        <td>20</td>
                        <td>20</td>
                    </tr>
                </table>
            </div>
        </div>
        <div id="boxSetting" class="box-main-item">
            <div class="box-card">
                <h2>个人设置</h2>
                <form class="form-horizontal" role="form">
                    <div class="form-group">
                        <label for="txtMatchStartTime" class="col-sm-2 control-label">密码：</label>
                        <div class="col-sm-5">
                            <input class="form-control" type="text" id="txtSetUserPwd">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="txtMatchEndTime" class="col-sm-2 control-label">确认密码：</label>
                        <div class="col-sm-5">
                            <input class="form-control" type="text" id="txtSetUserConPwd">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="txtMatchEndTime" class="col-sm-2 control-label">游戏ID：</label>
                        <div class="col-sm-5">
                            <input class="form-control" type="text" id="txtSetUserId">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="txtMatchEndTime" class="col-sm-2 control-label">验证码：</label>
                        <div class="col-sm-3">
                            <input type="text" class="form-control" id="txtSetVdReg" />
                            <img title="点击刷新" src="module/captcha.php" align="absbottom" onclick="this.src='module/captcha.php?'+Math.random();"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-offset-2 col-sm-10">
                            <button type="submit" class="btn btn-primary" id="btnSaveTeamer">确定</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<footer class="footer">
    <p>关于我们</p>
    <p>© 2015 ol3vs.com Inc. All rights reserved.</p>
</footer>

<div class="modal fade" id="regModal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                <h4 class="modal-title">用户注册</h4>
            </div>
            <div class="modal-body">
                <form class="form-horizontal" role="form">
                    <div class="form-group">
                        <label for="txtUserName" class="col-sm-3 control-label">账号：</label>
                        <div class="col-sm-7">
                            <input class="form-control" type="text" id="txtRegUserName">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="txtUserPwd" class="col-sm-3 control-label">密码：</label>
                        <div class="col-sm-7">
                            <input class="form-control" type="password" id="txtRegUserPwd">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="txtUserConPwd" class="col-sm-3 control-label">确认密码：</label>
                        <div class="col-sm-7">
                            <input class="form-control" type="password" id="txtRegUserConPwd">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="txtUserId" class="col-sm-3 control-label">游戏ID：</label>
                        <div class="col-sm-7">
                            <input class="form-control" type="text" id="txtRegUserId">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="txtVdReg" class="col-sm-3 control-label">验证码：</label>
                        <div class="col-sm-3">
                            <input type="text" class="form-control" id="txtRegVdReg" />
                            <img title="点击刷新" src="module/captcha.php" align="absbottom" onclick="this.src='module/captcha.php?'+Math.random();"/>
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                <button id="btnReg" type="button" class="btn btn-primary">注册</button>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="loginModal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                <h4 class="modal-title">用户登陆</h4>
            </div>
            <div class="modal-body">
                <form class="form-horizontal" role="form">
                    <div class="form-group">
                        <label for="txtUserName" class="col-sm-3 control-label">账号：</label>
                        <div class="col-sm-7">
                            <input class="form-control" type="text" id="txtLoginUserName">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="txtUserPwd" class="col-sm-3 control-label">密码：</label>
                        <div class="col-sm-7">
                            <input class="form-control" type="password" id="txtLoginUserPwd">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="txtVdReg" class="col-sm-3 control-label">验证码：</label>
                        <div class="col-sm-3">
                            <input type="text" class="form-control" id="txtLoginVdReg" />
                            <img title="点击刷新" src="module/captcha.php" align="absbottom" onclick="this.src='module/captcha.php?'+Math.random();"/>
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                <button id="btnLogin" type="button" class="btn btn-primary">登陆</button>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="cupModal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                <h4 class="modal-title">创建杯赛</h4>
            </div>
            <div class="modal-body">
                <form class="form-horizontal" role="form">
                    <div class="form-group">
                        <label for="txtMatchTitle" class="col-sm-3 control-label">杯赛名称：</label>
                        <div class="col-sm-7">
                            <input class="form-control" type="text" id="txtMatchTitle">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label">队伍数量：</label>
                        <div class="col-sm-7">
                            <div id="boxMatchTeamNum"></div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label">比赛类型：</label>
                        <div class="col-sm-7">
                            <div id="boxMatchType"></div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="txtMatchDesc" class="col-sm-3 control-label">比赛奖励：</label>
                        <div class="col-sm-7">
                            <textarea class="form-control" id="txtMatchDesc"></textarea>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="txtMatchReward" class="col-sm-3 control-label">比赛说明：</label>
                        <div class="col-sm-7">
                            <textarea class="form-control" id="txtMatchReward"></textarea>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="txtMatchReward" class="col-sm-3 control-label">验证码：</label>
                        <div class="col-sm-7">
                            <img title="点击刷新" src="module/captcha.php" align="absbottom" onclick="this.src='module/captcha.php?'+Math.random();"/>
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                <button id="btnLogin" type="button" class="btn btn-primary">确定</button>
            </div>
        </div>
    </div>
</div>


<!-- /.modal -->
<script type="text/javascript" src="static/js/lib/jq/jquery.js"></script>
<script type="text/javascript" src="static/js/lib/bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="static/js/plug/btngroup/btngroup.js"></script>
<script type="text/javascript" src="static/js/plug/verif/verif.js"></script>
<script type="text/javascript" src="static/js/plug/toptips/toptips.js"></script>
<script src="static/js/lib/seajs/sea.js"></script>
<script type="text/javascript">
seajs.config({
    base: "./static/js/lib/",
    alias: {
        "layout": "./layout.js",
        "global": "./global.js"
    }
});
seajs.use("./static/js/main");

// $('#loginModal').modal("show");
var viewModule = {
    views: ["boxHome", "boxListCup", "boxAddCup", "boxTeamer", "boxSetting"],
    curView: "boxHome",
    gotoView: function (view) {
        if (!view) {
            return false;
        }
        $("#" + this.curView).hide();
        this.curView = view;
        $("#" + view).show();
    }
}
</script>
</body>
</html>