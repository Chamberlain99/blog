---
title: 手写一个call或apply
date: 2022-03-14 21:22:07
permalink: /pages/e9535b/
categories:
  - note
  - jsNote
tags:
  - 
---
# 手写一个call或apply
```javascript
// 思路：将要改变this指向的方法挂到目标this上执行并返回
Function.prototype.mycall = function(context) {
  if (typeof this !== "function") {
    throw new TypeError("not funciton");
  }
  context = context || window;
  context.fn = this;
  let arg = [...arguments].slice(1);
  let result = context.fn(...arg);
  delete context.fn;
  return result;
};
// 思路：将要改变this指向的方法挂到目标this上执行并返回
Function.prototype.myapply = function(context) {
  if (typeof this !== "function") {
    throw new TypeError("not funciton");
  }
  context = context || window;
  context.fn = this;
  let result;
  if (arguments[1]) {
    result = context.fn(...arguments[1]);
  } else {
    result = context.fn();
  }
  delete context.fn;
  return result;
};

```