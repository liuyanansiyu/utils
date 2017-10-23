import myUtils from '../utils';

// queryParams 使用
console.log(myUtils.queryParams());

// fixDate 使用
console.log(myUtils.fixDate('2013-09-12T12:33:30+0000'));

// format 使用
console.log(myUtils.format(new Date(), 'yy-M-dd hh:mm:ss'));

// threeNumber 使用
console.log(myUtils.threeNumber(123456789));

// compare使用
const compare = [
  { name: 'lili', age: 23 },
  { name: 'lucy', age: 25 },
  { name: 'jack', age: 10 }
];
console.log(compare.sort(myUtils.compare('age'))); 

// distinct
console.log(myUtils.distinct([1,2,3,3,1]))