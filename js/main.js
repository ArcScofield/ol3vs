define(function(require, exports, module) {
    $("#btnSaveTeamer").click(function(e) {
    	alert(1);
        var data = {
            "username": $("#txtUserName").val(),
            "userid": $("#txtUserId").val(),
            "pwd": $("#txtUserPwd").val(),
            "vdcode": $("#txtVdReg").val(),
        };
        $.post('module/user.php?act=add', data, function(resp, textStatus, xhr) {
            
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