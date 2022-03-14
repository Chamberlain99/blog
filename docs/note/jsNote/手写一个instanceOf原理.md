---
title: 手写一个instanceOf原理
date: 2022-03-14 21:22:07
permalink: /pages/a40dc5/
categories:
  - note
  - jsNote
tags:
  - 
---
# 手写一个instanceOf原理

```javascript
function instanceOf(left,right) {

    let proto = left.__proto__;
    let prototype = right.prototype
    while(true) {
        if(proto === null) return false
        if(proto === prototype) return true
        proto = proto.__proto__;
    }
}
```