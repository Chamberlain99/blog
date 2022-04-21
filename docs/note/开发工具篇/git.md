---
title: git
date: 2022-04-21 10:21:08
permalink: /pages/b23597/
categories:
  - note
  - 开发工具篇
tags:
  - 
---
## 本地仓库关联2个远程仓库

1、新建远程仓库repository

2、创建本地仓库

```js
git init
```

3、修改.gitignore文件

​	如果没有的话、手动创建一个文件、里面加入忽略更新的内容：如`.idea` . `node_modules`等

4、提交代码\文件 ( 提交到本地 )

```jd
git add .
git commit -m "commit message"
```

5、设置本地仓库与远程的关联

- 仓库  关联1 - gitee

```js
git remote add origin "repository address1 from gitee "
```

- 仓库  关联2 - github

```
git remote add origin "repository address1 from github "
```

6、推送代码push

```
git push github master
git push gitee master
```



## 注意事项

### 用户配置( 全局 )

```js
>: git config --global user.name '用户名'
>: git config --global user.email '用户邮箱'

注：在全局文件 C:\Users\用户文件夹\.gitconfig新建用户信息，在所有仓库下都可以使用
```

### 局部用户配置

```js
>: git config user.name '用户名'
    -- 用户名
>: git config user.email '用户邮箱'
    -- 用户邮箱
    
注：在当前仓库下的config新建用户信息，只能在当前仓库下使用
注：一个仓库有局部用户，优先使用局部用户，没有配置再找全局用户
在  项目文件夹\.git\config  可以找到配置的局部用户信息

```

### 过滤文件gitignore

```js
# .gitignore 文件
# 1）在仓库根目录下创建该文件
# 2）文件与文件夹均可以被过滤
# 3）文件过滤语法

""" 过滤文件内容
文件或文件夹名：代表所有目录下的同名文件或文件夹都被过滤
/文件或文件夹名：代表仓库根目录下的文件或文件夹被过滤

eg：
a.txt：项目中所有a.txt文件和文件夹都会被过滤
/a.txt：项目中只有根目录下a.txt文件和文件夹会被过滤
/b/a.txt：项目中只有根目录下的b文件夹下的a.txt文件和文件夹会被过滤
```



### gitee创建远程仓库

```js
1.注册码云账号并登录：https://gitee.com/
2.创建仓库
3.本地与服务器仓库建立连接
"""
"""
1）本地配置线上的账号与邮箱
>: git config --global user.name "doctor_owen"
>: git config --global user.email "doctor_owen@163.com"

2）在本地初始化仓库(git init)，并完成项目的初步搭建(项目架构)(一般都是项目负责人完成项目启动)
# 这个过程就是git的基础部分的本地操作

3）采用 https协议 或 ssh协议 与远程git仓库通信提交提交代码(一般都是项目负责人完成)
    i) https协议方式，无需配置，但是每次提交都有验证管理员账号密码
    >: git remote add origin https://gitee.com/doctor_owen/luffy.git  # 配置远程源
    >: git push -u origin master  # 提交本地仓库到远程源
    
    ii) ssh协议，需要配置，配置完成之后就可以正常提交代码
    >: git remote add origin git@gitee.com:doctor_owen/luffy.git  # 配置远程源
    >: git push -u origin master  # 提交本地仓库到远程源
    
    iii）查看源及源链接信息
    >: git remote
    >: git remote -v
    
    iv）删除源链接
    >: git remote remove 源名字 
    
注：origin远程源的源名，可以自定义；master是分支名，是默认的主分支

```



### 常见问题

- 如果2个分支的代码已经同步过了，比如branch A 、branch B
- branch A如果修改了代码，则当branch B修改代码后，合并到A时、A代码中对应B的位置还是不会被B覆盖













