/**
 * [工具函数]
 * @type {Object}
 */
var utils = {};
(function($) {
	//将url中的参数格式化为对象
	function getUrlData() {
		var args = new Object(); //声明一个空对象
		var query = window.location.search.substring(1); // 取查询字符串，如从http://www.snowpeak.org/testjs.htm?a1=v1&a2=&a3=v3#anchor 中截出 a1=v1&a2=&a3=v3。
		var pairs = query.split("&"); // 以 & 符分开成数组
		for (var i = 0; i < pairs.length; i++) {
			var pos = pairs[i].indexOf('='); // 查找 "name=value" 对
			if (pos == -1) continue; // 若不成对，则跳出循环继续下一对
			var argname = pairs[i].substring(0, pos); // 取参数名
			var value = pairs[i].substring(pos + 1); // 取参数值
			value = decodeURIComponent(value); // 若需要，则解码
			args[argname] = value; // 存成对象的一个属性
		}
		return args; // 返回此对象
	}
	utils.getUrlData = getUrlData;
	/**
	 * [date format]
	 * @param  {[string]} format [yyyy-MM-dd HH:mm:ss]
	 * @return {[type]}        [description]
	 */
	Date.prototype.format = function(format) {
			var o = {
				"M+": this.getMonth() + 1, //month
				"d+": this.getDate(), //day
				"h+": this.getHours(), //hour
				"m+": this.getMinutes(), //minute
				"s+": this.getSeconds(), //second
				"q+": Math.floor((this.getMonth() + 3) / 3), //quarter
				"S": this.getMilliseconds() //millisecond
			}
			if (/(y+)/.test(format)) format = format.replace(RegExp.$1,
				(this.getFullYear() + "").substr(4 - RegExp.$1.length));
			for (var k in o)
				if (new RegExp("(" + k + ")").test(format))
					format = format.replace(RegExp.$1,
						RegExp.$1.length == 1 ? o[k] :
						("00" + o[k]).substr(("" + o[k]).length));
			return format;
		}
	/**
	 * [添加trim方法]
	 * @return {[type]} [description]
	 */
	String.prototype.trim = function() {
		var reg = /(^s\+)|(s\+$)/g;
		return this.replace(reg, “”);
	}
	/**
	* [自适应布局，根据屏幕大小动态给html添加fontsize]
	* @return {[type]} [description]
	*/
	function adaption() {
		var globalWidth = window.innerWidth;
		var radixNO = 25 / 750 * globalWidth;
		if (globalWidth < 400) {
			globalWidth = 375;
			radixNO = 12.5;
		}

		var fitStyle = "<style>html{font-size:" + radixNO + "px;}</style>";
		document.write(fitStyle);

		(function(doc, win) {
			var docEl = doc.documentElement,
				resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
				recalc = function() {
					var globalWidth = window.innerWidth; // for judge the screen ??
					var clientWidth = docEl.clientWidth;
					if (!clientWidth) return;
					docEl.style.fontSize = 25 * (clientWidth / 750) + 'px';
					if (clientWidth < 400) {
						docEl.style.fontSize = 12.5 + 'px';
					}
				};
			if (!doc.addEventListener) return;
			win.addEventListener(resizeEvt, recalc, false);
			doc.addEventListener('DOMContentLoaded', recalc, false);
		})(document, window);
	}
	utils.adaption=adaption;
	var a=3;
})(jQuery);