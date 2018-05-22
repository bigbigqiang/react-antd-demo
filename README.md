### 一个react后台管理框架

github上有很多优秀的框架，作者也花费了很大的精力去整理，这里感谢作者@yezihaohao

### 依赖模块
利用react官方推荐 create-react-app创建
* react
* react-router-dom
* antd
* axios
* react-redux

根据antd官方推荐，使用 react-app-rewired对create-react-app进行配置。
如果有必要，您也可以 npm run eject暴露webpack配置文件

#### 我自己根据自己的逻辑习惯修改了框架结构包括webpack配置，router，redux和进一步优化

#### 按需加载优化 

没有按需加载前是这样的

![Image text](../../../bigbigqiang/raw/master/imgs/pre.png)
   
可以看到页面加载了一个bundle.js文件，文件大小达到1.9M，代码量是26万行，虽然是后台管理，但是对于这样把所有js全部打包到一个js里面，页面初次加载出现长时间等待的情况，是完全不能忍的！！！！
所以必须进行按需加载！
   
![Image text](../../../bigbigqiang/raw/master/imgs/after.png)
   
优化之后，可以看到页面会加载类似1.chumk.js,这样就实现了按需加载（可在/routers/routes.js查看代码）

#### 框架适合小白使用，逻辑比较简单，持续更新中

最后说一下对react的看法，由于本人先前使用的vue,对于react的接触还是有抵抗，截止到今天算是对react有一定的认识，但并没有改变我对react的看法。
相比于vue,react更没有太多考虑框架是可使用性，我在写react代码的时候更多的感觉是在写原生js，这更说明了react封装的很差；
很多时候用vue写10行的代码，react可能要100行，比如条件渲染，vue:v-if,react:还要js判断，wtf!
还有列表渲染，vue:v-for;react:还要写一个map,一脸嫌弃！
更不用说表单了，事件冒泡等等。
react简直就是为了装逼而生！
有人说react更适合大型项目，我对此也是呵呵，你乐意用你用，反正我用vue的项目也不小。

不过我比较喜欢antd这个ui，但是对vue的支持不是很好，为了这个我勉强使用以下react吧。

这是我个人对react的看法，并没有太大反感，只是客观比较。


![Image text](../../../bigbigqiang/raw/master/imgs/ban.png)

![Image text](../../../bigbigqiang/raw/master/imgs/button.png)

![Image text](../../../bigbigqiang/raw/master/imgs/form.png)

![Image text](../../../bigbigqiang/raw/master/imgs/table.png)

```
//添加依赖
npm install

//运行
npm start

```