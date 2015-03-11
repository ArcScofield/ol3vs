$(function () {
    var cls = {
        "ST": "label-danger",
        "CF": "label-danger",
        "LW": "label-danger",
        "RW": "label-danger",
        "CAM": "label-success",
        "CM": "label-success",
        "LM": "label-success",
        "RM": "label-success",
        "CDM": "label-success",
        "LB": "label-primary",
        "RB": "label-primary",
        "CB": "label-primary",
        "SW": "label-primary",
        "GK": "label-warning"
    };
    Handlebars.registerHelper('cls', function(options) {
        return cls[options.fn(this).toUpperCase()];
    });
    renderPlayer();

    function renderPlayer (data) {
        var data     = data || defaultPlayers;
        var source   = $("#playerTpl").html();
        var template = Handlebars.compile(source);
        var html     = template(data);
        $("#listPlayer").find("tbody").html(html);
    }

    var vs = {
        "players": [{
            "name": "亨利",
            "tx": "p6009676.png",
            "sj": "06",
            "sg": 180,
            "tz": 80,
            "sr": "1980-08-08",
            "jlb": "阿森纳",
            "pos": "ST",
            "poses": "cf:80|st:82|cam:80",
            "zp": 81,
            "ss": 70,
            "smll": 13,
            "hx": 40,
            "ys": 50,
            "lkcs": 60,
            "ryq": 67,
            "fdq": 79,
            "tq": 80,
            "zw": 70,
            "sd": 80,
            "js": 98,
            "lh": 67,
            "fy": 87,
            "tt": 89,
            "tl": 98,
            "qz": 78,
            "ph": 65,
            "dc": 89,
            "cc": 67,
            "cz": 78,
            "kq": 91,
            "pd": 92,
            "zsys": 56,
            "sy": 86,
            "qd": 82,
            "cd": 81,
            "rdr": 85,
            "qnx": 92,
            "gkpj": 93,
            "gkskq": 68,
            "gkdjkq": 78,
            "gkfy": 99,
            "gkfszw": 100,
            "ycnl": "领导力，进攻组织者"
        },{
            "name": "罗纳尔迪尼奥",
            "sj": "06",
            "sg": 180,
            "tz": 80,
            "sr": "1980-08-08",
            "jlb": "阿森纳",
            "pos": "ST",
            "poses": "cf:80|st:82",
            "zp": 81,
            "ss": 72,
            "smll": 13,
            "hx": 40,
            "ys": 50,
            "lkcs": 60,
            "ryq": 67,
            "fdq": 79,
            "tq": 80,
            "zw": 70,
            "sd": 80,
            "js": 98,
            "lh": 67,
            "fy": 87,
            "tt": 89,
            "tl": 98,
            "qz": 78,
            "ph": 65,
            "dc": 89,
            "cc": 67,
            "cz": 78,
            "kq": 91,
            "pd": 92,
            "zsys": 56,
            "sy": 86,
            "qd": 82,
            "cd": 81,
            "rdr": 85,
            "qnx": 92,
            "gkpj": 93,
            "gkskq": 68,
            "gkdjkq": 78,
            "gkfy": 99,
            "gkfszw": 100
        }],
        "people": [
            {"name": "射术", "pos": "cam rw cf st", "item": "ss"},
            {"name": "射门力量", "pos": "cam rw cf st", "item": "smll"},
            {"name": "弧线", "pos": "", "item": "hx"},
            {"name": "远射", "pos": "cm cam rw cf st rm", "item": "ys"},
            {"name": "凌空抽射", "pos": "cf st", "item": "lkcs"},
            {"name": "任意球", "pos": "", "item": "ryq"},
            {"name": "罚点球", "pos": "", "item": "fdq"},
            {"name": "头球", "pos": "rb cb cdm cm cam cf st", "item": "tq"},
            {"name": "站位", "pos": "rb cb cdm cm cam rm", "item": "zw"},
            {"name": "速度", "pos": "rb cb cdm cm cam rw cf st rm", "item": "sd"},
            {"name": "加速", "pos": "rw cf st rm", "item": "js"},
            {"name": "灵活", "pos": "rw rm", "item": "lh"},
            {"name": "反应", "pos": "gk rb cb cdm cm cam rw cf st rm", "item": "fy"},
            {"name": "弹跳", "pos": "gk cb", "item": "tt"},
            {"name": "体力", "pos": "rb cdm cm rw rm", "item": "tl"},
            {"name": "强壮", "pos": "rb cb cdm cm cf st", "item": "qz"},
            {"name": "平衡", "pos": "", "item": "ph"},
            {"name": "短传", "pos": "rb cb cdm cm cam rw cf st rm", "item": "dc"},
            {"name": "长传", "pos": "cdm cm cam rw rm", "item": "cc"},
            {"name": "传中", "pos": "rb rw cf rm", "item": "cz"},
            {"name": "控球", "pos": "rb cb cdm cm cam rw cf st rm", "item": "kq"},
            {"name": "盘带", "pos": "cm cam rw cf st rm", "item": "pd"},
            {"name": "战术意识", "pos": "", "item": "zsys"},
            {"name": "视野", "pos": "cdm cm cam rw rm", "item": "sy"},
            {"name": "抢断", "pos": "rb cb cdm cm", "item": "qd"},
            {"name": "铲断", "pos": "rb cb cdm", "item": "cd"},
            {"name": "人盯人", "pos": "cb cdm", "item": "rdr"},
            {"name": "侵略性", "pos": "rb cb cdm", "item": "qnx"},
            {"name": "GK扑救", "pos": "gk", "item": "gkpj"},
            {"name": "GK手控球", "pos": "gk", "item": "gkskq"},
            {"name": "GK大脚开球", "pos": "gk", "item": "gkdjkq"},
            {"name": "GK反应", "pos": "gk", "item": "gkfy"},
            {"name": "GK防守站位", "pos": "gk", "item": "gkfszw"}
        ]
    };

    Handlebars.registerHelper('aaa', function(options) {
        return vs.players[0][options.fn(this)];
    });

    Handlebars.registerHelper('bbb', function(options) {
        return vs.players[1][options.fn(this)];
    });

    Handlebars.registerHelper('poslist', function(options) {
        var str = options.fn(this);
        var arr = str.split("|");
        var html = "";

        for (var  i = 0; i < arr.length; i++) {
            html += "<li><span class=\"label-pos label " + cls[arr[i].split(":")[0].toUpperCase()] + "\">";
            html += arr[i].split(":")[0].toUpperCase();
            html += "</span>";
            html += arr[i].split(":")[1];
            html += "</li>";
        }
        return html;
    });

    Handlebars.registerHelper('diff', function(options) {
        return vs.players[0][options.fn(this)] - vs.players[1][options.fn(this)];
    });

    var source   = $("#vsPlayerInfoTpl").html();
    var template = Handlebars.compile(source);
    var html = template(vs);
    $("#boxPlayerInfo").html(html);

    var source   = $("#vsTpl").html();
    var template = Handlebars.compile(source);
    var html = template(vs);
    $("#listPlayerVs").find("tbody").html(html);

    Handlebars.registerHelper('color', function(options) {
        var val = ~~options.fn(this);
        var str = "<span class='";
        var cls = "";

        if (val < 60) {
            cls = "items-val-60";
        }

        str += cls + "''>" + val + "</span>";
        return str;
    });


    // 加载联赛球队
    $("#slMatch").change(function () {
        var val   = $(this)[0].selectedIndex;
        var doc   = document.createDocumentFragment();
        var datas = Matches[val - 1].team;
        var op    = document.createElement("option");

        op.text = "球队";
        op.value = 0;
        doc.appendChild(op);
        for (var i = 0; i < datas.length; i++) {
            op = document.createElement("option");
            op.text = datas[i].name;
            op.value = datas[i].id;
            doc.appendChild(op);
        }
        $("#slJlb").empty()[0].appendChild(doc);
    });

    /*
    * 加载隐藏能力
    */
    var doc = document.createDocumentFragment();
    var op = {};
    for (var i = 0; i < HdProp.length; i++) {
        op = document.createElement("option");
        op.text = HdProp[i];
        op.value = i;
        doc.appendChild(op);
    }
    $("#slHdProp")[0].appendChild(doc);



    $("#btnSearch").click(function () {
        search();
    });

    $("#txtName").keypress(function(e) {
        if (e.keyCode === 13) {
            search();
        }
    });

    function search() {
        var data = {
            "name": $("#txtName").val().split(/[,，]/g),  // 名字
            "pos": $("#slPos").val(),  // 球员位置
            "sj": $("#slSeason").val(),   // 赛季
            "ls": $("#slMatch").val(),  // 联赛
            "jlb": $("#slJlb").val(),   // 俱乐部
            "minZp": $("#slMinZp").val(),
            "maxZp": $("#slMaxZp").val(),
            "minTz": $("#slMinTz").val(),
            "maxTz": $("#slMaxTz").val(),
            "minSg": $("#slMinSg").val(),
            "maxSg": $("#slMaxSg").val(),
            "minCsnf": $("#slMinCsnf").val(), // 出生年份
            "maxCsnf": $("#slMaxCsnf").val(),  // 出生年份
            "tx": $("#slTx").val(),  // 体型
            "hsdz": $("#slHsdz").val(), // 花式动作
            "ycnl": $("#slHdProp").val()  // 隐藏属性
        };

        if ($("#slXx1").val().length !== 0) {
            data.xx1 = $("#slXx1").val();
            data.xx1val = $("#xx1val").val();
        }

        if ($("#slXx2").val().length !== 0) {
            data.xx1 = $("#slXx2").val();
            data.xx1val = $("#xx2val").val();
        }

        $.post("module/search.php?act=list", data, function (resp) {
            var resp = $.parseJSON(resp);
            if (resp.code === "ok") {
                renderPlayer(resp);
            }
        });
    }

    $("#listPlayer").on("click", "tr", function () {
        var cbox = $(this).children().find("input");
        if (cbox.prop("checked")) {
            $(this).removeClass("success");
            cbox.prop("checked", false);
        } else {
            $(this).addClass("success");
            cbox.prop("checked", true);
        }
        cbox.trigger("change");
    }).on("click", "input", function (e) {
        e.stopPropagation();
    }).on("change", "input", function (e) {
        var len = $("#listPlayer").find("input:checked").length;
        if (len === 2) {
            $('#vsModal').modal("show");
        }
    }).on("mouseover", ".item-player", function () {
        var hashid = $(this).attr("data-hashid");
        if (hashid) {
            if ($("#player" + hashid).length > 0) {
                $("#player" + hashid).show();
            } else {
                var tips = document.createElement("div");
                tips.className = "";
                tips.id = "#player" + hashid;
                document.body.appendChild(tips);
                $.post("getdata.php?", {"hashid": hashid}, function (resp) {
                    var source   = $("#playerInfoTpl").html();
                    var template = Handlebars.compile(source);
                    var html = template(vs.players[0]);
                    $(".tip-player-info").html(html);
                });
            }
        }
    });

    $('#vsModal').on('hide.bs.modal', function () {
        $("#listPlayer").find("input:checked").prop("checked", false);
    })
    

    $("#slQh1").change(function(event) {
        var xx = vs.players[0];
        var qh = ~~$(this).val();
        var curQh = 1;
        var diff = 0;

        if (xx.qh !== undefined) {
            curQh = xx.qh
        }
        diff = getQhDiff(qh) - getQhDiff(curQh);
        for (var i in xx) {
            if (typeof xx[i] === "number") {
                xx[i] = xx[i] + diff;
            }
        }
        xx.qh = qh;
        var source   = $("#vsTpl").html();
        var template = Handlebars.compile(source);
        var html = template(vs);
        $("#listPlayerVs").find("tbody").html(html);
    });

    $("#slLv1").change(function(event) {
        var xx = vs.players[0];
        var lv = ~~$(this).val();
        var curLv = 1;
        var diff = 0;

        if (xx.lv !== undefined) {
            curLv = xx.lv;
        }
        diff = lv - curLv;
        for (var i in xx) {
            if (typeof xx[i] === "number") {
                xx[i] = xx[i] + diff;
            }
        }
        xx.lv = lv;
        var source   = $("#vsTpl").html();
        var template = Handlebars.compile(source);
        var html = template(vs);
        $("#listPlayerVs").find("tbody").html(html);
    });

    /*
    * 获取强化能力差
    * @param {number}  qh 强化等级
    * return number
    */
    function getQhDiff (qh) {
        var num = 0;
        if (qh === 0) {
            num = -5;
        } else if (qh < 5) {
            num = qh - 1;
        } else if (qh < 8) {
            num = 5 + (qh - 5) * 2;
        } else if (qh <= 10) {
            num = 12 + (qh - 8) * 3;
        }
        return num;
    }
});