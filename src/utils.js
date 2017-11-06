/**
 * js常用工具函数
 * 每个函数都可在test/test.js中找到调用方法
 * @export
 * @class MyUtils
 */
export default class MyUtils {
  /**
   * url查询参数格式化为一个对象
   * 兼容hash写法，参数可以在hash之前或之后，或前后都有
   * 普通url：http://localhost:3000/index.html?code=0210YO6j22fLhJ0nGI5j2Fr47j20YO66&state=1212
   * 带hash的url:http://localhost:3000/index.html?code=0210YO6j22fLhJ0nGI5j2Fr47j20YO66#home?state=1212
   * @static
   * @returns object{}
   * @memberof MyUtils
   */
  static queryParams() {
    const hash = decodeURIComponent(window.location.hash);
    const search = decodeURIComponent(window.location.search);
    const query = search.substring(1) + '&' + hash.substring(hash.indexOf('?') + 1);
    const params = {};
    query.split('&').map(elm => elm.split('=')).forEach((value, index) => params[value[0]] = value[1]);
    return params
  }

  /**
   * 时间转化为本地时间，兼容safari
   * 使用：fixDate('2013-09-12T12:33:30+0000'),fixDate('2013-09-12T12:33:30+0800')
   * @static
   * @param {string} dataStr 
   * @returns string
   * @memberof MyUtils
   */
  static fixDate(dataStr) {
    if (!dataStr) {
      return
    }
    let tempDate = new Date(dataStr);
    if (tempDate == 'Invalid Date') {
      dataStr = dataStr.replace(/T/g, ' ').replace(/-/g, '/');
      tempDate = new Date(dataStr)
    }
    tempDate.toLocaleDateString();
    return tempDate
  }


  /**
   * 日期格式化
   * 调用：format(new Date(),'yyyy-MM-dd hh:mm:ss');
   * 如果要兼容safari，可结合fixDate使用
   * @static
   * @param {Date object or date string} date 
   * @param {string} fmt 
   * @returns string
   * @memberof MyUtils
   */
  static format(date, fmt) {
    if (typeof fmt !== 'string') {
      return
    }
    const data = new Date(date);
    const obj = {
      'y+': data.getFullYear(),
      'M+': data.getMonth() + 1,
      'd+': data.getDate(),
      'h+': data.getHours(),
      'm+': data.getMinutes(),
      's+': data.getSeconds(),
    };
    for (let key in obj) {
      if (new RegExp(`(${key})`).test(fmt)) {
        if (key === 'y+') {
          fmt = fmt.replace(RegExp.$1, obj[key].toString().substring(4 - RegExp.$1.length));
        } else {
          fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? (obj[key]) : ('00' + obj[key]).substring(obj[key].toString().length));
        }
      }
    }
    return fmt
  }

  /**
   * 数字的千位表示法（函数名字起的很烂）
   * 把111111转换成111,111的形式
   * (?=)(?!)是边界匹配
   * @static
   * @param {any} num 
   * @returns string
   * @memberof MyUtils
   */
  static threeNumber(num) {
    num = '' + num;
    return num.replace(/(?!^)(?=(\d{3})+$)/g, ',')
  }

  /**
   * 比较器，用于按照数组内对象的属性排序（正序）
   * 倒叙返回 obj1[prop] < obj2[prop]
   * 
   * @static
   * @param {string} prop 
   * @returns boolean
   * @memberof MyUtils
   */
  static compare(prop) {
    if (typeof prop !== 'string') {
      return
    }
    return function (obj1, obj2) {
      return obj1[prop] > obj2[prop]
    }
  }

  /**
   * 数组去重，es6的去重是真的好用
   * 利用set集合的唯一性
   * @static
   * @param {Array[]} arr 
   * @returns Array[]
   * @memberof MyUtils
   */
  static distinct(arr) {
    return [...new Set(arr)]
  }

  /**
   * 对象深拷贝
   * 
   * @static
   * @param {object} obj 
   * @returns object
   * @memberof MyUtils
   */
  static clone(obj) {
    if (typeof obj === 'object') {
      let newObj = obj.constructor === 'Array' ? [] : {};
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          typeof obj[key] === 'object' ? newObj[key] = this.clone(obj[key]) : newObj[key] = obj[key];
        }
      }
      return newObj;
    }
    return
  }
}

// 导出为全局对象
window.MyUtils = MyUtils;