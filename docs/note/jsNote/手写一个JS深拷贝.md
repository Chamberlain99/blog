---
title: 手写一个JS深拷贝
date: 2022-03-14 21:22:07
permalink: /pages/1282c5/
categories:
  - note
  - jsNote
tags:
  - 
---
# 手写一个JS深拷贝(由浅入深多种解法)
```javascript
const obj = {
  test: {
    a: 2
  },
  arr: [],
  fn: function() {
    console.log("clone function");
  }
};
function clone(target) {
    let cloneTarget = {};
    for (const key in target) {
        cloneTarget[key] = target[key];
    }
    return cloneTarget;
};
const obj2 = clone(obj);
console.log("无法克隆函数体",obj2.fn);

```
