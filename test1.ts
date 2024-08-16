#!/usr/bin/env ts-node

const hello: string = "Hello World!";
console.log(hello)
console.info('Hello TS')
console.info('123')
console.info('321')
console.info('111')

///////////////////////////////// 对象类型

// Number

// prototype
// Number 对象的静态属性。使您有能力向对象添加属性和方法。

console.log("TypeScript Number 属性: ");
console.log("最大值为: " + Number.MAX_VALUE);
console.log("最小值为: " + Number.MIN_VALUE);
console.log("负无穷大: " + Number.NEGATIVE_INFINITY);
console.log("正无穷大:" + Number.POSITIVE_INFINITY);

var month = 0
if (month <= 0 || month > 12) {
    month = Number.NaN
    console.log("月份是：" + month)
} else {
    console.log("输入月份数值正确。")
}

// function employee(id: number, name: string) {
//     this.id = id
//     this.name = name
// }
//
// var emp = new employee(123, "admin")
// employee.prototype.email = "admin@runoob.com"
//
// console.log("员工号: " + emp.id)
// console.log("员工姓名: " + emp.name)
// console.log("员工邮箱: " + emp.email)

var num = new Number(10);
console.log(num.toString()); // 输出10进制：10
console.log(num.toString(2)); // 输出2进制：1010
console.log(num.toString(8)); // 输出8进制：12

var num = new Number(10); // 通过赋的值推断类型
var num1: number = num.valueOf();
console.log(num1)
console.log(num.valueOf()); // 输出：10

// String

var txt = new String("string");

var str = new String("This is string");
console.log("str.constructor is: " + str.constructor) // constructor 调用的构造方法

// 字符串长度
var uname = new String("Hello World")
console.log("Length " + uname.length)  // 输出 11

// 字符串查找——返回索引
var str11 = new String("RUNOOB");
var index = str11.indexOf("OO");
console.log("查找的字符串位置 :" + index);  // 3

// 字符串拼接
var str1 = new String("RUNOOB");
var str2 = new String("GOOGLE");
var str3 = str1.concat(str2.valueOf());
var str4 = str1.concat(str2.toString());
console.log("str1 + str2 : " + str3) // RUNOOBGOOGLE
console.log("str1 + str2 : " + str4) // RUNOOBGOOGLE

// 字符串分割
var str_splitted = "Apples are round, and apples are juicy.";
var splitted = str_splitted.split(" ", 3);
console.log(splitted)  // [ 'Apples', 'are', 'round,' ]

// 字符串截取——左闭右开区间
var str_substring = "RUNOOB GOOGLE TAOBAO FACEBOOK";
console.log("(1,2): " + str_substring.substring(1, 2)); // (1,2): U
console.log("(0,10): " + str_substring.substring(0, 10)); // (0,10): RUNOOB GOO
console.log("(5): " + str_substring.substring(5)); // (5): B GOOGLE TAOBAO FACEBOOK

// 字符串替换
var re = /(\w+)\s(\w+)/;
var str_replace = "zara ali";
var newstr = str_replace.replace(re, "$2, $1");
console.log(newstr); // ali, zara
console.log(str_replace.replace("ali", "baidu")); // zara baidu

