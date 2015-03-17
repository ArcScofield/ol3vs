/*!
 * 下拉选项卡组件
 * version - v1.0.0
 * 调用方法：
 *	$(".box-art-sort").chosen({
 *		defaultText: "请选择分类",
 *		items: [
 *			{
 *				value: 111,
 *				text: "哈哈"
 *			}, {
 *				value: 2222,
 *				text: "嘿嘿"
 *			}
 *		]
 *	});
 */
;(function ($, undefined) {
	"use strict";

	var Chosen = (function () {
		function Chosen (ele, opts) {
			this.wrap = ele;
			this.setting = $.extend({}, $.fn.chosen.defaults, opts);
			this.init.apply(this);
		}

		// 初始化
		Chosen.prototype.init = function () {
			this.setting.items.unshift({
				value: "",
				text: this.setting.defaultText
			});
			this.wrap.html(this.getHtml(this.setting.items));
			this.bindEvent();
			if (this.setting.item) {
				this.setValue(this.setting.item);
			}
		};

		/**
		* 获取html结构
		* @param {array}
		* return {string}  html字符串
		*/
		Chosen.prototype.getHtml = function (items) {
			var html = "",
				i = 0,
				len = items.length;

			html += "<div class=\"btn-group\">";
			html += "<button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">";
			html += "<span class=\"cont-value\">" + this.setting.defaultText + "</span> <span class=\"caret\"></span>";
			html += "</button>";
			html += "<ul class=\"dropdown-menu\" role=\"menu\">";
			for (; i < len; i++) {
				html += "<li><a href=\"javascript:;\" data-value=\"" + items[i].value + "\">" + items[i].text + "</a></li>";
			}
			html += "</ul>";
			html += "<input type=\"hidden\">";
			html += "</div>";

			return html;
		};

		/**
		* 设置下拉菜单选项
		* @param {array}  items 下拉控件的选项
		* @param {object} 返回对象自身
		*/
		Chosen.prototype.setItems = function (items) {
			var html = "",
				i = 0,
				len = items.length;

			for (; i < len; i++) {
				html += "<li><a href=\"javascript:;\" data-value=\"" + items[i].value + "\">" + items[i].text + "</a></li>";
			}
			this.wrap.find("ul").html(html);
			return this;
		};

		/**
		* 获取下拉选项框的值
		* @return {string}  下拉选项框选中的值
		*/
		Chosen.prototype.getValue = function () {
			return this.wrap.find(".btn-group > input[type=hidden]").val();
		};

		/**
		* 设置下拉选项框选中的值
		* @param {string} val 设置下拉控件选中的值
		* @param {object} 返回对象自身
		*/
		Chosen.prototype.setValue = function (val) {
			var len = this.setting.items.length,
				i = 0;
			
			for (; i < len; i++) {
				if (val == this.setting.items[i].value) {
					this.wrap.find(".btn-group > input[type=hidden]").val(val);
					this.wrap.find(".btn-group > button > .cont-value").html(this.setting.items[i].text);
				}
			}
			return this;
		};

		// 绑定事件
		Chosen.prototype.bindEvent = function () {
			var me = this;

			// 委托给a标签绑事件
			this.wrap.find(".btn-group > .dropdown-menu").on("click", "li > a", function () {
				me.setValue($(this).attr("data-value"));
			});
		};

		return Chosen;
	})();

	$.fn.chosen = function (opts) {
		var args = [].slice.call(arguments, 1),
			obj = $(this).data("chosen");

		if (!obj) {
			$(this).data("chosen", (obj = new Chosen($(this), opts)));
		}
		if (typeof opts == "string" && typeof obj[opts] == "function") {
			return obj[opts].apply(obj, args);
		}
	};

	$.fn.chosen.defaults = {
		defaultText: "请选择",  // 下拉选项框内默认显示的文字
		items: []  // 下拉选项数组
	};
})(jQuery);