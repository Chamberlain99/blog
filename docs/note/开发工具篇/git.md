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

通常我们在使用git工具将自己的代码git到仓库时，经常会遇到一些问题，比如。如何才能将不需要的文件夹去掉？删掉的话十分不方便。但是这个时候，`.gitignore`应运而生，顾名思义，意思就是忽略掉`git`内容。但是如何用好，又是一个问题。

在使用`.gitignore`时，必须遵循语法。首先一起来看看语法是什么样的？

- `#` 表示为注释，将被git 忽略
- `*.a` 表示忽略所有的 .a 结尾的文件
- `!lib.a` 表示但lib.a除外的文件
- `/TODO` 表示仅仅忽略项目根目录下的TODO文件，不包括FIile/TODO文件
- `bulid/` 表示忽略bulid目录下所有的文件，包括过滤掉bulid的文件。
- `doc/*.txt` 表示会忽略掉doc/notes.txt的文件。但是不会忽略掉/doc/file/info.txt的文件。
- `bin/:` 表示会忽略掉当前路径下的bin文件夹该文件夹下的所有内容都会被忽略，不忽略bin文件。
- `/bin:` 表示会忽略根目录下的bin文件。
- `/*.c:` 表示会忽略掉cat.c。但是不会忽略buid/cat.c
- `**/foo:` 表示会忽略foo,a/foo,a/b/foo包含foo的文件。
- `a/**/b:` 表示会忽略带掉a/b,a/xxx/b, a/x/y/xxx/b 等文件夹，跟上一个类似，但是指定了那个目录下。
- `!/bin/run.sh` 表示不忽略bin/run.sh 。排除
- `config.php` 表示会忽略掉当前路径下config.php 文件
- `/mtk/` 表示会忽略掉mtk整个文件。
- `*.zip` 表示过滤掉所有的.zip文件。
- `/mtk/doc.c` 表示会忽略掉mtk文件下的doc.c文件

#### 值得注意的是，gitignore过滤掉这些文件之后，当然本地库还有，但是push不会上传到代码仓库。

`.gitignore`忽略规则查看。

如果发现`.gitignore`写的有问题，但是又不知道哪里出了问题，可以使用`git check-ignore`命令检查。
`$ git check-ignore -v helloWordl.class`
`.gitignore: 1.calss helloWorld.calss`

#### 看到匹配的内容，我们就可以看到自己哪些是可以被忽略掉的呢





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













