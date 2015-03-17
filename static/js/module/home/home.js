define(function(require, exports, module) {
    exports.init = function () {
        var input = document.getElementById("txtPrice");
        var txtTax = document.getElementById("txtTax");
        var txtResult = document.getElementById("txtResult");

        addChangeEvent(input, function () {
            var val = ~~input.value;
            var tax = 0;

            if (val <= 400000) {
                num = (val * 0.3).toFixed(0);
                txtTax.innerHTML = num
            } else {
                num = (400000 * 0.3 + (val - 400000) * 0.4).toFixed(0);
                txtTax.innerHTML = num;
            }
            txtResult.innerHTML = val - num;
        });

        /**
        * 输入框变动事件
        */
        function addChangeEvent (el, callback) {
            if (window.addEventListener) {  // 先执行W3C
                el.addEventListener("input", callback);
            } else {
                el.attachEvent("onpropertychange", function(e) {
                    if (e.propertyName === "value") {
                        callback(e);
                    }
                });
            }

            if (document.documentMode === 9) {
                var selectionchange = function (e) {
                    if (e.type === "focus") {
                        document.addEventListener("selectionchange", callback);
                    } else {
                        document.removeEventListener("selectionchange", callback);
                    }
                }
                el.addEventListener("focus", selectionchange);
                el.addEventListener("blur", selectionchange);
            }
        }
    }
});