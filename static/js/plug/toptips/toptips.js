;(function () {
	var toptips = {
		items: {}, // 消息tip数组

		/**
		* 添加消息提示
		* @param {string} id 消息索引id
		* @param {string} text 消息内容
		* @param {string} type 消息类型，1为成功消息，否则为失败消息
		* @param {number}  t  消息持续显示时间，默认为5秒
		*/
		show: function (id, text, type, t) {
			var me = this,
				cls;

			t = t || 5;

			if ($(".wrap-tips").length < 1) {
				$(document.body).append("<div class='wrap-tips'></div>");
			}
			if (type === 1) {
				cls = "tips-suc";
			} else {
				cls = "tips-err";
			}

			if (this.items[id]) {
				clearTimeout(this.items[id].t);
				this.items[id].t = null;
			} else {
				$(".wrap-tips").append("<div data-tipsid='" + id + "' class='box-tips'><span class='dib " + cls + "'>" + text + "</span></div>");
				this.items[id] = {};
			}
			this.items[id].t = setTimeout(function () {
				me.remove(id);
			}, t * 1000);
		},
		/**
		* 移除消息提示
		* @param {string} id 消息索引id，如果没有id则全部移除
		*/
		remove: function (id) {
			if (typeof id !== "undefined") {
				if (this.items[id]) {
					$(".wrap-tips").find("[data-tipsid=" + id + "]").slideUp(function () {
						$(this).remove();
					});
					delete this.items[id];
				}
			} else {
				$(".wrap-tips").empty();
				for (var i in this.items) {
					if (items.hasOwnProperty(i)) {
						clearTimeout(this.items[i].t);
						this.items[i].t = null;
						delete this.items[i];
					}
				}
			}
		}
	};
	window.toptips = toptips;
})();