/*!
 * 按钮组组件
 * version - v1.0.0
 * 调用方法：
 * var tab = $("#wrap").tabLabel();
 * $(".box-prop").btngroup({
 *		items: [{
 *			"text": "推荐",
 *			"value": 1
 *		}, {
 *			"text": "热点",
 *			"value": 2
 *		}, {
 *			"text": "头条",
 *			"value": 3
 *		}, {
 *			"text": "精选",
 *			"value": 4
 *		}],
 *		type: 2,  // 按钮组类型
 *		data: [1, 2] // 默认选中的数据
 * });
 */
;(function ($, undefined) {
	"use strict";

	var BtnGroup = (function () {
		function BtnGroup (ele, opts) {
			this.ele = ele;  // 容器 element
			this.setting = $.extend({}, $.fn.btngroup.defaults, opts);
			this.init();
			this.setValue(this.setting.data); // 设置初始选中的值，若果有的话
		}

		// 初始化
		BtnGroup.prototype.init = function () {
			this.ele.append(this.getHtml());
			this.bindEvent();
		};

		/**
		* 获取html结构
		* return {string}  html字符串
		*/
		BtnGroup.prototype.getHtml = function () {
			var items = this.setting.items,
				len = items.length,
				html = "",
				i = 0;

			html += "<div class=\"btn-group\">";
			for (; i < len; i++) {
				html += "<button type=\"button\" data-val=\"" + items[i].value + "\" class=\"btn btn-default\">" + items[i].text + "</button>";
			}
			html += "</div>";

			return html;
		};

		// 绑定事件
		BtnGroup.prototype.bindEvent = function () {
			var me = this;

			this.ele.on("click", ".btn-group > button", function () {
				if ($(this).hasClass("btn-default")) {
					if (me.setting.type === 1) {
						$(this).siblings(".btn-success").removeClass("btn-success").addClass("btn-default");
					}
					$(this).removeClass("btn-default").addClass("btn-success");
				} else {
					$(this).removeClass("btn-success").addClass("btn-default");
				}
			});
		};

		/**
		* 设置按钮组选中的值
		* @param {array} data  按钮组选中的值
		*/
		BtnGroup.prototype.setValue = function (data) {
			this.ele.find("button").removeClass("btn-success").addClass("btn-default").each(function (i, item) {
				if (Object.prototype.toString.call(data) === "[object Array]") {
					for (var j = 0; j < data.length; j++) {
						if (data[j] == $(item).attr("data-val")) {
							$(this).removeClass("btn-default").addClass("btn-success");
						}
					}
				} else {
					if (data == $(item).attr("data-val")) {
						$(this).removeClass("btn-default").addClass("btn-success");
					}
				}
			});
		};

		/**
		* 获取按钮组选中的值
		* return {array}  按钮组选中的值
		*/
		BtnGroup.prototype.getValue = function () {
			var result = [];

			this.ele.find(".btn-success").each(function (i, item) {
				result.push($(item).attr("data-val"));
			});

			return result;
		};

		return BtnGroup;
	})();

	$.fn.btngroup = function (opts) {
		var args = [].slice.call(arguments, 1);
		var	obj = $(this).data("btngroup");

		if (!obj) {
			$(this).data("btngroup", (obj = new BtnGroup($(this), opts)));
		}
		if (typeof opts === "string" && typeof obj[opts] == "function") {
			return obj[opts].apply(obj, args);
		}
	};

	$.fn.btngroup.defaults = {
		type: 1, //  默认的按钮组类型，1为单选，2为多选
		items: [], // 按钮选项
		data: [] // 选中的数据
	};
})(jQuery);