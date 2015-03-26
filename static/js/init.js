$(function () {
    var playersCache = {
        "11111": {
            "name": "罗纳尔迪尼奥",
            "zj": 3,
            "yj": 4,
            "head": "p7008473.png",
            "ycnl": "天赋"
        }
    };  // 球员缓存
    var playersPage      = defaultPlayers;   // 搜索出来的球员列表，主要用于翻页时的缓存
    var pageCount = 4;  // 每页的人数
    var curPage      = 1;   // 翻页的当前页面
    var vs = {
        "players": [],
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
            {"name": "侵略性", "pos": "rb cb cdm", "item": "qlx"},
            {"name": "GK扑救", "pos": "gk", "item": "gkpj"},
            {"name": "GK手控球", "pos": "gk", "item": "gkskq"},
            {"name": "GK大脚开球", "pos": "gk", "item": "gkdjkq"},
            {"name": "GK反应", "pos": "gk", "item": "gkfy"},
            {"name": "GK防守站位", "pos": "gk", "item": "gkfszw"}
        ]
    };
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
        "LWB": "label-primary",
        "LWB": "label-primary",
        "RB": "label-primary",
        "CB": "label-primary",
        "SW": "label-primary",
        "GK": "label-warning"
    };

    Handlebars.registerHelper('cls', function(options) {
        return cls[options.fn(this).toUpperCase()];
    });
    renderPlayer(defaultPlayers.slice(0, 4));
    renderPage(Math.ceil(defaultPlayers.length / pageCount), curPage);

    // 渲染搜索出来的球员
    function renderPlayer (data) {
        var source   = $("#playerTpl").html();
        var template = Handlebars.compile(source);
        var html     = template({"players": data});
        $("#listPlayer").find("tbody").html(html);
    }

    // 渲染翻页
    function renderPage (pages) {
        var pages = pages || 1;
        var data = [];
        var source;
        var template;
        var html;
        var cls = "";

        if (pages === 1) {
            html = "";
        } else {
            if (pages <= 5) {
                for (var i = 1; i <= pages; i++) {
                    if (i === curPage) {
                        cls = "active";
                    } else {
                        cls = "";
                    }
                    data.push({page: i, clses: cls});
                }
            } else {
                var startPage = (curPage - 2) > 0 ? (curPage - 2) : 1;
                var endPage = (curPage + 2) < pages ? (curPage + 2) : pages; 
                for (var i =  startPage; i<= endPage; i++) {
                    if (i === curPage) {
                        cls = "active";
                    } else {
                        cls = "";
                    }
                    data.push({page: i, cls: cls});
                }
            }
            source  = $("#pageTpl").html();
            template = Handlebars.compile(source);
            html     = template({"pages": data, "count": pages});
        }
        $(".nav-page").html(html);
    }

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

    Handlebars.registerHelper("posUnion", function(options) {
        var obj = {};
        var html = "";
        var posStr = vs.players[0].poses + "|" + vs.players[1].poses;
        posStr.replace(/[a-z]{2,3}/g, function (a) {
            if (!obj[a]) {
                html += '<li data-pos="' + a + '">' + a.toUpperCase() + '</li>\n';
                obj[a] = true;
            }
        });
        delete obj;
        return html;
    });
    

    Handlebars.registerHelper('diff', function(options) {
        return vs.players[0][options.fn(this)] - vs.players[1][options.fn(this)];
    });

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
        var datas = Matches[val].team;
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
        curPage = 1;
        var data = {
            "names": $("#txtName").val().split(/[,，]/g),  // 名字
            "pos": $("#slPos").val(),  // 球员位置
            "sj": $("#slSeason").val(),   // 赛季
            "ls": $("#slMatch").val(),  // 联赛
            "jlb": $("#slJlb").val(),   // 俱乐部
            "minZp": ~~$("#slMinZp").val(),
            "maxZp": ~~$("#slMaxZp").val(),
            "minTz": ~~$("#slMinTz").val(),
            "maxTz": ~~$("#slMaxTz").val(),
            "minSg": ~~$("#slMinSg").val(),
            "maxSg": ~~$("#slMaxSg").val(),
            "minCsnf": $("#slMinCsnf").val(), // 出生年份
            "maxCsnf": $("#slMaxCsnf").val(),  // 出生年份
            "tx": ~~$("#slTx").val(),  // 体型
            "hsdz": ~~$("#slHsdz").val(), // 花式动作
            "ycnl": $("#slHdProp").val()  // 隐藏属性
        };

        if ($("#slXgj").val().length !== 0) {
            data.xgj = ~~$("#slXgj").val();
            data.xgjVal = ~~$("#slXgjVal").val();
        }

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
                playersPage = resp.players;
                renderPlayer(resp);
                var players = resp.players;
                for (var i = 0; i < players.length; i++) {
                    if (!playersCache[players[i].hashid]) {
                        playersCache[players[i].hashid] = players[i];
                    }
                }
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
        var hashid = $(this).attr("data-hashid");
        var len = $("#listPlayer").find("input:checked").length;

        if ($(this).prop("checked") && playersCache[hashid]) {
            vs.players.push(playersCache[hashid]);
        } else {
            vs.players.pop();
        }
        if (len === 2) {
            var source   = $("#vsPlayerInfoTpl").html();
            var template = Handlebars.compile(source);
            var html = template(vs);
            $("#boxPlayerVs").html(html);
            $('#vsModal').modal("show");
        }
    }).on("mouseover", ".item-player", function () {
        var hashid = $(this).attr("data-hashid");
        if (hashid && playersCache[hashid]) {
            var offset = $(this).offset();
            var width = $(this).width();
            if ($("#player" + hashid).length > 0) {
                var left = offset.left + width + 20 + "px";
                var top = offset.top - 27 + "px";
                $("#player" + hashid).css({"left": left, "top": top}).show();
            } else {
                var tips = document.createElement("div");
                tips.className = "tip-player-info";
                tips.id = "player" + hashid;
                tips.style.left = offset.left + width + 20 + "px";
                tips.style.top = offset.top - 27 + "px";
                tips.style.display = "block";
                var source   = $("#playerInfoTpl").html();
                var template = Handlebars.compile(source);
                var html = template(playersCache[hashid]);
                $(tips).html(html);
                document.body.appendChild(tips);
            }
        }
    }).on("mouseleave", ".item-player", function () {
        var hashid = $(this).attr("data-hashid");
        if (hashid) {
            $("#player" + hashid).hide();
        }
    }).on("click", ".item-player", function () {
        var hashid = $(this).attr("data-hashid");
        if (hashid && playersCache[hashid]) {
            var source   = $("#playerInfoTpl").html();
            var template = Handlebars.compile(source);
            var html = template(playersCache[hashid]);
            $(".box-player-page-xx").html(html);
            $(".box-player-page").show();
        }
    });

    $('#vsModal').on('hide.bs.modal', function () {
        $("#listPlayer").find("input:checked").prop("checked", false);
    });

    $(".nav-page").on("click", "a", function () {
        var page = ~~$(this).attr("data-page") || 1;
        $(".nav-page").find(".active").removeClass("active");
        $(this).parent().addClass("active");
        curPage = page;

        var data = playersPage.slice((curPage - 1) * pageCount, curPage * pageCount);
        renderPlayer(data);
    });
    
    // 绑定位置筛选事件
    $(".list-union-pos").on("click", "li", function () {
        var pos = $(this).attr("data-pos");
        if (pos === "all") {
            $("#listPlayerVs").find("tr").show();
        } else {
            $("#listPlayerVs").find("tr").each(function (index, item) {
                var tr = $(item);
                if (tr.hasClass(pos)) {
                    tr.show();
                } else {
                    tr.hide();
                }
            });
        }
    });

    $("#slQh1").change(function(event) {
        var xx = vs.players[0];
        var qh = ~~$(this).val();
        var curQh = 1;
        var diff = 0;

        if (xx.qh !== undefined) {
            curQh = xx.qh;
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