(function ($, undefined) {
	"use strict";

	var verif = (function () {
		/**
		* 验证数据
		*/
		var checkItems = function (items) {
			var len = items.length;
			var i = 0;

			for (; i < len; i++) {
				if (!checkItem(items[i])) {
					return false;
				}
			}
			return true;
		};

		/**
		* 验证数据
		* @param {object} item 数据项
		* return {boolean}
		*/
		var checkItem = function (item) {
			var val;
			if (item.ele.length === 0) {
				return false;
			}
			switch (item.type) {
				case 1:
					val = item.ele.val();
					if (val.length === 0) {
						showTips(item.ele, item.text);
						item.ele.focus();
						return false;
					}
					break;
				case 2:
					val = item.ele.val();
					if (!val.reg.test(val)) {
						showTips(item.ele, item.text);
						item.ele.focus();
						return false;
					}
					break;
				case 3:
					if (item.vals[0] !== item.vals[1]) {
						showTips(item.ele, item.text);
						item.ele.focus();
						return false;
					}
					break;
			}
			return true;
		};

		/**
		* 显示提示
		* @param {jquery object} ele DOM元素
		* @param {string}  alertStr 错误提示
		* @param {string}  direction  错误提示的显示方向
		*/
		var showTips = function (ele, alertStr, direction) {
			direction = direction || "top"
			ele.popover({
				"placement": direction,
				"trigger": "manual",
				"content": alertStr
			});
			ele.popover("show");
			closeTips(ele);
		};

		/**
		* 关闭提示
		*/
		var closeTips = function (ele) {
			setTimeout(function () {
				ele.popover("hide");
			}, 3000);
		};

		return {
			check: checkItems
		};
	})();
	window.verif = verif;
})(jQuery);