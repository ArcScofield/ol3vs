$(function () {
    // 球员数据模型
    var playerModel = {
        localPlayers: [], // 本地缓存的球员，用于初次加载
        playersPage: [],   // 搜索出来的球员列表，主要用于翻页时的缓存
        pageCount: 17,  // 每页球员的数据量
        curPage: 1,  // 当前页
        playersCache: {},  // 球员缓存，用于鼠标移动显示详细信息
        getData: function () {
            var me = this;
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
            this.curPage = 1;  // 设置当前页为第一页

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
                    var players = resp.players;
                    me.playersPage = players;
                    playersView.renderPlayer(players.slice(0, me.pageCount));
                    playersView.renderPage(Math.ceil(players.length / me.pageCount), me.curPage);
                    for (var i = 0; i < players.length; i++) {
                        if (!me.playersCache[players[i].hashid]) {
                            me.playersCache[players[i].hashid] = players[i];
                        }
                    }
                }
            });
        }
    };

    // 球员数据View
    var playersView = {
        model: playerModel,
        // 渲染搜索出来的球员
        renderPlayer: function (data) {
            var source   = $("#playerTpl").html();
            var template = Handlebars.compile(source);
            var html     = template({"players": data});
            $("#listPlayer").find("tbody").html(html);
        },
        // 渲染翻页
        renderPage: function (pages, curPage) {
            var data = [];
            var source;
            var template;
            var html;
            var cls = "";
            pages = pages || Math.ceil(this.model.playersPage.length / this.model.pageCount);
            curPage = curPage || this.model.curPage;

            if (pages === 1) {
                html = "";
            } else {
                if (pages <= 7) {
                    for (var i = 1; i <= pages; i++) {
                        if (i === curPage) {
                            cls = "active";
                        } else {
                            cls = "";
                        }
                        data.push({page: i, clses: cls, name: i});
                    }
                } else {
                    var startPage = (curPage - 3) > 0 ? (curPage - 3) : 1;
                    var endPage = (curPage + 3) < pages ? (curPage + 3) : pages;
                    if (startPage > 1) {
                        data.push({page: 1, clses: "", name: "«首页"});
                    }
                    for (var i =  startPage; i<= endPage; i++) {
                        if (i === curPage) {
                            cls = "active";
                        } else {
                            cls = "";
                        }
                        data.push({page: i, clses: cls, name: i});
                    }
                    if (endPage < pages) {
                        data.push({page: pages, clses: "", name: "末页»"});
                    }
                }
                source  = $("#pageTpl").html();
                template = Handlebars.compile(source);
                html     = template({"pages": data, "count": pages});
            }
            $(".nav-page").html(html);
        }
    };
    var vs = {
        "players": [],
        "people": [
            {"name": "射术", "pos": "cam rw lw cf st", "item": "ss"},
            {"name": "射门力量", "pos": "cam rw lw cf st", "item": "smll"},
            {"name": "弧线", "pos": "", "item": "hx"},
            {"name": "远射", "pos": "cm cam rw lw cf st rm lm", "item": "ys"},
            {"name": "凌空抽射", "pos": "cf st", "item": "lkcs"},
            {"name": "任意球", "pos": "", "item": "ryq"},
            {"name": "罚点球", "pos": "", "item": "fdq"},
            {"name": "头球", "pos": "rb lb cb cdm cm cam cf st", "item": "tq"},
            {"name": "站位", "pos": "rb lb cb cdm cm cam rm lm", "item": "zw"},
            {"name": "速度", "pos": "rb lb cb cdm cm cam rw lw cf st rm lm", "item": "sd"},
            {"name": "加速", "pos": "rw lw cf st rm lm", "item": "js"},
            {"name": "灵活", "pos": "rw lw rm lm", "item": "lh"},
            {"name": "反应", "pos": "gk rb lb cb cdm cm cam rw lw cf st rm lm", "item": "fy"},
            {"name": "弹跳", "pos": "gk cb", "item": "tt"},
            {"name": "体力", "pos": "rb lb cdm cm rw lw rm lm", "item": "tl"},
            {"name": "强壮", "pos": "rb lb cb cdm cm cf st", "item": "qz"},
            {"name": "平衡", "pos": "", "item": "ph"},
            {"name": "短传", "pos": "rb lb cb cdm cm cam rw lw cf st rm lm", "item": "dc"},
            {"name": "长传", "pos": "cdm cm cam rw lw rm lm", "item": "cc"},
            {"name": "传中", "pos": "rb lb rw lw cf rm lm", "item": "cz"},
            {"name": "控球", "pos": "rb lb cb cdm cm cam rw lw cf st rm lm", "item": "kq"},
            {"name": "盘带", "pos": "cm cam rw lw cf st rm lm", "item": "pd"},
            {"name": "战术意识", "pos": "", "item": "zsys"},
            {"name": "视野", "pos": "cdm cm cam rw lw rm lm", "item": "sy"},
            {"name": "抢断", "pos": "rb lb cb cdm cm", "item": "qd"},
            {"name": "铲断", "pos": "rb lb cb cdm", "item": "cd"},
            {"name": "人盯人", "pos": "cb cdm", "item": "rdr"},
            {"name": "侵略性", "pos": "rb lb cb cdm", "item": "qlx"},
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
        "RWB": "label-primary",
        "RB": "label-primary",
        "CB": "label-primary",
        "SW": "label-primary",
        "GK": "label-warning"
    };

    Handlebars.registerHelper('cls', function(options) {
        return cls[options.fn(this).toUpperCase()];
    });

    Handlebars.registerHelper('aaa', function(options) {
        var arr = options.fn(this).split("-");
        var val = vs.players[~~arr[0]][arr[1]];
        var str = "<span class='";
        var cls = "";

        if (val < 60) {
            cls = "items-val-60";
        } else if (val >= 80 && val < 90) {
            cls = "items-val-80";
        } else if (val >= 90 && val < 100) {
            cls = "items-val-90";
        } else if (val >=100) {
            cls = "";
        }

        str += cls + "'>" + val + "</span>";
        return str;
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
        } else if (val >= 80 && val < 90) {
            cls = "items-val-80";
        } else if (val >= 90 && val < 100) {
            cls = "items-val-90";
        } else if (val >=100) {
            cls = "";
        }

        str += cls + "''>" + val + "</span>";
        return str;
    });

    Handlebars.registerHelper('txes', function(options) {
        var arr = ["肥胖", "普通", "瘦弱"]
        return arr[~~options.fn(this)];
    });

    Handlebars.registerHelper('team', function(options) {
        var arr = options.fn(this).split("-");
        var i = Matches.length;
        var j = 0;
        var team = "";
        while (i--) {
            if (Matches[i].id === ~~arr[0]) {
                j = Matches[i].team.length;
                while (j--) {
                    if (Matches[i].team[j].id === ~~arr[1]) {
                        return Matches[i].team[j].name;
                        break;
                    }
                }
            }
        }
        return "";
    });

    playerModel.getData();

    // 加载联赛球队
    $("#slMatch").change(function () {
        var val   = $(this)[0].selectedIndex;
        var doc   = document.createDocumentFragment();
        var datas = Matches[val].team;
        var op    = document.createElement("option");

        op.innerHTML = "球队";
        op.value = 0;
        doc.appendChild(op);
        for (var i = 0; i < datas.length; i++) {
            op = document.createElement("option");
            op.innerHTML = datas[i].name;
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
        playerModel.getData();
    });

    $("#txtName").keypress(function(e) {
        if (e.keyCode === 13) {
            playerModel.getData();
        }
    });

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

        if ($(this).prop("checked") && playerModel.playersCache[hashid]) {
            vs.players.push(playerModel.playersCache[hashid]);
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
        if (hashid && playerModel.playersCache[hashid]) {
            var offset = $(this).offset();
            var winHeight = $(window).height();
            var scrollHeight = $(document).scrollTop();
            var divHeight = 496;
            var width = $(this).width();
            var diff = 0;
            if (winHeight - offset.top + scrollHeight >= divHeight) {
                diff = 0;
            } else if (offset.top - scrollHeight >= divHeight) {
                diff = 460;
            } else {
                diff = 250;
            }
            if ($("#player" + hashid).length > 0) {
                var left = offset.left + width + 20 + "px";
                var top = offset.top - diff + "px";
                $("#player" + hashid).css({"left": left, "top": top}).show();
            } else {
                var tips = document.createElement("div");
                tips.className = "tip-player-info";
                tips.id = "player" + hashid;
                tips.style.left = offset.left + width + 20 + "px";
                tips.style.top = offset.top - diff + "px";
                tips.style.display = "block";
                var source   = $("#playerInfoTpl").html();
                var template = Handlebars.compile(source);
                var html = template(playerModel.playersCache[hashid]);
                $(tips).html(html);
                document.body.appendChild(tips);
            }
        }
    }).on("mouseleave", ".item-player", function () {
        var hashid = $(this).attr("data-hashid");
        if (hashid) {
            $("#player" + hashid).hide();
        }
    });

    if (window.VBArray && ~~document.documentMode <= 9) {
        var defaultStr = "逗号分隔搜索多名球员";
        $("#txtName").css("color", "#999").val(defaultStr).focus(function () {
            if ($(this).val() === defaultStr) {
                $(this).val("");
            }
            $(this).css("color", "#000");
        }).blur(function () {
            if ($(this).val().length === 0) {
                $(this).val(defaultStr).css("color", "#999");
            }
        });
    }
    /*
    .on("click", ".item-player", function () {
        var hashid = $(this).attr("data-hashid");
        if (hashid && playersCache[hashid]) {
            var source   = $("#playerInfoTpl").html();
            var template = Handlebars.compile(source);
            var html = template(playersCache[hashid]);
            $(".box-player-page-xx").html(html);
            $(".box-player-page").show();
        }
    });
    */
    $('#vsModal').on('hide.bs.modal', function () {
        vs.players.length = 0;
        $("#listPlayer").find("input:checked").prop("checked", false);
    });

    $(".nav-page").on("click", "a", function () {
        var page = ~~$(this).attr("data-page") || 1;
        $(".nav-page").find(".active").removeClass("active");
        $(this).parent().addClass("active");
        playerModel.curPage = page;

        var data = playerModel.playersPage.slice((playerModel.curPage - 1) * playerModel.pageCount, playerModel.curPage * playerModel.pageCount);
        playersView.renderPlayer(data);
        playersView.renderPage();
    });
    
    // 绑定位置筛选事件
    $(document.body).on("click", ".list-union-pos > li", function () {
        $(this).parent().find(".active").removeClass("active");
        $(this).addClass("active");
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

    $("#boxPlayerVs").on("change", ".box-level-change>select", function () {
        var id = ~~$(this).attr("data-playerid");
        var type = $(this).attr("data-type");
        var xx = vs.players[id];
        var val = ~~$(this).val();
        var curQh = 1;
        var curLv = 1;
        var diff = 0;

        if (xx.qh !== undefined) {
            curQh = xx.qh;
        }
        if (xx.lv !== undefined) {
            curLv = xx.lv;
        }
        if (type === "qh") {
            diff = getQhDiff(val) - getQhDiff(curQh);
            xx.qh = val;
        } else {
            diff = val - curLv;
            xx.lv = val;
        }
        for (var i = 0, len = vs.people.length; i < len ;i++) {
            xx[vs.people[i].item] = ~~xx[vs.people[i].item] + diff;
        }
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