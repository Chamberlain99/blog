---
title: create
date: 2022-03-14 21:22:07
permalink: /pages/895434/
categories:
  - note
  - jsNote
tags:
  - 
---
# 手写实现Object.create
```javascript
// 思路：将传入的对象作为原型
function create(obj) {
  if (typeof proto !== 'object' || proto === null) throw new Error('');
  const obj = {};
  obj.__proto__ = proto;
  return obj;
}
```
