---
title: select
date: 2022-03-14 21:22:07
permalink: /pages/acd017/
categories:
  - note
  - algorithm
tags:
  - 
---
# 选择排序

```js
function select (array) {
    let len = array.length
    let min ;
    for(let outer=0;outer<len-1;outer++){
        min = outer;
        for(let inner=outer+1;inner<=len-1;inner++){
            if(array[min]>array[inner]){
                min = inner
            }
        }
        [array[outer],array[min]] = [array[min],array[outer]]
        console.log(array)
    }
}

console.log(select([9,3,4,1,6,8,5]))
```