"use strict";
/**
* 隐藏属性数组
*/
var HdProp = [
	"———————",
	"与裁判争论",
	"避免使用逆足",
	"抢断高手",
	"45度传中高手",
	"天赋",
	"门将单刀防守",
	"易受伤",
	"领导力",
	"精准长传",
	"远射",
	"远距离手抛球",
	"稳固可靠",
	"外脚背射门",
	"进攻组织者",
	"强力头球",
	"拳击球",
	"独狼",
	"团队球员",
	"盘球大师",
	"反越位",
	"参与角球",
	"精准直塞",
	"擅扑点球",
	"大力任意球",
	"超远界外球",
	"远距离界外球",
	"大力界外球",
	"精准射门",
	"高速带球"
];

/**
* 联赛数据
*/
var Matches = [
	{
		"id": "",
		"name": "",
		"team": []
	}, {	
		"id": 1,
		"name": "西班牙足球甲级联赛",
		"team": [
			{
				"id": 1,
				"name": "皇家马德里"
			}, {
				"id": 2,
				"name": "巴塞罗那"
			}, {
				"id": 3,
				"name": "马德里竞技"
			}, {
				"id": 4,
				"name": "塞维利亚"
			}, {
				"id": 5,
				"name": "巴伦西亚"
			}, {
				"id": 6,
				"name": "比利亚雷亚尔"
			}, {
				"id": 7,
				"name": "马拉加"
			}, {
				"id": 8,
				"name": "塞尔塔"
			}, {
				"id": 9,
				"name": "埃瓦尔"
			}, {
				"id": 10,
				"name": "毕尔巴鄂竞技"
			}, {
				"id": 11,
				"name": "巴列卡诺"
			}, {
				"id": 12,
				"name": "赫塔菲"
			}, {
				"id": 13,
				"name": "皇家社会"
			}, {
				"id": 14,
				"name": "莱万特"
			}, {
				"id": 15,
				"name": "格拉纳达"
			}, {
				"id": 16,
				"name": "阿尔梅里亚"
			}, {
				"id": 17,
				"name": "科尔多瓦"
			}, {
				"id": 18,
				"name": "阿尔梅里亚"
			}, {
				"id": 19,
				"name": "拉科鲁里亚"
			}, {
				"id": 20,
				"name": "艾尔切"
			}			
		]
	}, {
		"id": 2,
		"name": "德国足球甲级联赛",
		"team": [
			{	
				"id": 1,
				"name": "拜仁慕尼黑"
			}, {
				"id": 2,
				"name": "沃尔夫斯堡"
			}, {
				"id": 3,
				"name": "奥格斯堡"
			}, {
				"id": 4,
				"name": "勒沃库森"
			}, {
				"id": 5,
				"name": "沙尔克04"
			}, {
				"id": 6,
				"name": "门兴格拉德巴赫"
			}, {
				"id": 7,
				"name": "法兰克福"
			}, {
				"id": 8,
				"name": "霍芬海姆"
			}, {
				"id": 9,
				"name": "汉诺威96"
			}, {
				"id": 10,
				"name": "帕德博恩"
			}, {
				"id": 11,
				"name": "美因茨"
			}, {
				"id": 12,
				"name": "科隆"
			}, {
				"id": 13,
				"name": "汉堡"
			}, {
				"id": 14,
				"name": "多特蒙德"
			}, {
				"id": 15,
				"name": "柏林赫塔"
			}, {
				"id": 16,
				"name": "弗莱堡"
			}, {
				"id": 17,
				"name": "云达不莱梅"
			}, {
				"id": 18,
				"name": "斯图加特"
			}
		]
	}, {
		"id": 3,
		"name": "英格兰足球超级联赛",
		"team": [
			{
				"id": 1,
				"name": "切尔西"
			}, {
				"id": 2,
				"name": "曼特斯特城"
			}, {
				"id": 3,
				"name": "曼特斯特联"
			}, {
				"id": 4,
				"name": "西汉姆联"
			}, {
				"id": 5,
				"name": "南安普顿"
			}, {
				"id": 6,
				"name": "阿森纳"
			}, {
				"id": 7,
				"name": "纽卡斯尔联"
			}, {
				"id": 8,
				"name": "斯旺西"
			}, {
				"id": 9,
				"name": "利物浦"
			}, {
				"id": 10,
				"name": "托特纳姆热刺"
			}, {
				"id": 11,
				"name": "阿斯顿维拉"
			}, {
				"id": 12,
				"name": "埃佛顿"
			}, {
				"id": 13,
				"name": "斯托克城"
			}, {
				"id": 14,
				"name": "桑德兰"
			}, {
				"id": 15,
				"name": "水晶宫"
			}, {
				"id": 16,
				"name": "西布罗姆维奇"
			}, {
				"id": 17,
				"name": "女王公园巡游者"
			}, {
				"id": 18,
				"name": "赫尔城"
			}, {
				"id": 19,
				"name": "伯恩利"
			}, {
				"id": 20,
				"name": "莱切斯特城"
			}
		]
	}, {
		"id": 4,
		"name": "意大利足球甲级联赛",
		"team": [
			{
				"id": 1,
				"name": "尤文图斯"
			}, {
				"id": 2,
				"name": "罗马"
			}, {
				"id": 3,
				"name": "热那亚"
			}, {
				"id": 4,
				"name": "桑普多利亚"
			}, {
				"id": 5,
				"name": "那不勒斯"
			}, {
				"id": 6,
				"name": "拉齐奥"
			}, {
				"id": 7,
				"name": "AC米兰"
			}, {
				"id": 8,
				"name": "乌迪内斯"
			}, {
				"id": 9,
				"name": "佛罗伦萨"
			}, {
				"id": 10,
				"name": "森索罗"
			}, {
				"id": 11,
				"name": "巴勒莫"
			}, {
				"id": 12,
				"name": "国际米兰"
			}, {
				"id": 13,
				"name": "恩波利"
			}, {
				"id": 14,
				"name": "亚特兰大"
			}, {
				"id": 15,
				"name": "维罗纳"
			}, {
				"id": 16,
				"name": "切沃"
			}, {
				"id": 17,
				"name": "都灵"
			}, {
				"id": 18,
				"name": "卡利亚里"
			}, {
				"id": 19,
				"name": "切塞纳"
			}, {
				"id": 20,
				"name": "帕尔马"
			}
		]
	}, {
		"id": 5,
		"name": "法国足球甲级联赛",
		"team": [
			{
				"id": 1,
				"name": "巴黎圣日耳曼"
			}, {
				"id": 2,
				"name": "马赛 "
			}, {
				"id": 3,
				"name": "里昂"
			}, {
				"id": 4,
				"name": "圣埃蒂安"
			}, {
				"id": 5,
				"name": "波尔多"
			}, {
				"id": 6,
				"name": "雷恩"
			}, {
				"id": 7,
				"name": "摩纳哥"
			}, {
				"id": 8,
				"name": "蒙彼利埃"
			}, {
				"id": 9,
				"name": "南特"
			}, {
				"id": 10,
				"name": "兰斯"
			}, {
				"id": 11,
				"name": "尼斯"
			}, {
				"id": 12,
				"name": "图卢兹"
			}, {
				"id": 13,
				"name": "梅斯"
			}, {
				"id": 14,
				"name": "伊维恩"
			}, {
				"id": 15,
				"name": "里尔"
			}, {
				"id": 16,
				"name": "甘冈"
			}, {
				"id": 17,
				"name": "洛里昂"
			}, {
				"id": 18,
				"name": "朗斯"
			}, {
				"id": 19,
				"name": "巴斯蒂亚"
			}, {
				"id": 20,
				"name": "卡昂"
			}
		]
	}, {
		"id": 6,
		"name": "荷兰足球甲级联赛",
		"team": [
			{
				"id": 1,
				"name": "埃因霍恩"
			}, {
				"id": 2,
				"name": "阿贾克斯"
			}, {
				"id": 3,
				"name": "费耶诺德"
			}, {
				"id": 4,
				"name": "艾尔克马尔"
			}, {
				"id": 5,
				"name": "泽沃勒"
			}, {
				"id": 6,
				"name": "特温特"
			}, {
				"id": 7,
				"name": "格罗宁根"
			}, {
				"id": 8,
				"name": "坎布尔"
			}, {
				"id": 9,
				"name": "威廉二世"
			}, {
				"id": 10,
				"name": "乌得勒支"
			}, {
				"id": 11,
				"name": "维迪斯"
			}, {
				"id": 12,
				"name": "海伦芬"
			}, {
				"id": 13,
				"name": "赫拉克莱斯"
			}, {
				"id": 14,
				"name": "前进之鹰"
			}, {
				"id": 15,
				"name": "SBV精英"
			}, {
				"id": 16,
				"name": "海牙"
			}, {
				"id": 17,
				"name": "布雷达"
			}, {
				"id": 18,
				"name": "多德勒支"
			}
		]
	}, {
		"id": 7,
		"name": "比利时足球甲级联赛",
		"team": [
			{
				"id": 1,
				"name": "布鲁日"
			}, {
				"id": 2,
				"name": "根特"
			}, {
				"id": 3,
				"name": "科特赖克"
			}, {
				"id": 4,
				"name": "安德莱赫特"
			}, {
				"id": 5,
				"name": "洛克伦"
			}, {
				"id": 6,
				"name": "亨克"
			}, {
				"id": 7,
				"name": "标准列日"
			}, {
				"id": 8,
				"name": "沙勒罗瓦"
			}, {
				"id": 9,
				"name": "奥斯坦德"
			}, {
				"id": 10,
				"name": "匹卢维兹"
			}, {
				"id": 11,
				"name": "梅赫伦"
			}, {
				"id": 12,
				"name": "韦斯特鲁"
			}, {
				"id": 13,
				"name": "华斯兰德"
			}, {
				"id": 14,
				"name": "威尔郡"
			}, {
				"id": 15,
				"name": "色格拉布鲁日"
			}, {
				"id": 16,
				"name": "利尔斯"
			}
		]
	}, {
		"id": 8,
		"name": "丹麦足球超级联赛",
		"team": [
			{
				"id": 1,
				"name": "米迪兰特"
			}, {
				"id": 2,
				"name": "哥本哈根"
			}, {
				"id": 3,
				"name": "兰德斯"
			}, {
				"id": 4,
				"name": "布隆德比"
			}, {
				"id": 5,
				"name": "洛斯查兰特"
			}, {
				"id": 6,
				"name": "奥尔堡"
			}, {
				"id": 7,
				"name": "霍布罗"
			}, {
				"id": 8,
				"name": "埃斯比约"
			}, {
				"id": 9,
				"name": "桑德捷斯基"
			}, {
				"id": 10,
				"name": "欧登塞"
			}, {
				"id": 11,
				"name": "西希兰"
			}, {
				"id": 12,
				"name": "锡尔克堡"
			}
		]
	}, {
		"id": 9,
		"name": "英格兰足球冠军联赛",
		"team": [
			{
				"id": 1,
				"name": "伯恩茅斯"
			}, {
				"id": 2,
				"name": "米德尔斯堡"
			}, {
				"id": 3,
				"name": "德比郡"
			}, {
				"id": 4,
				"name": "伊普斯维奇"
			}, {
				"id": 5,
				"name": "沃特福德"
			}, {
				"id": 6,
				"name": "诺维奇"
			}, {
				"id": 7,
				"name": "布莱克本"
			}, {
				"id": 8,
				"name": "诺丁汉森林"
			}, {
				"id": 9,
				"name": "查尔顿"
			}, {
				"id": 10,
				"name": "布伦特福德"
			}, {
				"id": 11,
				"name": "卡迪夫城"
			}, {
				"id": 12,
				"name": "狼队"
			}, {
				"id": 13,
				"name": "谢周三"
			}, {
				"id": 14,
				"name": "富勒姆"
			}, {
				"id": 15,
				"name": "伯明翰"
			}, {
				"id": 16,
				"name": "雷丁"
			}, {
				"id": 17,
				"name": "哈德斯菲尔德"
			}, {
				"id": 18,
				"name": "博尔顿"
			}, {
				"id": 19,
				"name": "利兹联"
			}, {
				"id": 20,
				"name": "米尔沃尔"
			}, {
				"id": 21,
				"name": "罗瑟汉姆"
			}, {
				"id": 22,
				"name": "布莱顿"
			}, {
				"id": 23,
				"name": "维冈竞技"
			}, {
				"id": 24,
				"name": "布莱克浦"
			}
		]
	}, {
		"id": 10,
		"name": "法国足球乙级联赛",
		"team": [
			{
				"id": 1,
				"name": "第戎"
			}, {
				"id": 2,
				"name": "布雷斯特"
			}, {
				"id": 3,
				"name": "特鲁瓦"
			}, {
				"id": 4,
				"name": "索肖"
			}, {
				"id": 5,
				"name": "南锡"
			}, {
				"id": 6,
				"name": "GFC阿雅克肖"
			}, {
				"id": 7,
				"name": "安格斯"
			}, {
				"id": 8,
				"name": "欧塞尔"
			}, {
				"id": 9,
				"name": "瓦朗谢纳"
			}, {
				"id": 10,
				"name": "勒阿佛尔"
			}, {
				"id": 11,
				"name": "拉瓦勒"
			}, {
				"id": 12,
				"name": "阿雅克肖"
			}, {
				"id": 13,
				"name": "基迪尔"
			}, {
				"id": 14,
				"name": "尼奥特"
			}, {
				"id": 15,
				"name": "尼姆"
			}, {
				"id": 16,
				"name": "奥兰斯"
			}, {
				"id": 17,
				"name": "克莱蒙"
			}, {
				"id": 18,
				"name": "图尔"
			}, {
				"id": 19,
				"name": "沙托鲁"
			}, {
				"id": 20,
				"name": "阿尔勒"
			}
		]
	}, {
		"id": 11,
		"name": "德国足球乙级联赛",
		"team": [
			{
				"id": 1,
				"name": "英格斯塔"
			}, {
				"id": 2,
				"name": "卡尔斯鲁厄"
			}, {
				"id": 3,
				"name": "凯泽斯劳滕"
			}, {
				"id": 4,
				"name": "杜塞尔多夫"
			}, {
				"id": 5,
				"name": "RB莱比锡"
			}, {
				"id": 6,
				"name": "布伦斯维克"
			}, {
				"id": 7,
				"name": "达姆斯达特"
			}, {
				"id": 8,
				"name": "海登海默"
			}, {
				"id": 9,
				"name": "波鸿"
			}, {
				"id": 10,
				"name": "菲尔特"
			}, {
				"id": 11,
				"name": "柏林联合"
			}, {
				"id": 12,
				"name": "桑德豪森"
			}, {
				"id": 13,
				"name": "纽伦堡"
			}, {
				"id": 14,
				"name": "FSV法兰克福"
			}, {
				"id": 15,
				"name": "亚伦"
			}, {
				"id": 16,
				"name": "慕尼黑1860"
			}, {
				"id": 17,
				"name": "奥厄"
			}, {
				"id": 18,
				"name": "圣保利"
			}
		]
	}, {
		"id": 12,
		"name": "意大利足球乙级联赛",
		"team": [
			{
				"id": 1,
				"name": "卡普里"
			}, {
				"id": 2,
				"name": "佛罗西诺尼"
			}, {
				"id": 3,
				"name": "利沃诺"
			}, {
				"id": 4,
				"name": "斯佩齐亚"
			}, {
				"id": 5,
				"name": "兰西安奴"
			}, {
				"id": 6,
				"name": "博洛尼亚"
			}, {
				"id": 7,
				"name": "特腊帕尼"
			}, {
				"id": 8,
				"name": "阿维利诺"
			}, {
				"id": 9,
				"name": "佩鲁贾"
			}, {
				"id": 10,
				"name": "韦尔切利"
			}, {
				"id": 11,
				"name": "维琴察"
			}, {
				"id": 12,
				"name": "摩德纳"
			}, {
				"id": 13,
				"name": "特拉纳"
			}, {
				"id": 14,
				"name": "巴里"
			}, {
				"id": 15,
				"name": "佩斯卡拉"
			}, {
				"id": 16,
				"name": "卡尼吉亚"
			}, {
				"id": 17,
				"name": "德比尔图斯"
			}, {
				"id": 18,
				"name": "布雷西亚"
			}, {
				"id": 19,
				"name": "瓦雷斯"
			}, {
				"id": 20,
				"name": "克罗托内"
			}, {
				"id": 21,
				"name": "希塔德拉"
			}, {
				"id": 22,
				"name": "拉蒂那"
			}
		]
	}, {
		"id": 13,
		"name": "美国职业足球大联盟",
		"team": [
			{
				"id": 1,
				"name": "西雅图海湾人"
			}, {
				"id": 2,
				"name": "洛杉矶银河"
			}, {
				"id": 3,
				"name": "华盛顿联"
			}, {
				"id": 4,
				"name": "皇家盐湖城"
			}, {
				"id": 5,
				"name": "新英格兰革命"
			}, {
				"id": 6,
				"name": "达拉斯FC"
			}, {
				"id": 7,
				"name": "哥伦布机员"
			}, {
				"id": 8,
				"name": "纽约红牛"
			}, {
				"id": 9,
				"name": "温哥华白帽"
			}, {
				"id": 10,
				"name": "波特兰伐木者"
			}, {
				"id": 11,
				"name": "肯萨斯竞技"
			}, {
				"id": 12,
				"name": "费城联合"
			}, {
				"id": 13,
				"name": "多伦多FC"
			}, {
				"id": 14,
				"name": "休斯顿迪那抹"
			}, {
				"id": 15,
				"name": "芝加哥火焰"
			}, {
				"id": 16,
				"name": "美国芝华士"
			}, {
				"id": 17,
				"name": "科罗拉多急流"
			}, {
				"id": 18,
				"name": "圣何塞地震"
			}, {
				"id": 19,
				"name": "蒙特利尔冲击"
			}
		]
	}, {
		"id": 14,
		"name": "挪威足球超级联赛",
		"team": [
			{
				"id": 1,
				"name": "莫尔德"
			}, {
				"id": 2,
				"name": "罗森博格"
			}, {
				"id": 3,
				"name": "奥德格伦兰"
			}, {
				"id": 4,
				"name": "斯托姆加斯特"
			}, {
				"id": 5,
				"name": "利勒斯特罗姆"
			}, {
				"id": 6,
				"name": "瓦勒伦加"
			}, {
				"id": 7,
				"name": "奥勒松"
			}, {
				"id": 8,
				"name": "萨普斯堡"
			}, {
				"id": 9,
				"name": "斯塔贝克"
			}, {
				"id": 10,
				"name": "维京"
			}, {
				"id": 11,
				"name": "海于格松"
			}, {
				"id": 12,
				"name": "斯达"
			}, {
				"id": 13,
				"name": "博多格林特"
			}, {
				"id": 14,
				"name": "兰布"
			}, {
				"id": 15,
				"name": "松达尔"
			}, {
				"id": 16,
				"name": "桑德尼斯"
			}
		]
	}, {
		"id": 15,
		"name": "苏格兰足球超级联赛",
		"team": [
			{
				"id": 1,
				"name": "凯尔特人"
			}, {
				"id": 2,
				"name": "因弗内斯"
			}, {
				"id": 3,
				"name": "邓迪联队"
			}, {
				"id": 4,
				"name": "阿伯丁"
			}, {
				"id": 5,
				"name": "哈密尔顿"
			}, {
				"id": 6,
				"name": "哈约翰斯通"
			}, {
				"id": 7,
				"name": "基马诺克"
			}, {
				"id": 8,
				"name": "邓迪FC"
			}, {
				"id": 9,
				"name": "帕尔蒂克"
			}, {
				"id": 10,
				"name": "马瑟韦尔"
			}, {
				"id": 11,
				"name": "罗斯郡"
			}, {
				"id": 12,
				"name": "圣米伦"
			}
		]
	}, {
		"id": 16,
		"name": "西班牙足球乙级联赛",
		"team": [
			{
				"id": 1,
				"name": "拉斯帕尔马斯"
			}, {
				"id": 2,
				"name": "希洪竞技"
			}, {
				"id": 3,
				"name": "赫罗纳"
			}, {
				"id": 4,
				"name": "皇家贝蒂斯"
			}, {
				"id": 5,
				"name": "瓦拉多利德"
			}, {
				"id": 6,
				"name": "邦弗拉甸拿"
			}, {
				"id": 7,
				"name": "艾科坎"
			}, {
				"id": 8,
				"name": "萨拉戈萨"
			}, {
				"id": 9,
				"name": "米兰迪斯"
			}, {
				"id": 10,
				"name": "鲁曼西亚"
			}, {
				"id": 11,
				"name": "卢高"
			}, {
				"id": 12,
				"name": "巴塞罗那B队"
			}, {
				"id": 13,
				"name": "维尔瓦"
			}, {
				"id": 14,
				"name": "阿拉维斯"
			}, {
				"id": 15,
				"name": "马洛卡"
			}, {
				"id": 16,
				"name": "特内里费"
			}, {
				"id": 17,
				"name": "桑坦德竞技"
			}, {
				"id": 18,
				"name": "雷加利斯"
			}, {
				"id": 19,
				"name": "奥萨苏纳"
			}, {
				"id": 20,
				"name": "沙巴度尔"
			}, {
				"id": 21,
				"name": "阿尔巴切特"
			}, {
				"id": 22,
				"name": "利亚格斯特拉"
			}
		]
	}, {
		"id": 17,
		"name": "瑞典足球超级联赛",
		"team": [
			{
				"id": 1,
				"name": "马尔默"
			}, {
				"id": 2,
				"name": "哥德堡"
			}, {
				"id": 3,
				"name": "索尔纳"
			}, {
				"id": 4,
				"name": "埃尔夫斯堡"
			}, {
				"id": 5,
				"name": "赫根"
			}, {
				"id": 6,
				"name": "奥雷布洛"
			}, {
				"id": 7,
				"name": "佐加顿斯"
			}, {
				"id": 8,
				"name": "阿特维达堡"
			}, {
				"id": 9,
				"name": "赫尔辛堡"
			}, {
				"id": 10,
				"name": "哈尔姆斯达斯"
			}, {
				"id": 11,
				"name": "卡尔马"
			}, {
				"id": 12,
				"name": "诺科平"
			}, {
				"id": 13,
				"name": "法尔肯堡"
			}, {
				"id": 14,
				"name": "耶夫勒"
			}, {
				"id": 15,
				"name": "米亚尔比"
			}, {
				"id": 16,
				"name": "布洛马波卡纳"
			}
		]
	}, {
		"id": 18,
		"name": "英格兰足球甲级联赛",
		"team": [
			{
				"id": 1,
				"name": "布里斯托城"
			}, {
				"id": 2,
				"name": "斯文登"
			}, {
				"id": 3,
				"name": "米尔顿凯恩斯"
			}, {
				"id": 4,
				"name": "普雷斯顿"
			}, {
				"id": 5,
				"name": "谢菲尔德联队"
			}, {
				"id": 6,
				"name": "罗奇代尔"
			}, {
				"id": 7,
				"name": "诺茨郡"
			}, {
				"id": 8,
				"name": "奥德汉姆"
			}, {
				"id": 9,
				"name": "彼得堡联"
			}, {
				"id": 10,
				"name": "布拉德福德"
			}, {
				"id": 11,
				"name": "弗利特伍德"
			}, {
				"id": 12,
				"name": "沃尔索尔"
			}, {
				"id": 13,
				"name": "切斯特菲尔德"
			}, {
				"id": 14,
				"name": "考文垂"
			}, {
				"id": 15,
				"name": "巴恩斯利"
			}, {
				"id": 16,
				"name": "维尔港"
			}, {
				"id": 17,
				"name": "唐卡斯特"
			}, {
				"id": 18,
				"name": "吉林汉姆"
			}, {
				"id": 19,
				"name": "斯坎索普"
			}, {
				"id": 20,
				"name": "克劳利"
			}, {
				"id": 21,
				"name": "耶奥维尔"
			}, {
				"id": 22,
				"name": "莱顿东方"
			}, {
				"id": 23,
				"name": "科切斯特联"
			}, {
				"id": 24,
				"name": "克鲁"
			}
		]
	}, {
		"id": 19,
		"name": "阿根廷联赛",
		"team": [
			{
				"id": 1,
				"name": "竞技俱乐部"
			}, {
				"id": 2,
				"name": "河床"
			}, {
				"id": 3,
				"name": "拉努斯"
			}, {
				"id": 4,
				"name": "阿根廷独立"
			}, {
				"id": 5,
				"name": "博卡青年"
			}, {
				"id": 6,
				"name": "拉普拉塔大学生"
			}, {
				"id": 7,
				"name": "泰格雷"
			}, {
				"id": 8,
				"name": "圣洛伦索"
			}, {
				"id": 9,
				"name": "萨兰迪兵工厂"
			}, {
				"id": 10,
				"name": "贝尔格拉诺"
			}, {
				"id": 11,
				"name": "萨斯菲尔德"
			}, {
				"id": 12,
				"name": "纽维尔老男孩"
			}, {
				"id": 13,
				"name": "拉斐拉竞技"
			}, {
				"id": 14,
				"name": "拉普拉塔体操"
			}, {
				"id": 15,
				"name": "戈多伊克鲁斯"
			}, {
				"id": 16,
				"name": "罗萨里奥中央"
			}, {
				"id": 17,
				"name": "班菲尔德"
			}, {
				"id": 18,
				"name": "防卫者"
			}, {
				"id": 19,
				"name": "奥林匹奥"
			}, {
				"id": 20,
				"name": "基尔梅斯"
			}
		]
	}, {
		"id": 20,
		"name": "葡萄牙足球联赛",
		"team": [
			{
				"id": 1,
				"name": "本菲卡"
			}, {
				"id": 2,
				"name": "波尔图"
			}, {
				"id": 3,
				"name": "吉马雷斯"
			}, {
				"id": 4,
				"name": "布拉加"
			}, {
				"id": 5,
				"name": "费雷拉"
			}, {
				"id": 6,
				"name": "比兰尼塞斯"
			}, {
				"id": 7,
				"name": "里奥阿维"
			}, {
				"id": 8,
				"name": "摩里伦斯"
			}, {
				"id": 9,
				"name": "马里迪莫"
			}, {
				"id": 10,
				"name": "埃斯托里尔"
			}, {
				"id": 11,
				"name": "博阿维斯塔"
			}, {
				"id": 12,
				"name": "葡萄牙国民"
			}, {
				"id": 13,
				"name": "塞图巴尔"
			}, {
				"id": 14,
				"name": "佩纳菲尔"
			}, {
				"id": 15,
				"name": "科英布拉大学"
			}, {
				"id": 16,
				"name": "艾路卡"
			}, {
				"id": 17,
				"name": "吉维森特"
			}
		]
	}, {
		"id": 21,
		"name": "俄罗斯足球超级联赛",
		"team": [
			{
				"id": 1,
				"name": "圣彼得堡泽尼特"
			}, {
				"id": 2,
				"name": "莫斯科中央陆军"
			}, {
				"id": 3,
				"name": "莫斯科迪纳摩"
			}, {
				"id": 4,
				"name": "克拉斯诺达尔"
			}, {
				"id": 5,
				"name": "莫斯科火车头"
			}, {
				"id": 6,
				"name": "莫斯科斯巴达"
			}, {
				"id": 7,
				"name": "喀山鲁宾"
			}, {
				"id": 8,
				"name": "库班"
			}, {
				"id": 9,
				"name": "格罗兹尼特里克"
			}, {
				"id": 10,
				"name": "萨兰斯克莫尔多瓦"
			}, {
				"id": 11,
				"name": "乌法"
			}, {
				"id": 12,
				"name": "莫斯科鱼雷"
			}, {
				"id": 13,
				"name": "乌拉尔"
			}, {
				"id": 14,
				"name": "阿姆卡尔"
			}, {
				"id": 15,
				"name": "图拉"
			}, {
				"id": 16,
				"name": "罗斯托夫"
			}
		]
	}, {
		"id": 22,
		"name": "瑞士足球超级联赛",
		"team": [
			{
				"id": 1,
				"name": "巴塞尔"
			}, {
				"id": 2,
				"name": "苏黎世"
			}, {
				"id": 3,
				"name": "年青人"
			}, {
				"id": 4,
				"name": "圣加仑"
			}, {
				"id": 5,
				"name": "图恩"
			}, {
				"id": 6,
				"name": "草蜢"
			}, {
				"id": 7,
				"name": "瓦杜兹"
			}, {
				"id": 8,
				"name": "阿劳"
			}, {
				"id": 9,
				"name": "锡昂"
			}, {
				"id": 10,
				"name": "卢森"
			}
		]
	}, {
		"id": 23,
		"name": "沙特阿拉伯足球联赛",
		"team": [
			{
				"id": 1,
				"name": "艾纳斯"
			}, {
				"id": 2,
				"name": "艾希利"
			}, {
				"id": 3,
				"name": "阿尔沙巴布"
			}, {
				"id": 4,
				"name": "希拉尔"
			}, {
				"id": 5,
				"name": "伊蒂哈德"
			}, {
				"id": 6,
				"name": "费萨里哈曼"
			}, {
				"id": 7,
				"name": "哈泽尔"
			}, {
				"id": 8,
				"name": "纳积兰"
			}, {
				"id": 9,
				"name": "塔亚文"
			}, {
				"id": 10,
				"name": "阿尔菲斯"
			}, {
				"id": 11,
				"name": "卡利杰"
			}, {
				"id": 12,
				"name": "欧鲁巴赫"
			}, {
				"id": 13,
				"name": "斯霍拉"
			}, {
				"id": 14,
				"name": "拉德"
			}
		]
	}, {
		"id": 24,
		"name": "澳大利亚职业足球联赛",
		"team": [
			{
				"id": 1,
				"name": "珀斯光荣"
			}, {
				"id": 2,
				"name": "墨尔本胜利"
			}, {
				"id": 3,
				"name": "阿德莱德联"
			}, {
				"id": 4,
				"name": "悉尼FC"
			}, {
				"id": 5,
				"name": "惠灵顿凤凰"
			}, {
				"id": 6,
				"name": "昆士兰狮吼"
			}, {
				"id": 7,
				"name": "墨尔本城"
			}, {
				"id": 8,
				"name": "中部海岸海员"
			}, {
				"id": 9,
				"name": "新城堡联队"
			}, {
				"id": 10,
				"name": "西部悉尼"
			}
		]
	}, {
		"id": 25,
		"name": "土耳其足球超级联赛",
		"team": [
			{
				"id": 1,
				"name": "贝西克塔斯"
			}, {
				"id": 2,
				"name": "加拉塔萨雷"
			}, {
				"id": 3,
				"name": "伊斯坦堡普野社希尔"
			}, {
				"id": 4,
				"name": "特拉布宗体育"
			}, {
				"id": 5,
				"name": "费内巴切"
			}, {
				"id": 6,
				"name": "梅尔辛"
			}, {
				"id": 7,
				"name": "布尔萨体育"
			}, {
				"id": 8,
				"name": "卡斯帕萨"
			}, {
				"id": 9,
				"name": "根克勒比利吉"
			}, {
				"id": 10,
				"name": "阿卡沙"
			}, {
				"id": 11,
				"name": "科尼亚体育"
			}, {
				"id": 12,
				"name": "加济安泰普体育"
			}, {
				"id": 13,
				"name": "阿辛耶斯堡"
			}, {
				"id": 14,
				"name": "卡拉比克体育"
			}, {
				"id": 15,
				"name": "埃斯基谢希尔体育"
			}, {
				"id": 16,
				"name": "锡瓦斯体育"
			}, {
				"id": 17,
				"name": "里泽斯堡"
			}, {
				"id": 18,
				"name": "巴里科斯士邦"
			}
		]
	}, {
		"id": 26,
		"name": "国家队",
		"team": [
			{
				"id": 1,
				"name": "乌拉圭"
			}, {
				"id": 2,
				"name": "保加利亚"
			}, {
				"id": 3,
				"name": "匈牙利"
			}, {
				"id": 4,
				"name": "南非"
			}, {
				"id": 5,
				"name": "印度"
			}, {
				"id": 6,
				"name": "厄瓜多尔"
			}, {
				"id": 7,
				"name": "喀麦隆"
			}, {
				"id": 8,
				"name": "埃及"
			}, {
				"id": 9,
				"name": "奥地利"
			}, {
				"id": 10,
				"name": "委内瑞拉"
			}, {
				"id": 11,
				"name": "威尔士"
			}, {
				"id": 12,
				"name": "巴拉圭"
			}, {
				"id": 13,
				"name": "希腊"
			}, {
				"id": 14,
				"name": "捷克"
			}, {
				"id": 15,
				"name": "斯洛文尼亚"
			}, {
				"id": 16,
				"name": "新西兰"
			}, {
				"id": 17,
				"name": "波兰"
			}, {
				"id": 18,
				"name": "澳大利亚"
			}, {
				"id": 19,
				"name": "玻利维亚"
			}, {
				"id": 20,
				"name": "瑞典"
			}, {
				"id": 21,
				"name": "科特迪瓦"
			}, {
				"id": 22,
				"name": "秘鲁"
			}, {
				"id": 23,
				"name": "罗马利亚"
			}, {
				"id": 24,
				"name": "美国"
			}, {
				"id": 25,
				"name": "芬兰"
			}, {
				"id": 26,
				"name": "荷兰"
			}, {
				"id": 27,
				"name": "葡萄牙"
			}, {
				"id": 28,
				"name": "韩国"
			}
		]
	}, {
		"id": 27,
		"name": "英格兰足球乙级联赛",
		"team": [
		]
	}, {
		"id": 28,
		"name": "波兰足球联赛",
		"team": []
	}, {
		"id": 29,
		"name": "奥地利足球联赛",
		"team": []
	}, {
		"id": 30,
		"name": "韩国K联赛",
		"team": []
	}, {
		"id": 31,
		"name": "其他联赛",
		"team": []
	}, {
		"id": 32,
		"name": "墨西哥联赛",
		"team": []
	}
];

/**
* 国家数据
*/
var countries = {
	"1": "阿尔巴尼亚",
	"2": "安道尔",
	"3": "亚美尼亚",
	"4": "奥地利",
	"5": "阿塞拜疆",
	"6": "白俄罗斯",
	"7": "比利时",
	"8": "波黑",
	"9": "保加利亚",
	"10": "克罗地亚",
	"11": "塞浦路斯",
	"12": "捷克",
	"13": "丹麦",
	"14": "英格兰",
	"15": "黑山",
	"16": "",
	"17": "芬兰",
	"18": "法国",
	"19": "马其顿",
	"20": "格鲁吉亚",
	"21": "德国",
	"22": "希腊",
	"23": "匈牙利",
	"24": "冰岛",
	"25": "爱尔兰",
	"26": "以色列",
	"27": "意大利",
	"28": "拉脱维亚",
	"29": "列支",
	"30": "立陶宛",
	"31": "卢森堡",
	"32": "马耳他",
	"33": "摩尔多瓦",
	"34": "荷兰",
	"35": "北爱尔兰",
	"36": "挪威",
	"37": "波兰",
	"38": "葡萄牙",
	"39": "罗马尼亚",
	"40": "俄罗斯",
	"41": "圣马力诺",
	"42": "苏格兰",
	"43": "斯洛伐克",
	"44": "斯洛文尼亚",
	"45": "西班牙",
	"46": "瑞典",
	"47": "瑞士",
	"48": "土耳其",
	"49": "乌克兰",
	"50": "威尔士",
	"51": "塞尔维亚",
	"52": "阿根廷",
	"53": "玻利维亚",
	"54": "巴西",
	"55": "智利",
	"56": "哥伦比亚",
	"57": "厄瓜多尔",
	"58": "巴拉圭",
	"59": "秘鲁",
	"60": "乌拉圭",
	"72": "哥斯达尼加",
	"95": "美国",
	"96": "",
	"97": "阿尔及利亚",
	"98": "安哥拉",
	"99": "贝宁",
	"100": "博茨瓦纳",
	"101": "布基纳法索",
	"102": "布隆迪",
	"103": "喀麦隆",
	"104": "佛得角",
	"105": "中非",
	"106": "乍得",
	"107": "刚果(金)",
	"108": "科特迪瓦",
	"109": "吉布提",
	"110": "刚果(民)",
	"111": "埃及",
	"112": "赤道几内亚",
	"113": "厄立特里亚",
	"114": "埃塞俄比亚",
	"115": "加蓬",
	"116": "冈比亚",
	"117": "加纳",
	"118": "几内亚",
	"119": "几内亚比绍",
	"120": "肯尼亚",
	"121": "莱索托",
	"122": "利比里亚",
	"123": "",
	"124": "马达加斯加",
	"125": "马拉维",
	"126": "马里",
	"127": "毛里塔尼亚",
	"128": "毛里求斯",
	"129": "摩洛哥",
	"130": "莫桑比克",
	"131": "纳米比亚",
	"132": "",
	"133": "尼日利亚",
	"134": "卢旺达",
	"135": "",
	"136": "塞内加尔",
	"137": "塞舌尔",
	"138": "塞拉利昂",
	"139": "索马里",
	"140": "南非",
	"141": "苏丹",
	"142": "柬埔寨",
	"143": "坦桑尼亚",
	"144": "多哥",
	"145": "突尼斯",
	"146": "乌干达",
	"147": "赞比亚",
	"148": "津巴布韦",
	"149": "阿富汗",
	"150": "巴林",
	"151": "孟加拉国",
	"152": "不丹",
	"153": "文莱",
	"155": "中国",
	"159": "印度",
	"160": "印尼",
	"162": "伊拉克",
	"161": "伊朗",
	"163": "日本",
	"164": "约旦",
	"165": "哈萨克斯坦",
	"166": "朝鲜",
	"167": "韩国",
	"168": "科威特",
	"169": "吉尔吉斯斯坦",
	"170": "老挝",
	"171": "黎巴嫩",
	"173": "马来西亚",
	"174": "马尔代夫",
	"175": "蒙古",
	"176": "缅甸",
	"177": "尼泊尔",
	"178": "阿曼",
	"179": "巴基斯坦",
	"180": "巴勒斯坦",
	"181": "菲律宾",
	"182": "卡塔尔",
	"183": "沙特阿拉伯",
	"184": "新加坡",
	"185": "斯里兰卡",
	"186": "叙利亚",
	"187": "塔吉克斯坦",
	"189": "土库曼斯坦",
	"188": "泰国",
	"190": "阿联酋",
	"191": "乌兹别克斯坦",
	"192": "越南",
	"195": "澳大利亚"
};
$(function () {
    "use strict";
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
                resp = $.parseJSON(resp);
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
                    if (localStorage && !localStorage.getItem("player")) {
                        localStorage.setItem("player", JSON.stringify(players));
                    }
                }
            });
        },
        setDate: function (players) {
            var me = this;
            me.playersPage = players;
            playersView.renderPlayer(players.slice(0, me.pageCount));
            playersView.renderPage(Math.ceil(players.length / me.pageCount), me.curPage);
            for (var i = 0; i < players.length; i++) {
                if (!me.playersCache[players[i].hashid]) {
                    me.playersCache[players[i].hashid] = players[i];
                }
            }
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
                if (pages <= 10) {
                    for (var i = 1; i <= pages; i++) {
                        if (i === curPage) {
                            cls = "active";
                        } else {
                            cls = "";
                        }
                        data.push({page: i, clses: cls, name: i});
                    }
                } else {
                    var startPage = (curPage - 4) > 0 ? (curPage - 4) : 1;
                    var endPage = (curPage + 4) < pages ? (curPage + 4) : pages;
                    if (startPage > 1) {
                        data.push({page: 1, clses: "", name: "«首页"});
                    }
                    for (var i =  startPage; i <= endPage; i++) {
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
        var arr = ["肥胖", "普通", "瘦弱"];
        return arr[~~options.fn(this) - 1];
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
                    }
                }
            }
        }
        return "";
    });

    if (localStorage && localStorage.getItem("player")) {
        playerModel.setDate($.parseJSON(localStorage.getItem("player")));
    } else {
        playerModel.getData();
    }

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