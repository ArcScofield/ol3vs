define(function(require, exports, module) {
    $("#btnSaveTeamer").click(function(e) {
    	if (!verif.check([
    		{ele: $("#txtUserName"), text: "账号不能为空", type: 1},
			{ele: $("#txtUserPwd"),text: "密码不能为空", type: 1},
			{ele: $("#txtUserConPwd"), text: "确认密码不能为空", type: 1},
			{ele: $("#txtUserConPwd"), text: "密码和确认密码不相同", vals: [$("#txtUserPwd").val(), $("#txtUserConPwd").val()], type: 3}
		])) {
			return false;
		}
        var data = {
            "username": $("#txtUserName").val(),
            "userid": $("#txtUserId").val(),
            "pwd": $("#txtUserPwd").val(),
            "vdcode": $("#txtVdReg").val(),
        };
        $.post('module/user.php?act=add', data, function(resp, textStatus, xhr) {
            if (resp.code === "ok") {
            	location.reload(true);
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
	});

	$("#btnGoTeamer").click(function () {
		viewModule.gotoView("boxTeamer");
	});

	$("#btnGoSetting").click(function () {
		viewModule.gotoView("boxSetting");
	});
});