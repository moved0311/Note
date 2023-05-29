https://graphics.stanford.edu/~seander/bithacks.html

* About the operation counting methodology
* Compute the sign of an integer
* Compute the integer absolute value (abs) without branching
* Compute the minimum (min) or maximum (max) of two integers without branching
* Sign extending
  * Sign extending from a constant bit-width
  * Sign extending from a variable bit-width
  * Sign extending from a variable bit-width in 3 operations
* Conditionally set or clear bits without branching
* Conditionally negate a value without branching
* Merge bits from two values according to a mask
* Counting bits set
  * Counting bits set, naive way
  * Counting bits set by lookup table
  * Counting bits set, Brian Kernighan's way
  * Counting bits set in 14, 24, or 32-bit words using 64-bit instructions
  * Counting bits set, in parallel
  * Count bits set (rank) from the most-significant bit upto a given position
  * Select the bit position (from the most-significant bit) with the given count (rank)
* Computing parity (1 if an odd number of bits set, 0 otherwise)
  * Compute parity of a word the naive way
  * Compute parity by lookup table
  * Compute parity of a byte using 64-bit multiply and modulus division
  * Compute parity of word with a multiply
  * Compute parity in parallel
* Swapping Values
  * Swapping individual bits with XOR
* Reversing bit sequences
  * Reverse bits the obvious way
  * Reverse bits in word by lookup table
  * Reverse the bits in a byte with 3 operations (64-bit multiply and modulus division)
  * Reverse the bits in a byte with 4 operations (64-bit multiply, no division)
  * Reverse the bits in a byte with 7 operations (no 64-bit, only 32)
  * Reverse an N-bit quantity in parallel with 5 * lg(N) operations
* Modulus division (aka computing remainders)
* Computing modulus division by 1 << s without a division operation (obvious)
* Computing modulus division by (1 << s) - 1 without a division operation
* Computing modulus division by (1 << s) - 1 in parallel without a division operation
* Finding integer log base 2 of an integer (aka the position of the highest bit set)
* Find the log base 2 of an integer with the MSB N set in O(N) operations (the obvious way)
* Find the integer log base 2 of an integer with an 64-bit IEEE float
* Find the log base 2 of an integer with a lookup table
* Find the log base 2 of an N-bit integer in O(lg(N)) operations
* Find the log base 2 of an N-bit integer in O(lg(N)) operations with multiply and lookup
* Find integer log base 10 of an integer
* Find integer log base 10 of an integer the obvious way
* Find integer log base 2 of a 32-bit IEEE float
* Find integer log base 2 of the pow(2, r)-root of a 32-bit IEEE float (for unsigned integer r)
* Counting consecutive trailing zero bits (or finding bit indices)
  * Count the consecutive zero bits (trailing) on the right linearly
  * Count the consecutive zero bits (trailing) on the right in parallel
  * Count the consecutive zero bits (trailing) on the right by binary search
  * Count the consecutive zero bits (trailing) on the right by casting to a float
  * Count the consecutive zero bits (trailing) on the right with modulus division and lookup
  * Count the consecutive zero bits (trailing) on the right with multiply and lookup
* Round up to the next highest power of 2 by float casting
* Round up to the next highest power of 2
* Interleaving bits (aka computing Morton Numbers)
  * Interleave bits the obvious way
  * Interleave bits by table lookup
  * Interleave bits with 64-bit multiply
  * Interleave bits by Binary Magic Numbers
* Testing for ranges of bytes in a word (and counting occurances found)
  * Determine if a word has a zero byte
  * Determine if a word has a byte equal to n
  * Determine if a word has byte less than n
  * Determine if a word has a byte greater than n
  * Determine if a word has a byte between m and n
* Compute the lexicographically next bit permutation

### 合并二维有序数组成一维有序数组，归并排序的思路

公司：头条

分类：算法

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/8)



### 斐波那契数列

公司：腾讯、CVTE、微软

分类：算法

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/9)



### 字符串出现的不重复最长长度

公司：腾讯

分类：算法

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/10)



### 介绍chrome 浏览器的几个版本

公司：滴滴

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/11)



### React 项目中有哪些细节可以优化？实际开发中都做过哪些性能优化

公司：滴滴、掌门一对一、网易、有赞、沪江、喜马拉雅、酷家乐、快手

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/12)



### react 最新版本解决了什么问题 加了哪些东西

公司：滴滴

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/13)



### 说一下 Http 缓存策略，有什么区别，分别解决了什么问题

公司：滴滴、头条、网易、易车、脉脉、掌门一对一、虎扑、挖财、爱范儿

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/14)



### 介绍防抖节流原理、区别以及应用，并用JavaScript进行实现

公司：滴滴、虎扑、挖财、58、头条

分类：JavaScript、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/15)



### 前端安全、中间人攻击

公司：滴滴

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/16)



### 对闭包的看法，为什么要用闭包？说一下闭包原理以及应用场景

公司：滴滴、携程、喜马拉雅、微医、蘑菇街、酷家乐、腾讯应用宝、安居客

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/17)



### 有一堆整数，请把他们分成三份，确保每一份和尽量相等（11，42，23，4，5，6 4 5 6 11 23 42 56 78 90）

公司：滴滴

分类：算法

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/19)



### 实现 lodash 的_.get

公司：滴滴

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/20)



### 实现 add(1)(2)(3)

公司：滴滴

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/21)



### 实现链式调用

公司：滴滴

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/22)



### React 事件绑定原理

公司：滴滴、沪江

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/23)



### 类数组和数组的区别，dom 的类数组如何转换成数组

公司：海康威视

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/24)



### webpack 做过哪些优化，开发效率方面、打包策略方面等等

公司：滴滴、快手、掌门一对一、高思教育

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/25)



### 说一下事件循环机制(node、浏览器)

公司：滴滴、伴鱼、高德、自如、虎扑、58

分类：Node、JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/26)



### 如何封装 node 中间件

公司：滴滴、酷狗

分类：Node

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/27)



### node 中间层怎样做的请求合并转发

公司：易车

分类：Node

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/28)



### 介绍下 promise 的特性、优缺点，内部是如何实现的，动手实现 Promise

公司：滴滴、头条、喜马拉雅、兑吧、寺库、百分点、58、安居客

分类：JavaScript、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/29)



### 实现 Promise.all

```js
Promise.all = function (arr) {
  // 实现代码
};
```

公司：滴滴、头条、有赞、微医

分类：JavaScript、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/30)



### React 组件通信方式

公司：滴滴、掌门一对一、喜马拉雅、蘑菇街

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/31)



### redux-saga 和 mobx 的比较

公司：掌门一对一

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/32)



### 说一下 react-fiber

公司：头条、滴滴、菜鸟网络、挖财、喜马拉雅

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/33)



### 手写发布订阅

公司：滴滴、头条

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/34)



### 手写数组转树

公司：滴滴

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/35)



### 手写用 ES6proxy 如何实现 arr[-1] 的访问

公司：滴滴

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/36)



### 手写实现 Array.flat()

公司：滴滴、快手、携程

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/242)



### react 实现一个全局的 dialog

公司：滴滴

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/241)



### [实操题]输入一条 polyline，输出 polyline 的中点

题目补充：

```js
算法：输入一条polyline，输出polyline的中点
绘制：在浏览器中绘制出polyline和中点
说明：中点是指沿着polyline，到polyline的起点和终点，距离相等，中点要求在polyline上
输入：[[10, 20], [20, 200], [30, 220], [40, 300], [100, 400]]，以[10, 20]举例，10代表x坐标，20代表y坐标，单位是像素
要求：提供源代码，用原生JavaScript实现，不使用任何框架、类库、构建工具，本地打开html文件可直接看到效果
```

公司：腾讯

分类：算法

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/240)



### Umi 和 dva 分别是干嘛用的？为什么会有 umi dva 的出现？使用起来有什么不方便的地方吗？

公司：洋葱学院

分类：其它

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/239)



### React 数据持久化有什么实践吗？

公司：洋葱学院

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/238)



### 使用过 mobx mobx 和 redux 有什么区别？

公司：洋葱学院

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/237)



### 文件上传如何做断点续传

公司：网易、洋葱学院

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/236)



### 大数计算如何实现

公司：洋葱学院

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/235)



### 请用算法实现，从给定的无序、不重复的数组data中，取出n个数，使其相加和为sum。并给出算法的时间/空间复杂度。(不需要找到所有的解，找到一个解即可)

```js
function getResult(data,n,sum){
  // your code
}
```

公司：头条

分类：算法

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/902)



### 什么是深拷贝，和浅拷贝有什么区别，动手实现一个深拷贝

公司：顺丰、新东方、高德、虎扑、微医、百分点、酷狗

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/903)



### 实现一个方法判断 html 中的标签是否闭合

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/234)



### mysql 和 mongodb 区别

分类：其它

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/233)



### V8 机制讲解

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/232)



### 说一下盒子模型，以及标准情况和 IE 下的区别

公司：兑吧

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/231)



### 箭头函数和普通函数的区别

公司：酷家乐

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/230)



### 说下 webpack 的 loader 和 plugin 的区别，都使用过哪些 loader 和 plugin

公司：阿里、滴滴、挖财

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/229)



### Css 如何画出一个扇形，动手实现下

公司：头条

分类：Css、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/228)



### 介绍下 webpack，并说下 Webpack 的构建流程

公司：头条、挖财

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/227)



### 说下 tree-shaking 的原理

公司：头条

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/226)



### Webp 格式的图片怎么生成，使用有什么兼容性问题，如何怎么解决

分类：其它

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/225)



### React 高阶组件 renderprops hooks 有什么区别，为什么要不断迭代

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/224)



### 说一下 React setState 原理

公司：网易

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/223)



### 说一下 React diff 算法

公司：脉脉

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/222)



### 说一下 React 生命周期，以及都有哪些改变，为什么去掉了那几个旧的生命周期

公司：完美世界、高德、脉脉、有赞、挖财、沪江、携程、喜马拉雅、酷家乐

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/221)



### React key 是干嘛用的 为什么要加？key 主要是解决哪一类问题的

公司：滴滴、挖财

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/220)



### Redux 中异步的请求怎么处理

公司：滴滴

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/219)



### CDN 是什么？描述下 CDN 原理？为什么要用 CDN?

公司：头条、滴滴、网易

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/218)



### PWA 是什么？对 PWA 有什么了解

公司：头条、喜马拉雅

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/217)



### 讲一下 webpack 原理， loader 和 plugin，你知道哪些模块化标准，说下 cjs 和 esmodule 的区别

公司：头条

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/216)



### es5 实现 isInteger

公司：头条

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/215)



### 单向链表实现队列

公司：头条

分类：算法

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/214)



### 写出输出结果

```js
function Foo() {
  getName = function () {
    alert(1);
  };
  return this;
}
var getName;
function getName() {
  alert(5);
}
Foo.getName = function () {
  alert(2);
};
Foo.prototype.getName = function () {
  alert(3);
};
getName = function () {
  alert(4);
};

Foo.getName(); // ？
getName(); // ？
Foo().getName(); // ？
getName(); // ？
new Foo.getName(); // ?
new Foo().getName(); // ?
new new Foo().getName(); // ？
```

公司：心娱

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/213)



### 将给定的数组从顶级分类递归查找子分类，最终构建一个树状数组

```js
/*
 *数组：[{id:1, parentId: 0}, {id:2, parentId:1},{id:3, parentId:1}]
 *输出结果：[{id:1, parentId: 0,children:[{id:2, parentId:1},{id:3, parentId:1}]}]
 *说明：parentId为0 的是根节点
 */
```

分类：算法

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/212)



### 手写 dom 操作，翻转 li 标签，如何处理更优

```js
/*
 *有下边这样的dom结构，现在可以获取到ul，要求翻转里边li标签，如何处理更优
 */
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
```

公司：快手

分类：

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/211)



### 怎样判断一个对象是否是数组，如何处理类数组对象

公司：快手

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/210)



### 是否熟悉 Node，主要做过哪些业务，平时用过什么包？

公司：快手

分类：Node

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/209)



### 是否了解 glob，glob 是如何处理文件的，业界是否还有其它解决方案

公司：快手

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/208)



### 说一下 Vue 的 keep-alive 是如何实现的，具体缓存的是什么？

公司：快手

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/207)



### Redux 和 Vuex 有什么区别，说下一它们的共同思想

公司：快手

分类：React、Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/206)



### 谈一下微信小程序的架构以及为什么要用到双线程

公司：快手

分类：小程序

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/205)



### 随便打开一个网页，用 JavaScript 打印所有以 s 和 h 开头的标签，并计算出标签的种类

公司：快手

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/204)



### `1000*1000` 的画布，上面有飞机、子弹，如何划分区域能够更有效的做碰撞检测，类似划分区域大小与碰撞检测效率的算法，说一下大致的思路

公司：快手

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/203)



### 移动设备安卓与 iOS 的软键盘弹出的处理方式有什么不同

公司：快手

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/202)



### iPhone 里面 Safari 上如果一个输入框 fixed 绝对定位在底部，当软键盘弹出的时候会有什么问题，如何解决

公司：快手

分类：JavaScript、Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/201)



### 给定一个数组，按找到每个元素右侧第一个比它大的数字，没有的话返回-1 规则返回一个数组

```js
/*
 *示例：
 *给定数组：[2,6,3,8,10,9]
 *返回数组：[6,8,8,10,-1,-1]
 */
```

公司：快手

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/199)



### 说一说 promise，有几个状态，通过 catch 捕获到 reject 之后，在 catch 后面还能继续执行 then 方法嘛，如果能执行执行的是第几个回调函数

公司：伴鱼、喜马拉雅

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/198)



### var、let、const 的区别

公司：伴鱼、百分点、心娱

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/197)



### 说一下 GC

公司：伴鱼

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/195)



### BFC 是什么？触发 BFC 的条件是什么？有哪些应用场景？

公司：快手、伴鱼、网易

分类：CSS

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/194)



### 说一下浏览器解析 Html 文件的过程

公司：伴鱼

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/193)



### 说一下什么是重绘重排，哪些操作会造成重绘重排

公司：滴滴、伴鱼、菜鸟网络、58

分类：CSS

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/192)



### 什么情况会出现浏览器分层

公司：伴鱼

分类：CSS

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/191)


### 通过 link 进来的 css 会阻塞页面渲染嘛，Js 会阻塞吗，如果会如何解决？

公司：伴鱼

分类：CSS

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/190)

### 如何实现按需加载

公司：伴鱼、腾讯应用宝

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/189)

### 为什么 useState 要使用数组而不是对象

公司：伴鱼

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/187)



### 从输入 URL 到页面加载全过程

公司：头条、边锋、菜鸟网络、爱范儿、心娱

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/186)



### 请实现如下的函数

```js
/*
	可以批量请求数据，所有的 URL 地址在 urls 参数中，同时可以通过 max 参数控制请求的并发度，当所有请求结束之后，需要执行 callback 回调函数。发请求的函数可以直接使用 fetch 即可
*/
```

分类：JavaScript、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/185)



### DNS 解析的具体过程

公司：边锋、寺库

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/184)



### 常见的 http 请求头都有哪些，以及它们的作用

公司：阿里、边锋、喜马拉雅、玄武科技

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/183)



### encoding 头都有哪些编码方式

公司：边锋

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/182)



### utf-8 和 asc 码有什么区别

公司：边锋

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/181)



### tcp 和 udp 有什么区别？tcp 怎样确保数据正确性？tcp 头包含什么？tcp 属于那一层？

公司：头条、边锋

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/180)



### 传输层和网络层分别负责什么，端口在什么层标记

公司：边锋

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/179)



### 介绍下 Https，和 http 的区别是什么？https 为什么比 http 安全？如何进行配置？

公司：边锋、老虎、脉脉、掌门一对一、喜马拉雅、寺库、腾讯应用宝、快手

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/178)



### 说一下加密握手的过程

公司：边锋、老虎

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/177)



### 对称加密和非对称加密的区别和用处

公司：边锋

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/176)



### 是否用过 restful 接口，和其他风格的有什么区别

公司：边锋

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/175)



### 说一下 get、post、put 的区别

公司：边锋、虎扑、酷家乐、酷狗、安居客

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/174)



### 说一下对面向对象的理解，面向对象有什么好处

公司：边锋

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/173)



### 类设计：使用面相对象设计一个停车场管理系

```js
/*
 *题目要求
 *使用面相对象设计一个停车场管理系统，该停车场包含：
 *	1.停车位，用于停放车辆；
 *	2.停车位提示牌，用于展示剩余停车位；
 *可以丰富该系统的元素，给出类，类属性，类接口。
 */
```

公司：边锋

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/171)



### 实现输出一个十六进制的随机颜色(#af0128a)

公司：快手

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/170)



### justify-content:space-between around 有什么区别

公司：快手

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/169)



### 手写代码实现`kuai-shou-front-end=>KuaiShouFrontEnd`

公司：快手

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/168)



### 浏览器都有哪些进程，渲染进程中都有什么线程

公司：老虎

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/167)



### 说说浏览器渲染流程，分层之后在什么时候合成，什么是重排、重绘，怎样避免

公司：老虎

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/166)



### 什么是同源策略？什么是跨域？都有哪些方式会造成跨域？解决跨域都有什么手段？

公司：阿里、滴滴、老虎、完美世界、沪江、喜马拉雅、兑吧、寺库、玄武科技

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/165)



### 什么是 CORS，CORS 需要前端配置还是后端配置？

公司：酷狗

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/164)



### 设计一个 Student 组件，实现输入姓名性别成绩（这三个必填），还有几个不是必填的属性，要设置默认值，点击弹出成绩

公司：老虎

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/163)



### 设计一个函数，奇数次执行的时候打印 1，偶数次执行的时候打印 2

公司：老虎

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/162)



### 实现 Promise.then

公司：高德、百分点

分类：JavaScript、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/161)



### 平时在项目开发中都做过哪些前端性能优化

公司：阿里、顺丰、易车、有赞、挖财、喜马拉雅、兑吧、寺库、海康威视、道一云、58

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/160)



### 给定起止日期，返回中间的所有月份

```js
// 输入两个字符串 2018-08  2018-12
// 输出他们中间的月份 [2018-9,2018-10, 2018-11]
```

公司：顺丰

分类：JavaScript、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/159)



### 按要求实现代码

```js
// 给两个数组 [A1,A2,B1,B2,C1,C2,D1,D2] [A,B,C,D]
// 输出 [A1,A2,A,B1,B2,B,C1,C2,C,D1,D2,D]
```

公司：顺丰

分类：JavaScript、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/158)



### 实现一个将 52 张牌随机均等的分给四个人，比如输入 [0,1,2,3....51] ，输出[[1,2,16...],[4,3,6..],[....],[....]]

公司：顺丰

分类：算法

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/157)



### 用尽量短的代码实现一个 arrary 的链式操作，将数组中的大于 10 的值进行一个累加

公司：顺丰

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/156)



### 简单封装一个异步 fecth，使用 async await 的方式来使用

公司：顺丰

分类：JavaScript、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/155)



### 怎么理解 to B 和 to C 的业务

公司：顺丰

分类：其它

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/154)



### 如果有一个项目，随着业务的增长越来越大，怎么办，如何来进行一个拆分或者处理

公司：顺丰

分类：其它

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/153)



### 请写一个函数，输出出多级嵌套结构的 Object 的所有 key 值

```js
var obj = {
  a: "12",
  b: "23",
  first: {
    c: "34",
    d: "45",
    second: { 3: "56", f: "67", three: { g: "78", h: "89", i: "90" } },
  },
};
// => [a,b,c,d,e,f,g,h,i]
```

公司：顺丰

分类：JavaScript、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/152)



### 使用 Css 实现一个水波纹效果

参考：[第二屏中的水波纹效果](https://mp.toutiao.com/auth/page/login/?redirect_url=JTJG#/?_k=1hjyly)

公司：头条

分类：Css、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/151)



### position 定位都有什么属性（不仅仅是绝对定位和相对定位/fix 定位）

公司：头条

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/150)



### 写出打印结果，并解释为什么

```js
var a = { k1: 1 };
var b = a;
a.k3 = a = { k2: 2 };
console.log(a); // ?
console.log(b); // ?
```

公司：头条

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/149)



### 动手实现一个 repeat 方法

```js
function repeat(func, times, wait) {
  // TODO
}
const repeatFunc = repeat(alert, 4, 3000);
// 调用这个 repeatFunc ("hellworld")，会alert4次 helloworld, 每次间隔3秒
```

公司：头条

分类：JavaScript、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/148)



### setTimeout 有什么缺点，和 requestAnimationFrame 有什么区别

公司：头条

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/147)



### versions 是一个项目的版本号列表，因多人维护，不规则，动手实现一个版本号处理函数

```js
var versions = ["1.45.0", "1.5", "6", "3.3.3.3.3.3.3"];
// 要求从小到大排序，注意'1.45'比'1.5'大
function sortVersion(versions) {
  // TODO
}
// => ['1.5','1.45.0','3.3.3.3.3.3','6']
```

公司：头条

分类：JavaScript、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/146)



### 怎样用 css 实现一个弹幕的效果，动手实现一下

公司：头条

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/145)



### 实现一个多并发的请求

```js
let urls = ['http://dcdapp.com', …];
/*
	*实现一个方法，比如每次并发的执行三个请求，如果超时（timeout）就输入null，直到全部请求完
	*batchGet(urls, batchnum=3, timeout=3000);
	*urls是一个请求的数组，每一项是一个url
	*最后按照输入的顺序返回结果数组[]
*/
```

公司：头条

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/144)



### 说一下 Css 预处理器，Less 带来的好处？

公司：头条

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/143)



### 写出代码执行结果

```js
async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}
async function async2() {
  console.log("async2");
}
console.log("script start");
setTimeout(function () {
  console.log("setTimeout");
}, 0);
async1();
new Promise(function (resolve) {
  console.log("promise1");
  resolve();
}).then(function () {
  console.log("promise2");
});
console.log("scripts end");
// 写出代码执行完成打印的结果
```

公司：头条、网易

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/142)



### 按要求实现一个 sum 函数

```js
const a = sum(0); // => a === 0
const b = sum(1)(2); // => b === 3
const c = sum(4)(5); // c === 9
const k = sum(n1)...(nk) // k === n1 + n2 + ... + nk
```

公司：头条

分类：JavaScript、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/141)



### 按要求实现 rightView 函数

```js
function TreeNode(val){
  this.val = val;
  this.left = null;
  this.right = null; 
}
function rightView(root){
  // 请你实现
}
// => [1,4,3]
     1       => 1
   2   4     => 4
 7   3       => 3
```

公司：头条

分类：算法

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/140)



### meta 元素都有什么

公司：完美世界

分类：Html

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/364)



### Css 选择器都有什么，权重是怎么计算的

公司：完美世界

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/363)



### 布局都有什么方式，float 和 position 有什么区别

公司：完美世界

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/362)



### Http1 和 Http2 有什么区别，和 http1.1 相比，http2 都有什么特性

公司：完美世界、网易、脉脉、高思教育

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/361)



### Import 和 CommonJS 在 webpack 打包过程中有什么不同

公司：完美世界

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/360)



### 说一下 base64 的编码方式

公司：完美世界

分类：JavaScirpt

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/359)



### 说一下单向数据流有什么好处

公司：完美世界、酷家乐

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/358)



### `nth-child`和`nth-of-type` 有什么区别

公司：网易

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/357)



### `<img>`是什么元素

公司：网易

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/356)



### flex 布局，如何实现把八个元素分两行摆放

公司：网易

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/355)



### 改变 this 指向的方式都有哪些？

公司：网易

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/354)



### 说一下 etag 和 lastmodify 的区别

公司：网易

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/353)



### 强缓存都有哪些方法来控制

公司：网易、易车

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/352)



### 协商缓存都有哪些参数

公司：网易、易车

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/351)



### 说一下`module.exports`和`exports`的区别，`export`和`export default`的区别

公司：网易

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/350)



### 说一下 webpack 中 css-loader 和 style-loader 的区别，file-loader 和 url-loader 的区别

公司：网易

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/349)



### number 为什么会出现精度损失，怎样避免

公司：网易

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/348)



### 说一下对 React 和 Vue 的理解，它们的异同

公司：网易、脉脉、快手

分类：React、Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/347)



### 二叉树序列化反序列化

公司：微软

分类：算法

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/346)



### 输入一个数字，找到对应的字母

```js
/*
	如输入1 返回a
	输入26返回z
	输入27返回aa
	输入28返回ab
	输入53返回aaa
*/
```

公司：微软

分类：算法

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/345)



### Given an int n, output Mausoleum Array solutions.

```js
// Given an int n, output Mausoleum Array solutions.
// Mausoleum Array:
// Construct by 1,1,2,2,3,3,…,n-1,n-1,n,n
// first were non-decreasing (i.e., increasing or remained the same), and then — non-increasing (decrease or remained unchanged).
// Mausoleum Array example:
// [1, 2, 2, 3, 4, 4, 3, 1];
// [1, 1];
// [2, 2, 1, 1];
// [1, 2, 3, 3, 2, 1].
// input/output example:
// n=1, [1,1]
// n=2, [1,1,2,2],[1,2,2,1],[2,2,1,1]
// n = 3,[3, 3, 2, 2, 1, 1],[2, 3, 3, 2, 1, 1],[2, 2, 3, 3, 1, 1],[1, 3, 3, 2, 2, 1],[1, 2, 3, 3, 2, 1],[1, 2, 2, 3, 3, 1],[1, 1, 3, 3, 2, 2],[1, 1, 2, 3, 3, 2],[1, 1, 2, 2, 3, 3]
```

公司：微软

分类：算法

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/344)



### 实现一个函数将中文数字转成数字

公司：微软

分类：JavaScript、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/343)



### 节流

公司：微软

分类：JavaScript、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/342)



### 请求是异步的为什么会造成阻塞

公司：易车

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/341)



### 脚手架具体都做了哪些事，webpack 具体做了什么配置，怎样优化的打包大小

公司：易车

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/340)



### 介绍下 Webpack 的整个生命周期

公司：滴滴、挖财

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/339)



### 如何实现 5 秒自动刷新一次页面(具体都有什么方法 reload 之类的)

公司：易车

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/338)



### 都了解哪些 ES6、ES7 的新特性，箭头函数可以被 new 吗

公司：易车、脉脉、虎扑、喜马拉雅、百分点、海风教育、58

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/337)



### 说一下 JavaScript 继承都有哪些方法

公司：易车、脉脉、微医、海康威视

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/336)



### Css 方式实现一个不知道宽高的 div 居中都有哪几种方法

公司：阿里、滴滴、易车、新东方、虎扑、饿了么、爱范儿、心娱、58

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/335)



### 给一个字符串比如'abca'，返回第一个不重复的字母

公司：易车

分类：算法

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/334)



### 已知函数 A，要求构造⼀个函数 B 继承 A

```js
function A(name) {
  this.name = name;
}
A.prototype.getName = function () {
  console.log(this.name);
};
```

公司：新东方

分类：JavaScript、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/333)



### 数组和对象转换为字符串结果

```js
var arry = [];
var obj = {};
// arry,obj 转成字符串的结果是什么？
```

公司：新东方

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/332)



### 请写出以下代码的打印结果

```js
var a = {
  name: "A",
  fn() {
    console.log(this.name);
  },
};
a.fn();
a.fn.call({ name: "B" });
var fn1 = a.fn;
fn1();
// 写出打印结果
```

公司：新东方

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/331)



### 请写出以下代码的打印结果

```js
let int = 1;
setTimeout(function () {
  console.log(int);
  int = 2;
  new Promise((resolve, reject) => {
    resolve();
  }).then(function () {
    console.log(int);
    int = 7;
  });
  console.log(int);
});
int = 3;
console.log(int);
new Promise((resolve, reject) => {
  console.log(int);
  return resolve((int = 4));
}).then(function (res) {
  console.log(int);
  int = 5;
  setTimeout(function () {
    console.log(int);
    int = 8;
  });
  return false;
});
console.log(int);
// 写出打印结果
```

公司：新东方

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/330)



### 要求⽤不同⽅式对 A 进⾏改造实现 A.name 发⽣变化时⽴即执⾏ A.getName

```js
/*
	已知对象A = {name: 'sfd', getName: function(){console.log(this.name)}},
	现要求⽤不同⽅式对A进⾏改造实现A.name发⽣变化时⽴即执⾏A.getName
*/
```

公司：新东方

分类：JavaScript、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/329)



### 修改以下代码，使得最后⼀⾏代码能够输出数字 0-9（最好能给多种答案）

```js
var arrys = [];
for (var i = 0; i < 10; i++) {
  arrys.push(function () {
    return i;
  });
}
arrys.forEach(function (fn) {
  console.log(fn());
}); //本⾏不能修改
```

公司：新东方

分类：JavaScript、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/328)



### 给定⼀个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效.

```js
/*
  有效字符串需满⾜：
 	 	1. 左括号必须⽤相同类型的右括号闭合。
  	2. 左括号必须以正确的顺序闭合。
  注意空字符串可被认为是有效字符串。
  示例1：
  	输⼊: "()"
  	输出: true
  示例2：
  	输⼊: "()[]{}"
  	输出: true
  示例 3:
  	输⼊: "(]"
  	输出: false
  示例 4:
  	输⼊: "([)]"
  	输出: false
  示例 5:
  	输⼊: "{[]}"
  	输出: true
*/
```

公司：新东方

分类：算法

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/327)



### CDN 有哪些优化静态资源加载速度的机制

公司：头条

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/326)



### 请给出识别 Email 的正则表达式

公司：头条

分类：JavaScript、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/325)



### 设计 AutoComplete 组件(又叫搜索组件、自动补全组件等)时，需要考虑什么问题？

公司：头条

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/324)



### 实现函数接受任意二叉树，求二叉树所有根到叶子路径组成的数字之和

```js
class TreeNode{
  value:number
  left?:TreeNode
  right?:TreeNode
}
function getPathSum(root){
  // your code
}
// 例子，一层二叉树如下定义，路径包括1 —> 2 ,1 -> 3
const node = new TreeNode();
node.value = 1;
node.left = new TreeNode();
node.left.value = 2;
node.right = new TreeNode();
node.right.value = 3;
getPathSum(node); // return 7 = (1+2) + (1+3)
```

公司：头条

分类：JavaScript、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/323)



### Webpack如何用 localStorage 离线缓存静态资源

公司：滴滴

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/322)



### 手动实现一个函数，给定一个数组[1,0,2,3,4,-1,-3]，输出任意两个值和为 0 的下标

公司：滴滴

分类：算法

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/321)



### 请写出一下代码的打印结果

```js
function a(obj) {
  obj.a = 2;
  obj = { a: 3 };
  return obj;
}
const obj = { a: 1 };
a(obj);
console.log(obj);
```

公司：滴滴

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/324)



### Promise 链式调用如何实现

公司：滴滴

分类：JavaScript、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/319)



### 说一下对`BigInt`的理解，在什么场景下会使用

公司：滴滴、高德

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/318)



### null 是不是一个对象，如果是，如何判断一个对象是 null，不使用 JavaScript 提供的 api 如何进行判断

公司：滴滴

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/317)



### gitlab 分支管理，线上如果发生 bug 怎么解决？

公司：滴滴

分类：其它

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/316)



### 说一下对于堆栈的理解

公司：滴滴、高德

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/315)



### 介绍排序算法和快排原理

公司：寺库、百分点

分类：算法

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/314)



### `[] == ![]`为什么

公司：高德

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/313)



### 说一下 React.Component 和 React.PureComponent 的区别

公司：高德、有赞、酷家乐

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/312)



### 说一下对 React Hook 的理解，它的实现原理，和生命周期有哪些区别？

公司：高德

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/311)



### 如何把真实 dom 转变为虚拟 dom，代码实现一下

公司：高德

分类：JavaScript、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/310)



### 说一下错误监控的实现，错误监控的正确使用方式，日志如何分等级

公司：高德

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/309)



### 说一下 Vue3 与 Vue2 的对比

公司：高德

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/302)



### vue 对数组的方法做了重写的操作，如何实现对 vue2 中对数组操作的 push()方法

公司：高德

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/307)



### 手动实现一个 Promisify 函数

公司：高德

分类：Node

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/306)



### 说一下 React 有状态组件与无状态组件区别，以及为什么要用，它的优缺点

公司：高德

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/305)



### 说一下 Nginx 的缓存策略，强缓存与弱缓存的区别，二者的使用场景

公司：高德

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/304)



### 请写出以下代码执行结果

```js
var a = { x: 1 };
var b = a;
a.x = a = { n: 1 };
console.log(a); // ?
console.log(b); // ?
```

公司：快手

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/303)



### 请写出以下代码执行结果

```js
Function.prototype.a = () = >{alert(1)}
Object.prototype.b = () = >{alert(2)}
function A(){};
const a = new A();
a.a();
a.b();
// 写出执行结果
```

公司：快手

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/302)



### 请写出以下代码执行结果

```js
let a = 0;
console.log(a);
console.log(b);
let b = 0;
console.log(c);
function c() {}
// 写出执行结果
```

公司：快手

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/301)



### 请写出以下代码执行结果

```js
var x = 10;
function a(y) {
  var x = 20;
  return b(y);
}
function b(y) {
  return x + y;
}
a(20);
// 写出执行结果
```

公司：快手

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/300)



### 请写出以下代码执行结果

```js
console.log(1);
setTimeout(() => {
  console.log(2);
});
process.nextTick(() => {
  console.log(3);
});
setImmediate(() => {
  console.log(4);
});
new Promise((resolve) => {
  console.log(5);
  resolve();
  console.log(6);
}).then(() => {
  console.log(7);
});
Promise.resolve().then(() => {
  console.log(8);
  process.nextTick(() => {
    console.log(9);
  });
});
// 写出执行结果
```

公司：快手

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/299)



### 请写出以下代码执行结果

```js
[1, 2, 3, 4, 5].map(parseInt);
// 写出执行结果
```

公司：快手

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/298)



### 请写出以下代码执行结果

```js
typeof typeof typeof [];
// 写出执行结果
```

公司：快手

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/297)



### 以下 css 最后是什么颜色

```html
<style>
  div {
    color: red;
  }
  #title {
    color: yellow;
  }
  div.title {
    color: bule;
  }
</style>
<div class="title" id="title">abc</div>
```

公司：快手

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/296)



### 说一下什么是死锁

公司：快手

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/295)



### 实现以下代码

```js
function add() {
  // your code
}
function one() {
  // your code
}
function two() {
  // your code
}
console.log(add(one(two()))); //3
console.log(add(two(one()))); //3
```

公司：快手

分类：JavaScript、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/294)



### 请实现一个 cacheRequest 方法，保证发出多次同一个 ajax 请求时都能拿到数据，而实际上只发出一次请求

公司：快手

分类：JavaScript、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/293)



### 实现一个函数柯里化

公司：快手

分类：JavaScript、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/292)



### 一个人每次只能走一层楼梯或者两层楼梯，问走到第 80 层楼梯一共有多少种方法

公司：快手

分类：算法

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/291)



### 简述 Vue 的基本原理

公司：脉脉

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/290)



### 简述 Vue 的生命周期以及每个阶段做的事

公司：脉脉、58

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/289)



### 说一下 Vue 组件的通信方式都有哪些？(父子组件，兄弟组件，多级嵌套组件等等)

公司：脉脉、58

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/288)



### 说一下 Vuex 的原理以及自己的理解

公司：脉脉

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/287)



### Vue v-model 是如何实现的，语法糖实际是什么

公司：脉脉

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/286)



### 说一下对 React context 的理解

公司：脉脉、酷家乐

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/285)



### 说一下对 React-redux 的理解以及它的原理，主要解决什么问题

公司：阿里、脉脉

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/284)



### 说一下 Redux 的原理，介绍下整体的一个工作流程

公司：脉脉、兑吧、寺库、蘑菇街、百分点

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/283)



### React 如何避免 renderd 的触发

公司：脉脉

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/282)



### 说一下 Vue dom diff 算法

公司：网易

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/281)



### 说一下对 vnode 的理解，vnode 的引入与直接操作原生 dom 相比，哪一个相率更高，为什么

公司：脉脉、菜鸟网络、蘑菇街

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/280)



### 说一下对原型链的理解，画一个经典的原型链图示

公司：脉脉、兑吧、快手

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/279)



### 简述 Grid 布局

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/278)



### 说一下 ajax/axios/fetch 的区别

公司：脉脉

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/277)



### 用 Promise 封装一个 ajax

公司：脉脉

分类：JavaScript、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/276)



### 动手实现一个左右固定100px，中间自适应的三列布局？(至少三种)

公司：自如、头条

分类：Css、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/275)



### 请描述 CSRF、XSS 的基本概念、攻击原理和防御措施？

公司：自如、挖财、腾讯应用宝、沪江、喜马拉雅

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/274)



### 请描述提升页面性能的方式有哪些，如何进行首页加载优化

公司：自如

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/273)



### 描述 DOM 事件捕获的具体流程

公司：自如

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/272)



### Http 报文的请求会有几个部分？请写出 HTTP 报文的组成部分

公司：自如、滴滴

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/271)



### 301，302，304 的区别

公司：自如

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/270)



### 请实现`$on,$emit`

公司：自如

分类：JavaScript、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/269)



### 实现 bind 方法，不能使用 call、apply、bind

公司：自如、腾讯应用宝、快手

分类：JavaScript、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/268)



### 手写实现 sleep 函数

公司：自如

分类：JavaScript、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/267)



### 介绍一下 node 核心模块（主要是 stream）

公司：自如、菜鸟网络

分类：Node

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/266)



### 说一下 webpack 与 gulp 的区别（源码角度）

公司：自如

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/265)



### 请写出原生 js 如何设置元素高度

公司：自如

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/264)



### 说一下 Vue 的\$nextTick 原理

公司：自如

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/263)



### 说一下 vue-router 的原理

公司：自如

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/262)



### node 如何做错误监控（运行时与其他）如何生成日志，日志等级

公司：自如

分类：Node

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/261)



### Node 的适用场景以及优缺点是什么？

公司：道一云

分类：Node

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/260)



### Vue 是如何收集依赖的

公司：自如

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/259)



### 用原生 js 实现自定义事件

公司：自如

分类：JavaScript、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/258)



### 如何识别出字符串中的回车并进行换行？

分类：JavaScript、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/257)



### 屏幕占满和未占满的情况下，使 footer 固定在底部，尽量多种方法

分类：Css、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/256)



### 输入一个日期 返回几秒前、几小时前、几天前、几月前

分类：JavaScript、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/255)



### 将 153812.7 转化为 153,812.7

分类：JavaScript、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/244)



### 给定一个数组，形如 [1, 1, 2 , 3, 3, 3, 3, 4, 6, 6]，给定一个数 n，例如 3，找出给定的数 n 在数组内出现的次数，要求时间复杂度小于 O(n)

分类：算法

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/243)



### 说一下 https 获取加密秘钥的过程

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/414)



### Css 画一个三角形

公司：会小二、高思教育、58

分类：Css、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/413)



### 说一下 Vue 单页与多页的区别

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/412)



### 说一下 Vue 路由实现原理

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/411)



### 数组有哪些方法 讲讲区别跟使用场景

公司：掌门一对一

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/410)



### localstorage、sessionStorage、indexDB 和 cookie 的区别

公司：掌门一对一、滴滴、兑吧、寺库

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/409)



### 讲一下函数式编程

公司：掌门一对一

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/408)



### promise 跟 async await 的区别，使用场景 

公司：网易、虎扑、沪江

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/407)



### async、await 如何进行错误捕获

公司：虎扑

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/406)



### Css 超出省略怎么写，三行超出省略怎么写

公司：虎扑

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/405)



### Css inherit、initial、unset 三者的区别

公司：虎扑

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/404)



### 介绍下 Flex 布局，属性都有哪些，都是干啥的

公司：阿里、虎扑、快手

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/403)



### 点击一个按钮，浏览器会做些什么

公司：虎扑

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/402)



### script 的 async 跟 defer 的区别？

公司：虎扑

分类：Html

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/401)



### React15/16.x 的区别

公司：百分点

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/400)



### weak-Set、weak-Map 和 Set、Map 区别

公司：虎扑

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/399)



### mvvm 模型和 mvc 模型区别

公司：虎扑

分类：其它

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/398)



### 如何实现一个 mvvm 模型

公司：虎扑

分类：其它

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/397)



### Vue3.0 为什么要用 proxy？是怎么用 proxy 实现数据监听的?

公司：虎扑、CVTE

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/396)



### valueOf 与 toString 的区别

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/395)



### TCP 三次握手

公司：菜鸟网络、头条

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/394)



### koa2 和 express 区别

公司：菜鸟网络、海风教育

分类：Node

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/393)



### 怎么判断是一个空对象

公司：菜鸟网络

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/392)



### 请写出下面代码的执行结果

```js
setTimeout(() => {
  console.log(0);
}, 0);
new Promise((res) => setTimeout(res, 0)).then(() => {
  console.log(1);
  setTimeout(() => {
    console.log(2);
  }, 0);
  new Promise((r = r())).then(() => {
    console.log(3);
  });
});
setTimeout(() => {
  console.log(4);
}, 0);
new Promise((res) => res()).then(() => {
  console.log(5);
});
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/391)



### 请写出下面代码的执行结果

```js
function Foo() {
  getName = function () {
    alert(1);
  };
  return this;
}
getName();
Foo.getName = function () {
  alert(2);
};
Foo.prototype.getName = function () {
  alert(3);
};
getName = function () {
  alert(4);
};

// 请写出下面的输出结果
getName();
Foo.getName();
new Foo().getName();
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/390)



### 现在有随机整数数组，例如[2,11,20,160,3,1...]，请挑出数组内，三个随机整数和为 100 的所有数据。

分类：算法

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/388)



### 请只用数组方法和 Math.random()在一条语句的情况下，实现生成给定位数的随机数组，例如生成 10 位随机数组[1.1,102.1,2,3,8,4,90,123,11,123],数组内数字随机生成。

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/387)



### 实现一个 setter 方法

```js
let setter = function (conten, key, value) {
  // your code
};
let n = {
  a: {
    b: {
      c: { d: 1 },
      bx: { y: 1 },
    },
    ax: { y: 1 },
  },
};
// 修改值
setter(n, "a.b.c.d", 3);
console.log(n.a.b.c.d); //3
setter(n, "a.b.bx", 1);
console.log(n.b.bx); //1
```

分类：JavaScript、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/386)



### LocalStorage 加密原理

公司：腾讯应用宝

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/385)



### setTimeout 与 setInterval 区别

公司：腾讯应用宝

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/384)



### 说一下常见的状态码

公司：腾讯应用宝、喜马拉雅

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/383)



### 项目中如何应用数据结构

公司：挖财

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/382)



### 304 页面的原理

公司：腾讯应用宝

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/381)



### RN、Weex、Dart 的优缺点

公司：腾讯应用宝、寺库

分类：其它

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/380)



### 知道语义化吗？说说你理解的语义化，如果是你，平时会怎么做来保证语义化？说说你了解的 HTML5 语义化标签？

公司：蘑菇街

分类：Html

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/379)



### 闭包的核心是什么

公司：寺库

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/378)



### 响应式布局用到的技术，移动端需要注意什么

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/377)



### 写出代码输出结果

```js
var fullname = "Test1";
var obj = {
  fullname: "Test2",
  prop: {
    fullname: "Test3",
    getFullname: function () {
      return this.fullname;
    },
  },
};
console.log(obj.prop.getFullname());
var test = obj.prop.getFullname;
console.log(test());
```

公司：心娱、安居客

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/376)



### 实现一个功能，发送请求 5s 时间后，如果没有数据返回，中断请求,提示错误

分类：JavaScript、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/375)



### 什么是作用域链

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/374)



### 介绍事件冒泡、事件代理、事件捕获，以及它们的关系

公司：腾讯应用宝、安居客

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/373)



### for..of 和 for...in 是否可以直接遍历对象，为什么

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/372)



### 在 map 中和 for 中调用异步函数的区别

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/371)



### gennerator yield 的作用

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/370)



### promise 的状态有哪些

公司：微医

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/369)



### 在 ES6 中有哪些解决异步的方法

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/368)



### es6 类继承中 super 的作用

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/367)



### cros 的简单请求和复杂请求的区别

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/366)



### 统计一组整形数组的最大差值？

公司：心娱

分类：算法

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/365)



### addEventListener 的第三个参数的作用

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/592)



### 上传文件的 Content_Type 什么，node 如何拿到上传的文件内容(不适用第三方插件)？文件内容是一次行传输过去的么

分类：Node

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/591)



### 获取 id 为 netease 节点下所有的 checkbox 子元素(不用框架，注意兼容)

公司：网易

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/590)



### 使用原型链如何实现继承

公司：腾讯应用宝、安居客

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/589)



### 如何获取一个对象的深度

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/588)



### reduce 函数的功能，如何实现的，动手实现一下

分类：JavaScript、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/587)



### 说一下 splice 和 slice 的功能用法

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/586)



### 面向对象的三要素是啥？都是啥意思？

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/585)



### 函数中的 this 有几种

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/584)



### 如何同时获取 html 中的 h1,h2,h3,h4,h5,h6 中的内容

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/583)



### JavaScript 的执行流程

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/582)



### Promise.resolve(obj)，obj 有几种可能

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/581)



### 写出代码执行结果

```js
new Promise((resolve, reject) => {
  reject("1");
})
  .catch((e) => {
    console.log(1);
  })
  .then((res) => {
    console.log(2);
  });
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/580)



### nextTick 是在本次循环执行，还是在下次，setTimeout(() => {}, 0)呢？

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/579)



### A、B 两个条件组件，如何做到 webpack 只打包条件为 true 的组件，false 的组件不打包

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/578)



### 说一下对 vue3.0 的了解，vue3.0 为什么要用代理

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/577)



### 子组件可以直接改变父组件的数据么，说明原因

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/576)



### webpack 怎么处理内联 css 的

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/575)



### webpack 如何做异步加载

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/574)



### 客户端缓存有几种方式？浏览器出现 from disk、from memory 的策略是啥

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/573)



### 什么是 http？什么是 http2？说下 http 与 http2 的工作流程

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/572)



### 客户端如何发送 http 请求

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/571)



### 使用正则去掉 Dom 中的内联样式

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/570)



### 写一个匹配 ip 地址的正则

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/569)



### 写一个匹配 Html 标签的正则

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/568)



### 使用 typescript 的装饰器能否实现函数调用前出现加载动画，调用后关闭，如果能，这个加载动画的控制代码是放在哪种装饰器上呢

分类：其它

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/567)



### unicode 和 utf8 的关系

分类：其它

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/566)



### 介绍下 pm2，pm2 依据什么重启服务

公司：阿里

分类：Node

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/565)



### 什么是微服务，微服务跟单体应用的区别是啥，用微服务有啥好处？

分类：Node

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/564)



### IOC 是啥，应用场景是啥？

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/563)



### 是否了解 docker，介绍一下

分类：其它

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/562)



### 写出代码执行的打印结果

```js
function a(obj) {
  obj.a = 2;
  obj = { a: 3 };
  return obj;
}
const obj = { a: 1 };
a(obj);
console.log(obj);
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/561)



### 实现函数

```js
d1,,,
d2,,,
d3,,,

把上边的字符串输出1，2，3的和 //6
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/560)



### 使用过的 koa2 中间件，中间件的原理是什么？

公司：阿里、宝宝树

分类：Node

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/559)



### koa-body 原理

公司：阿里

分类：Node

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/558)



### 有没有写过中间件，介绍下自己写过的中间件

公司：阿里

分类：Node

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/557)



### 有没有涉及到 Cluster，说一下你的理解

公司：阿里

分类：Node

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/556)



### master 挂了的话 pm2 怎么处理

公司：阿里

分类：Node

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/555)



### Node 如何和 MySQL 进行通信

公司：阿里

分类：Node

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/554)



### 如何配置 React-Router 实现路由切换

公司：阿里、滴滴

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/553)



### 服务端渲染 SSR

公司：阿里

分类：Node

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/552)



### 介绍 Redux 数据流的流程

公司：阿里

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/551)



### Redux 如何实现多个组件之间的通信，多个组件使用相同状态如何进行管理

公司：阿里

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/550)



### React 路由的动态加载模块，实现按需加载

公司：阿里

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/549)



### 多个组件之间如何拆分各自的 state，每块小的组件有自己的状态，它们之间还有一些公共的状态需要维护，这如何思考

公司：阿里

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/548)



### 使用过的 Redux 中间件

公司：阿里

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/547)



### redux 的设计思想

公司：头条

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/546)



### 移动端适配 1px 的问题

公司：阿里

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/545)



### 居中为什么要使用 transform（为什么不使用 marginLeft/marginTop）

公司：阿里

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/544)



### Webpack 里面的插件是怎么实现的

公司：阿里

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/543)



### dev-server 是怎么跑起来的

公司：阿里

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/542)



### Webpack 抽取公共文件是怎么配置的

公司：阿里

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/541)



### 项目中如何处理安全问题

公司：阿里、喜马拉雅

分类：其它

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/540)



### 怎么实现 this 对象的深拷贝

公司：阿里

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/539)



### 使用 canvas 绘图时如何组织成通用组件

公司：宝宝树

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/538)



### 表单可以跨域吗

公司：网易

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/537)



### 搜索请求如何处理？搜索请求中文如何请求？

公司：网易

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/536)



### 介绍观察者模式

公司：网易、海风教育

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/535)



### 介绍中介者模式

公司：网易

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/534)



### 观察者和订阅-发布的区别，各自用在哪里

公司：网易、有赞、微医

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/533)



### 通过什么做到并发请求

公司：网易

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/532)



### http1.1 时如何复用 tcp 连接

公司：网易

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/531)



### 介绍 service worker

公司：网易

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/530)



### 介绍 css3 中 position:sticky

公司：网易

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/529)



### redux 请求中间件如何处理并发

公司：网易

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/528)



### 介绍浏览器事件流向

公司：网易

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/527)



### 介绍事件代理以及优缺点，主要解决什么问题

公司：网易、沪江

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/526)



### React 组件中怎么做事件代理？它的原理是什么？

公司：网易

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/525)



### 介绍下 this 的各种情况

公司：网易、蘑菇街

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/524)



### 前端如何控制管理路由

公司：网易

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/523)



### 使用路由时出现问题如何解决

公司：网易

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/522)



### React 怎么做数据的检查和变化

公司：网易

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/521)



### react-router 里的 Link 标签和 a 标签有什么区别

公司：滴滴

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/520)



### a 标签默认事件禁掉之后做了什么才实现了跳转

公司：滴滴

分类：Html

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/519)



### 整个前端性能提升大致分几类

公司：滴滴

分类：其它

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/518)



### import { Button } from 'antd'，打包的时候只打包 button，分模块加载，是怎么做到的

公司：滴滴

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/517)



### 使用 import 时，webpack 对 node_modules 里的依赖会做什么

公司：滴滴

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/516)



### JavaScript 异步解决方案的发展历程以及优缺点

公司：滴滴、挖财、宝宝树、海康威视

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/515)



### cookie 放哪里，cookie 能做的事情和存在的价值

公司：滴滴

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/514)



### cookie 和 token 都存放在 header 里面，为什么只劫持前者

公司：滴滴

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/513)



### 以下 axios 的特点正确的有哪些？(多选题)

```js
A.axios 可以跨平台，支持 promise 的所有 API
B.可以拦截请求和响应
C.可以转换请求数据和响应数据，并对响应回来的内容自动转换为 json 类型的数据
D.安全性更高，客户端支持防御 XSRF
```

公司：道一云

分类：其它

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/512)



### React 中 Dom 结构发生变化后内部经历了哪些变化

公司：滴滴

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/511)



### React 挂载的时候有 3 个组件，textComponent、composeComponent、domComponent，区别和关系，Dom 结构发生变化时怎么区分 data 的变化，怎么更新，更新怎么调度，如果更新的时候还有其他任务存在怎么处理

公司：滴滴

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/510)



### React 子父组件之间如何传值

公司：饿了么

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/509)



### Redux 中间件是什么东西？接受几个参数？柯里化函数两端的参数具体是什么东西？

公司：滴滴

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/508)



### Redux 中间件· 中间件是怎么拿到 store 和 action？然后怎么处理？

公司：滴滴

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/507)



### state 是怎么注入到组件的，从 reducer 到组件经历了什么样的过程

公司：滴滴

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/506)



### koa 中 response.send、response.rounded、response.json 发生了什么事，浏览器为什么能识别到它是一个 json 结构或是 html

公司：滴滴

分类：Node

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/505)



### koa-bodyparser 如何解析 request

公司：滴滴

分类：Node

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/504)



### 介绍 AST（Abstract Syntax Tree）抽象语法树

公司：滴滴

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/530)



### 安卓 Activity 之间数据是怎么传递的

公司：滴滴

分类：其它

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/502)



### 说下安卓系统中的 webview

公司：滴滴

分类：其它

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/501)



### WebView 和原生是如何通信

公司：滴滴

分类：其它

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/500)



### 对 async、await 的理解，内部原理是怎样的？

公司：头条

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/499)



### 清除浮动的方式

公司：头条

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/498)



### 接入 Redux 过程？绑定 connect 的过程？connect 的原理

公司：头条、宝宝树

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/497)



### == 和 ===的区别，什么情况下用相等==

公司：头条、安居客

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/496)



### bind、call、apply 的区别

公司：头条、挖财、饿了么、心娱

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/495)



### 介绍下原型链

公司：头条

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/494)



### Linux 754 介绍

公司：有赞

分类：其它

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/493)



### 介绍冒泡排序、选择排序，说说冒泡排序如何优化

公司：有赞

分类：算法

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/492)



### transform 动画和直接使用 left、top 改变位置有什么优缺点

公司：有赞、腾讯应用宝

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/491)



### 如何判断链表是否有环

公司：有赞

分类：算法

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/490)



### 介绍二叉搜索树的特点

公司：有赞

分类：算法

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/489)



### 介绍暂时性死区

公司：有赞

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/488)



### ES6 中的 map 和原生的对象有什么区别

公司：有赞

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/487)



### RN 如何调用原生的一些功能、如何和原生进行通信

公司：寺库、宝宝树

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/486)



### react 异步渲染的概念,介绍 Time Slicing 和 Suspense

公司：有赞

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/485)



### 16.X 中 props 改变后在哪个生命周期中处理

公司：有赞

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/494)



### 对纯函数的理解

公司：有赞

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/483)



### 介绍 JSX

公司：有赞

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/482)



### 如何做 RN 在安卓和 IOS 端的适配

公司：有赞

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/481)



### RN 为什么能在原生中绘制成原生组件

公司：有赞

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/480)



### 对虚拟 DOM 的理解？虚拟 DOM 主要做了什么？虚拟 DOM 本身是什么？

公司：有赞、微医、58

分类：React、Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/479)



### cookie 的引用为了解决什么问题

公司：寺库

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/478)



### 如何设计一个 localStorage，保证数据的时效性

公司：有赞

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/477)



### 介绍下 React 高阶组件，和普通组件有什么区别，适用什么场景

公司：有赞、饿了么、喜马拉雅、乘法云

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/476)



### 实现 sum 方法，使 sum(x)(y),sum(x,y)返回的结果相同

公司：有赞、网易、乘法云

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/475)



### 两个对象如何比较

公司：有赞

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/474)



### 说一下变量的作用域链

公司：挖财

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/473)



### 介绍 dom 树对比

公司：挖财

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/472)



### 如何设计状态树

公司：挖财

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/471)



### native 提供了什么能力给 RN

公司：挖财

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/470)



### 如何做工程上的优化

公司：挖财

分类：其它

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/469)



### shouldComponentUpdate 是为了解决什么问题

公司：挖财

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/468)



### 如何解决 props 层级过深的问题

公司：挖财

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/467)



### 前端怎么做单元测试

公司：挖财

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/466)



### pm2 怎么做进程管理，进程挂掉怎么处理

公司：挖财

分类：Node

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/465)



### 不用 pm2 怎么做进程管理

公司：挖财

分类：Node

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/464)



### jsonp 方案需要服务端怎么配合

公司：沪江

分类：Node

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/463)



### Ajax 发生跨域要设置什么（前端）

公司：沪江

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/462)



### 加上 CORS 之后从发起到请求正式成功的过程

公司：沪江

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/461)



### Async 里面有多个 await 请求，可以怎么优化

公司：沪江

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/460)



### React 遇到性能问题一般在哪个生命周期里解决

公司：沪江

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/459)



### Vue 中一次性 200 条弹幕怎么处理

公司：58

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/458)



### React/Redux 中哪些功能用到了哪些设计模式

公司：沪江

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/457)



### JavaScript 变量类型分为几种，区别是什么

公司：沪江、酷狗

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/456)



### JavaScript 里垃圾回收机制是什么，常用的是哪种，怎么处理的

公司：沪江、寺库

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/455)



### 一般怎么组织 CSS（Webpack）

公司：沪江

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/454)



### 一个对象数组，每个子对象包含一个 id 和 name，React 如何渲染出全部的 name？在哪个生命周期里写？其中有几个 name 不存在，通过异步接口获取，如何做？渲染的时候 key 给什么值？可以使用 index 吗？用 id 好还是 index 好？

公司：饿了么

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/452)



### webpack 如何配 sass，需要配哪些 loader，配 css 需要哪些 loader

公司：饿了么

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/451)



### 如何配置把 js、css、html 单独打包成一个文件

公司：饿了么

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/450)



### 上下固定，中间滚动布局如何实现

公司：饿了么

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/449)



### ES5 和 ES6 有什么区别

公司：饿了么

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/448)



### 取数组的最大值（ES5、ES6）

公司：饿了么

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/447)



### some、every、find、filter、map、forEach 有什么区别

公司：饿了么

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/446)



### 页面上生成一万个 button，并且绑定事件，如何做（JS 原生操作 DOM）？循环绑定时的 index 是多少，为什么，怎么解决？

公司：饿了么

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/445)



### 页面上有一个 input，还有一个 p 标签，改变 input 后 p 标签就跟着变化，如何处理？监听 input 的哪个事件，在什么时候触发？

公司：饿了么

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/444)



### 手写数组去重函数(至少三种以上，说明时间复杂度)

公司：携程、心娱

分类：算法

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/443)



### Promise 和 async/await，和 Callback 有什么区别

公司：携程、海风教育

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/442)



### componentWillReceiveProps 的触发条件是什么

公司：喜马拉雅

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/441)



### Redux 怎么实现属性传递，介绍下原理

公司：喜马拉雅

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/440)



### 网站 SEO 怎么处理

公司：喜马拉雅

分类：Html

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/439)



### 403、301、302 是什么

公司：喜马拉雅

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/438)



### HTTPS 怎么建立安全通道，Https 的加密过程

公司：喜马拉雅、寺库

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/437)



### 项目中对于用户体验做过什么优化

公司：喜马拉雅

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/436)



### 介绍下数字签名的原理

公司：喜马拉雅

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/435)



### 前后端通信使用什么方案

公司：喜马拉雅

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/434)



### RESTful 常用的 Method

公司：喜马拉雅

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/433)



### Access-Control-Allow-Origin 在服务端哪里配置

公司：喜马拉雅

分类：其它

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/432)



### 前端和后端怎么联调

公司：喜马拉雅

分类：其它

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/431)



### 如何实现高度自适应

公司：兑吧

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/430)



### prototype 和proto区别

公司：兑吧

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/429)



### new 的实现原理，动手实现一个 new

公司：兑吧

分类：JavaScript、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/428)



### 如何实现 H5 手机端的适配

公司：兑吧、网易、心娱

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/427)



### em 和 px 的区别

公司：兑吧

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/426)



### Redux 状态管理器和变量挂载到 window 中有什么区别

公司：兑吧、蘑菇街

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/425)



### webpack 和 gulp 的优缺点

公司：兑吧

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/424)



### 如何去除 url 中的#号

公司：兑吧

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/423)



### 如何实现分模块打包（多入口）

公司：兑吧

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/422)



### base64 为什么能提升性能，缺点

公司：兑吧

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/421)



### 介绍 webp 这个图片文件格式

公司：兑吧

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/420)



### 介绍 koa2，原理是什么？

公司：兑吧、海风教育

分类：Node

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/419)



### 异步请求，低版本 fetch 如何低版本适配

公司：兑吧

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/418)



### ajax 如何处理跨域？CORSr 如何设置？

公司：兑吧

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/417)



### jsonp 为什么不支持 post 方法

公司：兑吧

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/416)



### 介绍 Immuable

公司：兑吧

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/415)



### 介绍 JS 全部数据类型，基本数据类型和引用数据类型的区别

公司：微医、玄武科技、快手

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/613)



### Array 是 Object 类型吗

公司：微医

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/612)



### 说一下栈和堆的区别，垃圾回收时栈和堆的区别

公司：微医、寺库

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/611)



### 数组里面有 10 万个数据，取第一个元素和第 10 万个元素的时间相差多少

公司：微医

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/610)



### Async/Await 怎么实现

公司：微医

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/609)



### JavaScript 为什么要区分微任务和宏任务

公司：微医

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/608)



### Promise 构造函数是同步还是异步执行，then 呢

公司：微医

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/607)



### JavaScript 执行过程分为哪些阶段

公司：微医

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/605)



### 词法作用域和 this 的区别

公司：微医

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/604)



### loadsh 深拷贝实现原理

公司：微医

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/603)



### ES6 中 let 块作用域是怎么实现的

公司：微医

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/602)



### React 中 setState 后发生了什么？setState 为什么默认是异步？setState 什么时候是同步？

公司：微医

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/601)



### 为什么 3 大框架出现以后就出现很多 native（RN）框架（虚拟 DOM）

公司：微医

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/600)



### Webpack 打包时 Hash 码是怎么生成的？随机值存在一样的情况，如何避免？

公司：微医

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/599)



### Webpack 做了什么？使用 webpack 构建时有无做一些自定义操作？

公司：微医

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/598)



### node 接口转发有无做什么优化？node 起服务如何保证稳定性，平缓降级，重启等

公司：微医

分类：Node

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/597)



### RN 有没有做热加载？RN 遇到的兼容性问题？

公司：寺库

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/596)



### RN 如何实现一个原生的组件？

公司：寺库

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/595)



### RN 混原生和原生混 RN 有什么不同？

公司：寺库

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/594)



### 介绍单页应用和多页应用？

公司：寺库、海康威视

分类：React、Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/593)



### RN 的原理，为什么可以同时在安卓和 IOS 端运行

公司：寺库

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/782)



### 介绍一下网络的五层模型

公司：寺库

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/781)



### 介绍 SSL 与 TLS

公司：寺库

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/780)



### formData 和原生的 ajax 有什么区别

公司：宝宝树

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/779)



### 介绍下表单提交，和 formData 有什么关系

公司：宝宝树

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/778)



### redux 和全局管理有什么区别

公司：宝宝树

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/777)



### 介绍 MVP 怎么组织

公司：宝宝树

分类：其它

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/776)



### promise 如何实现 then 处理，动手实现 then

公司：宝宝树

分类：JavaScript、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/775)



### 服务端怎么做统一的状态处理

公司：宝宝树

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/774)



### 如何对相对路径引用进行优化

公司：宝宝树

分类：Node

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/773)



### 介绍 node 文件查找优先级

公司：宝宝树

分类：Node

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/772)



### npm2 和 npm3+有什么区别

公司：宝宝树

分类：Node

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/771)



### 如何处理异常捕获

公司：海康威视

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/770)



### 项目如何管理模块

公司：海康威视

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/769)



### 尽可能多的写出判断数组的方法

公司：海康威视、新东方

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/768)



### 介绍 localstorage 的 api

公司：海康威视

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/767)



### html 标签 b 和 strong 的区别

公司：蘑菇街

分类：Html

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/766)



### 使用原型最大的好处

公司：蘑菇街

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/765)



### 介绍 React 设计思路，它的理念是什么？

公司：蘑菇街、海风教育

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/764)



### 单例、工厂、观察者项目中实际场景

公司：酷家乐

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/763)



### 添加原生事件不移除为什么会内存泄露，还有哪些地方会存在内存泄漏

公司：酷家乐

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/762)



### setInterval 需要注意的点

公司：酷家乐

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/761)



### 定时器为什么是不精确的

公司：酷家乐

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/760)



### setTimeout(1)和 setTimeout(2)之间的区别

公司：酷家乐

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/759)



### 介绍宏任务和微任务

公司：酷家乐

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/758)



### promise 里面和 then 里面执行有什么区别

公司：酷家乐

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/757)



### props 和 state 的区别

公司：酷家乐

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/756)



### 介绍 class 和 ES5 的类以及区别

公司：酷家乐 

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/755)



### 介绍 defineProperty 方法，什么时候需要用到

公司：酷家乐

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/754)



### for..in 和 Object.keys 的区别

公司：酷家乐

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/753)



### 使用闭包特权函数的使用场景

公司：酷家乐

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/752)



### 哪些方法会触发 react 重新渲染？重新渲染 render 会做些什么？

公司：百分点

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/751)



### state 和 props 触发更新的生命周期分别有什么区别？

公司：百分点

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/750)



### React setState 是同步还是异步？

公司：百分点

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/749)



### 对无状态组件的理解

公司：百分点

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/748)



### 介绍箭头函数的 this

公司：百分点

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/747)



### 找到前 K 个最大的元素

公司：百分点

分类：算法

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/746)



### 对 React 的看法，它的优缺点，使用过程中遇到的问题，如何解决的

公司：海风教育

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/744)



### JavaScript 是什么范式语言

公司：海风教育

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/743)



### Promise 有没有解决异步的问题

公司：海风教育

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/742)



### Promise 和 setTimeout 的区别

公司：海风教育

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/741)



### 进程和线程的区别

公司：海风教育

分类：其它

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/740)



### 介绍下 DFS 深度优先

公司：海风教育

分类：算法

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/739)



### 按照调用实例，实现下面的 Person 方法

```js
Person("Li");
// 输出： Hi! This is Li!

Person("Dan").sleep(10).eat("dinner");
// 输出：
// Hi! This is Dan!
// 等待10秒..
// Wake up after 10
// Eat dinner~

Person("Jerry").eat("dinner").eat("supper");
// 输出：
// Hi This is Jerry!
// Eat dinner~
// Eat supper~

Person("Smith").sleepFirst(5).eat("supper");
// 输出：
// 等待5秒
// Wake up after 5
// Hi This is Smith!
// Eat supper
```

分类：JavaScript、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/738)



### 请写出正确的执行结果

```js
var yideng = {
  bar: function () {
    return this.baz;
  },
  baz: 1,
};
(function () {
  console.log(typeof arguments[0]());
})(yideng.bar);
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/737)



### 请写出正确的执行结果

```js
function test() {
  console.log("out");
}
(function () {
  if (false) {
    function test() {
      console.log("in");
    }
    test();
  }
})();
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/736)



### 请写出正确的执行结果

```js
var x = [typeof x, typeof y][1];
typeof x;
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/735)



### 请写出正确的执行结果

```js
(function (x) {
  delete x;
  return x;
})(1);
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/734)



### 请写出正确的执行结果

```js
var x = 1;
if (function f() {}) {
  x += typeof f;
}
x;
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/733)



### 请写出正确的执行结果

```js
function f() {
  return f;
}
new f() instanceof f;
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/732)



### 请写出代码正确执行结果，并解释原因

```js
Object.prototype.a = "a";
Function.prototype.a = "a1";
function Person() {}
var yideng = new Person();
console.log(yideng.a);
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/731)



### 请写出正确的执行结果

```js
var yideng = [0];
if (yideng) {
  console.log(yideng == true);
} else {
  console.log("yideng");
}
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/730)



### 请写出正确的执行结果

```js
function yideng() {
  return;
  {
    a: 1;
  }
}
var result = yideng();
console.log(result.a);
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/729)



### 按要求完成代码

```js
const timeout = (ms) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
const ajax1 = () =>
  timeout(2000).then(() => {
    console.log("1");
    return 1;
  });
const ajax2 = () =>
  timeout(1000).then(() => {
    console.log("2");
    return 2;
  });
const ajax3 = () =>
  timeout(2000).then(() => {
    console.log("3");
    return 3;
  });
const mergePromise = (ajaxArray) => {
  // 1,2,3 done [1,2,3] 此处写代码 请写出ES6、ES3 2中解法
};
mergePromise([ajax1, ajax2, ajax3]).then((data) => {
  console.log("done");
  console.log(data); // data 为[1,2,3]
});
// 执行结果为：1 2 3 done [1,2,3]
```

公司：阿里

分类：JavaScript、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/728)



### 请写出正确的执行结果

```html
<script>
  //使用未定义的变量yideng
  yideng;
  console.log(1);
</script>
<script>
  console.log(2);
</script>
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/727)



### 请写出正确的执行结果

```js
var yideng = Array(3);
yideng[0] = 2;
var result = yideng.map(function (elem) {
  return "1";
});
console.log(result);
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/726)



### 请修改代码能跳出死循环

```js
while (1) {
  switch ("yideng") {
    case "yideng":
    //禁止直接写一句break
  }
}
```

分类：JavaScript、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/725)



### 修改代码不造成死循环

```js
while(1){
  console.log(Math.random());
}
```

分类：JavaScript、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/911)



### 请写出代码正确执行结果

```js
[1 < 2 < 3, 3 < 2 < 1];
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/723)



### 请写出代码正确执行结果

```js
2 == [[[2]]];
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/722)



### 计算以上字节每位 ✈️ 的起码点，并描述这些字节的起码点代表什么

```js
console.log("✈️".length);
// 1.计算以上字节每位✈️的起码点
// 2.描述这些字节的起码点代表什么
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/721)



### 请写出代码正确执行结果，并解释原因

```js
var yidenga = Function.length,
  yidengb = new Function().length;
console.log(yidenga === yidengb);
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/720)



### 请写出代码正确执行结果

```js
var length = 10;
function fn() {
  console.log(this.length);
}
var yideng = {
  length: 5,
  method: function (fn) {
    fn();
    arguments[0]();
  },
};
yideng.method(fn, 1);
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/719)



### 请写出代码正确执行结果，并解释原因

```js
var yi = new Date("2018-08-20"),
  deng = new Date(2018, 08, 20);
[yi.getDay() === deng.getDay(), yi.getMonth() === deng.getMonth()];
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/718)



### 请写出代码正确执行结果

```js
for (
  let i = (setTimeout(() => console.log("a->", i)), 0);
  setTimeout(() => console.log("b->", i)), i < 2;
  i++
) {
  i++;
}
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/717)



### 请写出代码正确执行结果，并解释原因

```js
[typeof null, null instanceof Object];
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/716)



### 请问当前 textarea 文本框展示的内容是什么？

```html
<textarea maxlength="10" id="yideng"></textarea>
<script>
  document.getElementById("yideng").value = "a".repeat(10) + "b";
</script>
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/715)



### 请写出代码正确执行结果

```js
function sidEffecting(ary) {
  arr[0] = arr[2];
}
function yideng(a, b, c = 3) {
  c = 10;
  sidEffecting(arguments);
  return a + b + c;
}
yideng(1, 1, 1);
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/714)



### 请写出代码正确执行结果

```js
yideng();
var flag = true;
if (flag) {
  function yideng() {
    console.log("yideng1");
  }
} else {
  function yideng() {
    console.log("yideng2");
  }
}
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/713)



### 请写出代码正确执行结果，并解释为什么

```js
var min = Math.min(),
  max = Math.max();
console.log(min < max);
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/712)



### 请手写实现一个拖拽

分类：JavaScript、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/711)



### 请手动实现一个浅拷贝

分类：JavaScript、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/710)



### 介绍 instanceof 原理，并手动实现

分类：JavaScript、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/709)
 


### 请实现一个 JSON.stringfy

分类：JavaScript、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/708)



### 请实现一个 JSON.parse

分类：JavaScript、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/707)



### 说一下减少 dom 数量的办法？一次性给你大量的 dom 怎么优化？

公司：58

分类：Html

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/706)



### vue hooks 有哪些

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/705)



### 介绍 Vue template 到 render 的过程

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/704)



### 为什么用 gulp 打包 node

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/703)



### Node 不支持哪些 ES6 语法

分类：Node

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/702)



### Webpack 为什么慢，如何进行优化

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/701)



### 请写出代码正确执行结果，并解释原因？

```js
console.log("hello" + (1 < 2) ? "word" : "me");
```

公司：会小二

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/700)



### 请写出代码正确执行结果，并解释原因？

```js
var a = (b = 1);
(function () {
  var a = (b = 2);
})();
console.log(a, b);
```

公司：会小二

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/699)



### 请写出代码正确执行结果，并解释原因？

```js
if ([] instanceof Object) {
  console.log(typeof null);
} else {
  console.log(typeof undefined);
}
```

公司：会小二

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/698)



### 请写出代码正确执行结果，并解释原因？

```js
var obj = {};
obj.name = "first";
var peo = obj;
peo.name = "second";
console.log(obj.name);
```

公司：会小二

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/697)



### 请写出代码正确执行结果，并解释原因？

```js
function say(word) {
  let word = "hello";
  console.log(word);
}
say("hello Lili");
```

公司：会小二

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/696)



### 请写出代码的正确执行结果，并解释原因？

```js
function fun(n, o) {
  console.log(o);
  return {
    fun: function (m) {
      return fun(m, n);
    },
  };
}
var b = fun(0).fun(1).fun(2).fun(3);
```

公司：会小二

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/695)



### 以下选项为 css 盒模型属性有哪些？(多选题)

```js
A.font
B.margin
C.padding
D.visible
E.border
```

公司：会小二

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/694)



### 递归公式的时间复杂度为？(单选题)

```js
A.O(n)
B.O(logn)
C.O(nlogn)
D.O(n2)
```

公司：会小二

分类：算法

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/693)



### 以下说法中对协议描述不正确的是？(单选题)

```js
A.HTTP 协议是在 TCP/IP 协议之上的应用层协议
B.HTTP 1.1 缺省支持 keep-alive
C.WebSocket 是由 Socket 发展而来的新规范
D.WebSocket 可以建立持久连接
```

公司：会小二

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/692)



### 以下哪些是 HTTP 请求中浏览器缓存机制会用到的协议头？(多选题)

```js
A.Last-Modified
B.Etag
C.Referer
D.Authorization
```

公司：会小二

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/691)



### 怎么定义 vue-router 的动态路由？怎么获取传过来的动态参数？

公司：会小二

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/690)



### JavaScript 中如何模拟实现方法的重载

公司：会小二

分类：JavaScript、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/689)



### 请解释 JSONP 的工作原理

公司：会小二、安居客

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/688)



### 用 html、css、js 模拟实现一个下拉框，使得下拉框在各个浏览器下的样式和行为完全一致，说出你的设计方案，并且重点说明功能设计时要考虑的因素。

公司：会小二

分类：JavaScript、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/687)



### 用 JavaScript 实现一个标准的排序算法(快排、冒泡、选择排序)，对某个数字数组进行由低到高的排序。

公司：会小二

分类：算法

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/686)



### 实现一个打点计时器

```js
/* 
  1.从start至end,每隔100毫秒console.log一个数字，每次数字增幅为1
  2.返回的对象中需要包含一个cancel方法，用于停止定时操作
  3.第一个数字需要立即输出
*/
```

公司：会小二

分类：JavaScript、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/685)



### 下面关于 Vue 说法正确的是？(单选题)

```js
A.data 中某一属性的值发生改变后，视图会立即同步进行重新渲染
B.Vue 实例创建后再添加的属性，该属性改动将不会触发视图更新
C.计算属性只有在它的相关依赖发生改变时才会重新求值
D.Vue 组件的 data 选项必须是函数
```

公司：会小二

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/684)



### JavaScript 写一个单例模式，可以具体到某一个场景

公司：会小二

分类：JavaScript、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/683)



### JavaScript 基本数据类型都有哪些？用 typeOf 判断分别显示什么？

公司：会小二、安居客

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/682)



### 怎么判断引用类型数据，兼容判断原始类型数据呢？

公司：会小二

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/681)



### 请写下你对协商缓存和强缓存的理解？

公司：会小二、58

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/680)



### git pull -rebase 和 git pull 的区别是什么？

公司：会小二

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/679)



### 说下盒模型的区别？介绍一下标准的 CSS 盒模型？border-box 和 content-box 有什么区别？

公司：快手、会小二

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/678)



### 给出页面的加载顺序

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/677)



### Html5 有哪些新特性？如何处理 Html5 新标签的浏览器兼容问题？如何区分 Html 和 Html5?

分类：Html

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/676)



### 找出“aaaabbcccdddd”字符串中出现最多的字母？

公司：心娱

分类：算法

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/675)



### 概述异步编程模型

公司：酷狗

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/674)



### 在一个 ul 里有 10 个 li,实现点击对应的 li,输出对应的下标

分类：JavaScript、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/673)



### 分别对以下数组进行去重，1:[1,'1',2,'2',3]，2:[1,[1,2,3['1','2','3'],4],5,6]

分类：JavaScript、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/672)



### 简述 JavaScript 中的函数的几种调用方式

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/671)



### 编写一个 Person 类，并创建两个不同的 Person 对象

分类：JavaScript、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/670)



### 详细描述一个 http 请求从发起请求到收到响应的全部过程(越细越好)

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/669)



### 简述静态链接和动态链接的区别，并举例说明

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/668)



### 求 n 以内的所有素数，并说明时间复杂度

分类：算法

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/667)



### 手写实现 call

公司：腾讯应用宝

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/666)



### 手写实现 apply

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/665)



### 一个 dom 必须要操作几百次，该如何解决，如何优化？

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/664)



### 为什么要用 Vuex 或者 Redux，不要说为了保存状态

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/663)



### 为什么 Vue data 必须是函数

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/662)



### 页面埋点怎么实现 

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/660)



### 除了 jsonp、postmessage 后端控制，怎么实现跨页面通讯

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/659)



### Vue data 中某一个属性的值发生改变后，视图会立即同步执行重新渲染吗？

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/658)



### Webpack 打包出来的体积太大，如何优化体积？

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/657)



### 缓存有哪些？前端缓存有哪些？怎么用？如何和后台配合

公司：高思教育

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/656)



### 说一下 let、const 的实现，动手实现一下

分类：JavaScript、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/655)



### 简述 mixin、extends 的覆盖逻辑

公司：58

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/654)



### Vue 子组件和父组件执行顺序

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/653)



### Dom tree 和 cssdom 是如何合并成 render tree 的

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/652)



### addEventListener 再 removeListener 会不会造成内存泄漏

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/651)



### scrollview 如何进行性能优化(例如 page=100 时，往上滚动)

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/650)



### 原生 JavaScript 获取 ul 中的第二个 li 里边的 p 标签的内容

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/648)



### 说下 offsetWith 和 clientWidth、offsetHeight 和 clientHeight 的区别，说说 offsetTop，offsetLeft，scrollWidth、scrollHeight 属性都是干啥的

公司：快手

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/647)



### Css 单位都有哪些？

公司：快手

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/646)



### Css 实现多列等高布局，要求元素实际占用的高度以多列中较高的为准

公司：快手

分类：Css、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/645)



### 一个标签的 class 样式的渲染顺序，id、class、标签、伪类的优先级

公司：快手

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/644)



### 写一个函数打乱一个数组，传入一个数组，返回一个打乱的新数组

公司：快手

分类：JavaScript、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/643)



### 数组截取插入 splice，push 返回值，数组的栈方法、队列方法、排序方法、操作方法、迭代方法说一下

公司：快手

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/642)



### 判断一个变量的类型，写个方法用 Object.prototype.toString 判断传入数据的类型

公司：快手

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/641)



### 判断一个变量的类型，写个方法用 Object.prototype.toString 判断传入数据的类型？Object.prototype.toString.call(Symbol) 返回什么？

公司：快手

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/640)



### 对作用域和闭包的理解，解释下 let 和 const 的块级作用域

公司：快手

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/639)



### 以下代码输出什么？

```js
setTimeout(function () {
  console.log(1);
}, 0);
new Promise(function executor(resolve) {
  console.log(2);
  for (var i = 0; i < 10000; i++) {
    i == 9999 && resolve();
  }
  console.log(3);
}).then(function () {
  console.log(4);
});
console.log(5);
```

公司：心娱

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/638)



### switch case，case 具体是怎么比较的，哪些情况下会走到 default

公司：快手

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/637)



### 说下 typeof()各种类型的返回值？instanceof 呢？

公司：快手

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/636)



### if([] == 0), [1,2] == "1,2", if([]), [] == 0 具体是怎么对比的

公司：快手

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/635)



### 如何加快页面渲染速度，都有哪些方式

公司：快手

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/634)



### generator 的实现原理

公司：滴滴、58

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/633)



### CDN 分布式部署，如何处理用户请求最近的资源？

公司：快手

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/632)



### 说一下缓存有哪几种，具体都是怎么实现和比较的，缓存优先级，相互之间的对比

公司：快手

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/631)



### 使用 typescript 的优势有哪些

公司：快手

分类：其它

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/630)



### 说下你对浏览器缓存理解

公司：头条

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/629)



### css 如何实现动画

公司：头条

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/628)



### 判断是否是数组的方法

公司：头条

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/627)



### 给定一个二叉树，找出其最大深度。二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。说明: 叶子节点是指没有子节点的节点

公司：头条

分类：算法

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/626)



### 给定一个整数数组 nums，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和

公司：头条

分类：算法

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/625)



### 手写 EventEmitter 实现

公司：头条、亚美科技

分类：JavaScript、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/624)



### Http 连接是如何复用的

公司：酷狗

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/623)



### 给出的两行代码为什么这么输出

```js
var s = "laohu";
s[0] = 1;
console.log(s); //laohu
var s = "laohu";
s += 2020;
console.log(s); // laohu2020
// 上面两行为什么这么输出
```

公司：老虎

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/622)



### 动画性能如何检测

公司：酷狗

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/621)



### 谈下淘宝和京东页面的实现

公司：酷狗

分类：其它

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/620)



### 平时都用到了哪些设计模式

公司：酷狗、沪江、58

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/619)



### 如何监控 MySql、Redis 性能

公司：酷狗

分类：其它

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/618)



### 对 service worker 的理解

公司：酷狗

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/617)



### Webpack 热更新的原理

公司：酷狗

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/616)



### Css 如何实现一个半圆

公司：酷狗

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/615)



### 一个活动项目里包含多个活动，Webpack 如何实现单独打包某个活动？

公司：酷狗

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/614)



### 单点登录实现原理

公司：CVTE

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/862)



### 尾递归实现

公司：CVTE

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/861)



### 有 1000 个 dom，需要更新其中的 100 个，如何操作才能减少 dom 的操作？

公司：爱范儿

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/860)



### 商城的列表页跳转到商品的详情页，详情页数据接口很慢，前端可以怎么优化用户体验？

公司：爱范儿

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/859)



### 多个 tab 只对应一个内容框，点击每个 tab 都会请求接口并渲染到内容框，怎么确保频繁点击 tab 但能够确保数据正常显示？

公司：爱范儿

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/858)



### 301、302 的 https 被挟持怎么办？

公司：网易

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/857)



### 介绍 Http2 特性，Http2 怎么确保文件同时传输不会报错

公司：网易

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/856)



### 请实现鼠标点击页面中的任意标签，alert 该标签的名称(注意兼容性)

公司：爱范儿、道一云

分类：JavaScript、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/854)



### 完成一个表达式，验证用户输入是否是电子邮箱

公司：爱范儿

分类：JavaScript、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/853)



### 原生实现 ES5 的 Object.create()方法

公司：爱范儿

分类：JavaScript、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/852)



### 列举并解释一下 http 的所有请求方法，

公司：爱范儿、乘法云

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/851)



### 如何记录前端在用户浏览器上发生的错误并汇报给服务器？

公司：爱范儿

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/850)



### 有哪几种方式可以解决跨域问题？(描述对应的原理)

公司：爱范儿

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/849)



### 按要求完成题目

```js
/* 
  a)在不使用vue、react的前提下写代码解决一下问题
    一个List页面上，含有1000个条目的待办列表，现其中100项在同一时间达到了过期时间，需要在对应项的text-node里添加“已过期”文字。需要尽可能减少dom重绘次数以提升性能。
  b)尝试使用vue或react解决上述问题
*/
```

公司：爱范儿

分类：JavaScript、Vue、React、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/848)



### 你是如何组织 JavaScript 代码的？（可以从模块、组件、模式、编程思想等方面回答）

公司：爱范儿

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/847)



### 移动 web 开发时如何调试？了解哪些多屏适配方案？

公司：爱范儿

分类：其它

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/846)



### 算法考察：Next Permutation

```js
/* 
  Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.
  If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).
  The replacement must be in-place, do not allocate extra memory.
  Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.
  1,2,3 → 1,3,2
  3,2,1 → 1,2,3
  1,1,5 → 1,5,1
*/
```

公司：爱范儿

分类：算法

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/845)



### 填充代码实现 template 方法

```js
var str = "您好，<%=name%>。欢迎来到<%=location%>";
function template(str) {
  // your code
}
var compiled = template(srt);
// compiled的输出值为：“您好，张三。欢迎来到网易游戏”
compiled({ name: "张三", location: "网易游戏" });
```

公司：网易

分类：JavaScript、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/844)



### 请说明 Html 布局元素的分类有哪些？并描述每种布局元素的应用场景？

公司：玄武科技

分类：Html

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/843)



### 列举出在浏览器中，页面加载过程中发出了哪些事件？并画出这些事件的执行顺序？

公司：玄武科技

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/842)



### 请描述下为什么页面需要做优化？并写出常用的页面优化实现方案？

公司：玄武科技

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/841)



### 请画出 css 盒模型，基于盒模型的原理，说明相对定位、绝对定位、浮动实现样式是如何实现的？

公司：玄武科技

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/840)



### 列举出 css 选择器有哪些分类，并至少写出三个 css 选择器之间的区别，适用场景

公司：玄武科技

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/839)



### 请列出至少 5 个 JavaScript 常用的内置对象，说明用途

公司：玄武科技

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/838)



### 请描述下 JavaScript 中 Scope、Closure、Prototype 概念，并说明 JavaScript 封装、继承实现原理。

公司：玄武科技

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/837)



### 请列出目前主流的 JavaScript 模块化实现的技术有哪些？说出它们的区别？

公司：玄武科技

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/836)



### 请列出 HTTP/1.1 协议 Response 状态码：20x、30x、40x、50x 等各区间的含义，并说明 Action 在 Restful API 中分别使用哪些 Http 副词(action)表现出 CRUD?

公司：玄武科技

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/835)



### 请说明 JavaScript 进行压缩、合并、打包实现的原理是什么？为什么需要压缩、合并、打包？分别列出一种常用工具或插件

公司：玄武科技

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/834)



### 请说出前端框架设计模式(MVVM 或 MVP 又或 MVC)的含义以及原理

公司：玄武科技

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/833)



### 请用 JavaScript 代码实现事件代理

公司：玄武科技

分类：JavaScript、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/832)



### 实现格式化输出，比如输入 999999999，输出 999,999,999

公司：亚美科技

分类：JavaScript、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/831)



### 使用 JavaScript 实现 cookie 的设置、读取、删除

公司：亚美科技

分类：JavaScript、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/830)



### 请编写一个 JavaScript 函数 parseQueryString,它的用途是把 URL 参数解析为一个对象，url="http://iauto360.cn/index.php?key0=0&key1=1&key2=2"

公司：亚美科技

分类：JavaScript、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/829)



### node 如何进行跨域通信

公司：高思教育

分类：Node

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/828)



### Vuex 和 localStorage 的区别

公司：高思教育

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/827)



### 如何实现 a,b 两个变量的交换

公司：高思教育

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/825)



### Vue 双向绑定原理

公司：高思教育、安居客

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/824)



### 开发环境热更新的优化方式

公司：高思教育

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/823)



### 给 JavaScript 的 String 原生对象添加一个名为 trim 的原型方法，用于截取字符串前后的空白字符

公司：高思教育

分类：JavaScript、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/822)



### 按要求实现代码

```js
/* 
  根据传入参数n(数字)对一维数组(纯数字)按照距离n最近的顺序排序。(距离即数字与n的差值的绝对值)
*/
var arr = [7, 28, -1, 0, 7, 33];
function sort(n) {
  // your code
}
```

公司：高思教育

分类：算法

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/821)



### 说一下路由钩子在 Vue 生命周期的体现？

公司：58

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/820)



### 计算属性和普通属性的区别

公司：58

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/819)



### 描述下自定义指令(你是怎么用自定义指令的)

公司：58

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/818)



### 说一下 Vue 中所有带\$的方法

公司：58

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/817)



### catch-control 有哪些设定值

公司：58

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/816)



### AMD 和 CMD 有哪些区别？

公司：58

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/815)



### 微任务和宏任务的区别

公司：58

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/814)



### 你是怎么配置开发环境的？

公司：58

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/813)



### 列举 3 种强制类型转换和 2 种隐式类型转换

公司：58

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/812)



### 小程序里面打开页面最多多少，生命周期、常用的 api 列举几个？

公司：饿了么、安居客

分类：小程序

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/811)



### Vue-router 除了 router-link 怎么实现跳转

公司：安居客

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/810)



### 原生 JavaScript 实现图片懒加载的思路

公司：安居客

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/809)



### 回调函数和任务队列的区别

公司：安居客

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/808)



### 如何实现 webpack 持久化缓存

公司：乘法云

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/807)



### 找出两个数组的交集元素

公司：乘法云

分类：算法

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/806)



### Css 实现 div 宽度自适应，宽高保持等比缩放

公司：快手

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/805)

<br/

### ul 内部除最后一个 li 以外设置右边框效果

公司：快手

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/804)



### flex:1 的完整写法是？分别是什么意思？

公司：快手

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/803)



### 写出下面代码的输出结果

```js
//counter.js
let counter = 10;
export default counter;

//index.js
import myCounter from "./counter";
myCounter += 1;
console.log(myCounter);
```

公司：快手

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/802)



### 用 typescript 实现函数 caller，接收一个函数作为第一个参数，其返回参数类型由接收的函数参数决定

公司：快手

分类：其它、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/801)



### 有这样一个函数 A,要求在不改变原有函数 A 功能以及调用方式的情况下，使得每次调用该函数都能在控制台打印出“HelloWorld”

```js
function A() {
  console.log("调用了函数A");
}
```

公司：新东方

分类：JavaScript、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/800)



### 在浏览器执行以下代码，写出打印结果

```js
console.log("start");
setTimeout(() => {
  console.log("children2");
  Promise.resolve().then(() => {
    console.log("children3");
  });
}, 0);
new Promise(function (resolve, reject) {
  console.log("children4");
  setTimeout(function () {
    console.log("children5");
    resolve("children6");
  }, 0);
}).then((res) => {
  console.log("children7");
  setTimeout(() => {
    console.log(res);
  }, 0);
});
```

公司：新东方

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/799)



### 输入一个整数，输出该数二进制表示中 1 的个数

公司：新东方

分类：算法

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/798)



### 行内元素和块级元素有什么区别

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/797)



### link 和@inmport 区别

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/796)



### ⽤ js 实现随机选取 10–100 之间的 10 个且不重复的数字，存⼊⼀个数组，还要排序

分类：算法

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/795)



### 请写出弹出值，并解释为什么？

```js
alert(a);
a();
var a = 3;
function a() {
  alert(10);
}
alert(a);
a = 6;
a();
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/794)



### 写出输出值，并解释为什么

```js
function test(m) {
  m = { v: 5 };
}
var m = { k: 30 };
test(m);
alert(m.v);
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/793)



### 请写出代码执⾏结果，并解释为什么

```js
function yideng() {
  console.log(1);
}
(function () {
  if (false) {
    function yideng() {
      console.log(2);
    }
  }
  console.log(typeof yideng);
  yideng();
})();
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/792)



### 请写出代码执⾏结果，并解释为什么

```js
function fn() {
  console.log(this.length);
}
var person = {
  length: 5,
  method: function (fn) {
    fn();
  },
};
person.method(fn, 1);
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/790)



### 给定⼀个⼤⼩为 n 的数组，找到其中的众数。众数是指在数组中出现次数⼤于 n/2 的元素

分类：算法

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/789)



### HTTP2.0的多路复⽤和HTTP1.X中的⻓连接复⽤有什么区别？

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/788)



### HTTP2.0多路复⽤有多好？

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/787)



### React兄弟组件的通信方式？(需回答两种以上)

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/786)



### Fiber算法原理，相比之前的stack算法哪些方面做了优化？

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/785)



### 如何实现双向绑定，并抽象成公共组件

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/784)



### 原生实现addClass,用多种方法

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/783)



### 实现一个倒计时,setInterval实现的话，如何消除时间误差

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/871)

<br/

### React SSR实现过程？原理是什么？有什么注意事项？

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/869)



### Node性能如何进监控以及优化？

分类：Node

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/869)



### http请求由什么组成？

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/868)



### 屏幕正中间有个元素A，元素A中有文字A，随着屏幕宽度的增加，始终需要满足下列条件

```js
/* 
  A元素垂直居中于屏幕中央
  A元素距离屏幕左右边距各10px
  A元素里面的文字A的font-size:20px；水平垂直居中
  A元素的高度始终是A元素宽度的50%；(如果搞不定可以实现为A元素的高度固定为200px)
  
  请用html及css实现
*/
```

公司：头条

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/867)



### 函数中的arguments是数组吗？若不是，如何将它转化为真正的数组？

公司：头条

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/866)



### 请写出以下代码的打印结果

```js
if([] == false){console.log(1)};
if({} == false) {console.log(2)};
if([]){console.log(3)};
if([1] == [1]){console.log(4)};
```

公司：头条

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/865)



### 以最小的改动解决以下代码的错误(可以使用ES6)

```js
const obj = {
  name:"jsCoder",
  skill:["es6","react","angular"],
  say:function(){
    for(var i = 0,len = this.skill.length;i<len;i++){
      setTimeout(function(){
        console.log('No.' + i + this.name);
        console.log(this.skill[i]);
        console.log('----------------');
      },0);
      console.log(i);
    }
  }
}
obj.say();

/* 
  期望得到下面的结果
  1
  2
  3
  No.1 jsCoder
  es6
  ----------------
  No.2 jsCoder
  react
  ----------------
  No.3 jsCoder
  angular
*/
```

公司：头条

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/864)



### 实现Function 原型的bind方法，使得以下程序最后能输出“success”

```js
function Animal(name,color){
  this.name = name;
  this.color = color;
}
Animal.prototype.say = function(){
  return `I'm a ${this.color}${this.name}`;
}
const Cat = Animal.bind(null,'cat');
const cat = new Cat('white');
if(cat.say() === "I'm white cat" && cat instanceof Cat && cat instanceof Animal){
  console.log('sunccess');
}
```

公司：头条

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/863)

