define(function(require, exports, module) {
	$("#boxMatchTeamNum").btngroup({
        items: [{
            "text": "8支",
            "value": 1
        }, {
            "text": "16支",
            "value": 2
        }, {
            "text": "32支",
            "value": 3
        }],
        type: 1,
        data: [3]
    });
    $("#boxMatchType").btngroup({
        items: [{
            "text": "1 VS 1",
            "value": 1
        }, {
            "text": "2 VS 2",
            "value": 2
        }, {
            "text": "3 VS 3",
            "value": 3
        }],
        type: 1,
        data: [1]
    });
    $("#btnSaveMatch").click(function (e) {
        var data = {
            "title": $("#txtMatchTitle").val(),
            "type": ~~$("#boxMatchType").btngroup("getValue")[0],
            "num": ~~$("#boxMatchTeamNum").btngroup("getValue")[0],
            "desc": $("#txtMatchDesc").val(),
            "reward": $("#txtMatchReward").val()
        }
        $.post("module/module.php?act=add", data, function (resp, textStatus, xhr) {

        });
        e.preventDefault()
    });
});