---
title: insert
date: 2022-03-14 21:22:07
permalink: /pages/940dc5/
categories:
  - note
  - algorithm
tags:
  - 
---
# 插入排序

```js
function insert (array) {
    let temp,inner;
    for( let outer = 1;outer<array.length;outer++){
        temp = array[outer];
        inner = outer;
        console.log(inner)
        while(inner>0&&array[inner-1]>=temp){
            array[inner] = array[inner-1];
            console.log(array)
            inner--;
        }
        array[inner]=temp;
    }
}

console.log(insert([9,3,4,1,6,8,5]));
```