# utils
javascript 常用的工具函数
## 使用
多种方式灵活使用
- 拷贝具体函数使用：查看源码utils中的代码，可以拷贝出来用，我用es6+写的，如果用es5写，可以用在线转换工具转一下。
- es5使用：拷贝dist中的myUtils.js到项目中，然后实例化
``` javascript
var myUtils = new MyUtils();
var params =  myutils.queryParams();
```
- es6项目中使用：拷贝scr/utils.js到项目中,并删除文件末尾最后一行 window.MyUtils = MyUtils;
``` javascript
import util from 'myUtils';
const myUtils = new util();
const params =  myutils.queryParams();
```
## 运行demo
``` bash
git clone https://github.com/LichiaMa/utils.git;
cd utils
npm install
npm start
```
打开浏览器localhost:3000，打开控制台可查看输出。具体的方法调用请查看test/test.js

欢迎小伙伴们补充，谢谢
