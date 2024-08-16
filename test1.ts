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