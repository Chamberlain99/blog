---
title: 利用Xshell更新前端项目
date: 2022-05-28 15:02:35
permalink: /pages/b15df1/
categories:
  - note
  - 环境搭建、项目部署
tags:
  - 
---


# 利用Xshell更新前端项目




前端如何自己更新项目呢？
本文将将介绍在没有运维同事同事的情况下，如果自己用xshell进行前端项目部署~
<!-- more -->

用户xxxx  密码xxx

用户root   密码xxx （拥有最高操作权限）

---

`test` `dfnoisdf`f sdfhsdf`dfsdjf` sdfsdjfo 



信通外网 - 远程服务器地址：

```json
xx.xx.xx.xx  端口xx
```

# 常用命令

```shell
# 切换当前所在目录 cd / 表示切换到根目录   ..表示切换到到上一级目录 ~ 表示切换到用户目录；   /home切换到home目录
cd

# 移动和重命名文件 把a文件重命名为b文件
mv a b  

# 由于shell 在间隔一段时间后，对自动断开与远程服务器的链接，所以需要输入reconnect 重新lina
reconnect 

# 创建目录content
mkdir content

#ls命令可以查看文件的详细信息
ls

# 删除content目录以及它所包含的全部内容
rm -rf content 
# 删除文件
rm afile


# clear 清除画面、地址栏的历史记录、本地Shell命令提示的命令历史记录
clear

# 文件上传
rz

```



- 免费版本工具下载：[链接](https://www.xshell.com/zh/free-for-home-school/)

## 基础知识 

作用：`XShell`可以在Windows界面下来访问远端不同系统下的服务器，从而比较好的达到远程控制终端的目的。它支持 RLOGIN、SFTP、SERIAL、TELNET、SSH2 和 SSH1，可以非常方便的对Linux主机进行远程管理。

掘金文章：[安装配置教程](https://juejin.cn/post/7082684292798611470)

## 登录账户

```shell
#切换到root账户
su
# 输入密码
xintong.2021
```

## 备份文件

- 2. 上传文件

打包文件上传到要部署的服务器

方法一（XShell6）

```shell
#上传文件 （ 进入到/opt/app-service/zeen-safe-web-html  目录，然后拖动文件进来 ）
rz 
#选择文件上传
```

方法二

```shell
#如果不是root，要给用户赋予上传的权限
chown -R 用户 ./
#scp方式上传
scp [filename] [user]@[ip] 远程传输文件
scp -r ./* root@ip:/opt/app-service/目录
#输入root账号密码
```

## 备份

- /opt/app-service/zeen-safe-web-html    	管理平台前端静态代码
- /opt/app-service/zeen-safe-web-h5            驾驶舱静态代码

其中dist为静态文件夹，backup为备份目录（务必备份）

```shell
#删除backup中的备份文件
cd backup
rm -rf dist0530 
```

```shell
#备份  mv dist/ backup/dist+
mv  dist/ backup/dist+日期    
```

```shell
# 由于dist.zip下面还有一个dist文件
mv dist.zip.0 dist.zip
```

## 解压文件

```shell
# 加压dist.zip 这个压缩文件夹
unzip dist.zip

```

## 如何使用本地电脑作为服务器http-server

很多情况下，需要在本地开启http服务器。所以就需要一个好用的http服务器。

**介绍：**http-server是一个简单的零配置命令行http服务器，它对于生产使用来说是足够强大的，但是它的测试，本地开发和学习足够简单易用。

**前提：**安装node.js ( 全局安装 )

```shell
npm install http-server -g
```

**方法：**不用配置直接在当前文件件cmd，就能够使用，简单易用，轻松方便

- [github地址](https://github.com/http-party/http-server)

在windows 进入dist（静态资源）目录下，进入命令控制台

```she
# 启动服务
http-server -p "IP+PORT"
```







