define(function(require, exports, module) {
    $("#btnReg").click(function(e) {
        if (!verif.check([
            {ele: $("#txtRegUserName"), text: "账号不能为空", type: 1},
            {ele: $("#txtRegUserPwd"), text: "密码不能为空", type: 1},
            {ele: $("#txtRegUserConPwd"), text: "确认密码不能为空", type: 1},
            {ele: $("#txtRegUserConPwd"), text: "密码和确认密码不相同", vals: [$("#txtRegUserPwd").val(), $("#txtRegUserConPwd").val()], type: 3}
        ])) {
            return false;
        }
        var data = {
            "username": $("#txtRegUserName").val(),
            "userid": $("#txtRegUserId").val(),
            "pwd": $("#txtRegUserPwd").val(),
            "vdcode": $("#txtRegVdReg").val()
        };
        $.post('module/user.php?act=add', data, function(resp) {
            resp = $.parseJSON(resp);
            if (resp.code === "ok") {
                location.reload(true);
            } else {

            }
        });
        e.preventDefault();
    });

    seajs.use("./js/module/home/home", function (home) {
        home.init();
    });

    $("#btnGoHome").click(function () {
        viewModule.gotoView("boxHome");
    });

    $("#btnGoCup").click(function () {
        viewModule.gotoView("boxListCup");
        seajs.use("./js/module/match/match", function (cup) {
        });
    });

    $("#btnGoTeamer").click(function () {
        viewModule.gotoView("boxTeamer");
    });

    $("#btnGoSetting").click(function () {
        viewModule.gotoView("boxSetting");
    });
});