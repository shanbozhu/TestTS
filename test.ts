#!/usr/bin/env ts-node

const hello: string = "Hello World!";
console.log(hello)
console.info('Hello TS')
console.info('123')
console.info('321')
console.info('111')

///////////////////////////////// 控制语句

var j: any;
var n: any = "ab c"

for (j in n) {
    console.log(n[j])
}

let someArray = [1, "string", false];

for (let entry of someArray) {
    console.log(entry); // 1, "string", false
}

let list = [4, 5, 6];
list.forEach((val, idx, array) => {
    // val: 当前值
    // idx：当前index
    // array: Array
    console.log(val, idx, array);
});

let list1 = [4, 5, 6];
list1.every((val, idx, array) => {
    // val: 当前值
    // idx：当前index
    // array: Array
    console.log(val, idx, array);
    return true; // Continues
    // Return false will quit the iteration
});

var num: number = 5;
var factorial: number = 1;

while (num >= 1) {
    factorial = factorial * num;
    num--;
}
console.log("5 的阶乘为：" + factorial);

var n1: number = 10;
do {
    console.log(n1);
    n1--;
} while (n1 >= 0);

var i: number = 1
while (i <= 10) {
    if (i % 5 == 0) {
        console.log("在 1~10 之间第一个被 5 整除的数为 : " + i)
        break     // 找到一个后退出循环
    }
    i++
} //  输出 5 然后程序执行结束

var num: number = 0
var count: number = 0;
for (num = 0; num <= 20; num++) {
    if (num % 2 == 0) {
        continue
    }
    count++
}
console.log("0 ~20 之间的奇数个数为: " + count) // 输出10个奇数

// for(;;) {
//     console.log("这段代码会不停的执行")
// }

///////////////////////////////// 函数

function test() { // 函数定义
    console.log("调用函数")
}

test() // 调用函数

// 函数定义
function greet(): string { // 返回一个字符串
    return "Hello World"
}

function caller() {
    var msg = greet() // 调用 greet() 函数
    console.log(msg)
}

// 调用函数
caller()

// 可选参数，参数可传可不传
function buildName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

let result1 = buildName("Bob");  // 正确
let result3 = buildName("Bob", "Adams");  // 正确
console.log(result1)
console.log(result3)

// 默认参数，参数不传时使用默认值
function calculate_discount(price: number, rate: number = 0.50) {
    var discount = price * rate;
    console.log(typeof discount)
    console.log("计算结果: ", discount);
}

calculate_discount(1000)
calculate_discount(1000, 0.30)

// 可变参数函数
function buildName1(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

let employeeName = buildName1("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(employeeName)

function addNumbers(...nums: number[]) {
    var i;
    var sum: number = 0;

    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    console.log("和为：", sum)
}

addNumbers(1, 2, 3)
addNumbers(10, 10, 10, 10, 10)

// 匿名函数
var msg = function () {
    return "hello world!!!!";
}
console.log(msg())

var res = function (a: number, b: number) {
    return a * b;
};
console.log(res(12, 2));

// 匿名函数自调用
(function () {
    var x = "Hello!!";
    console.log(x)
})();

(function (a: number, b: string) {
    var x = "Hello!!";
    console.log(x + a + b);
})(3, "zhushanbo");

(function (a: number, b: string): string {
    var x = "Hello!!";
    console.log(x + a + b);
    return "haha"
})(3, "zhushan");

let res1 = (function (a: number, b: string): string {
    var x = "Hello!!";
    console.log(x + a + b);
    return "haha"
})(3, "shanbo");
console.log(res1)

console.log((function (a: number, b: string): string {
    var x = "Hello!!";
    console.log(x + a + b);
    return "haha"
})(3, "zhu"));