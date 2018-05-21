### 一个react后台管理框架

#### github上有很多优秀的框架，作者也花费了很大的精力去整理，这里感谢作者@yezihaohao

#### 不过我自己根据自己的逻辑习惯修改了框架结构包括webpack，router，后续会添加redux和进一步优化

#### 按需加载优化 

    没有按需加载

   ![Image text](../../../bigbigqiang/raw/master/imgs/pre.png)
   
   可以看到页面加载了一个bundle.js文件，文件大小达到1.9M，代码量是26万行，虽然是后台管理，但是对于这样把所有js全部打包到一个js里面，页面初次加载出现长时间等待的情况，是完全不能忍的！！！！
   所以必须进行按需加载！
   
   ![Image text](../../../bigbigqiang/raw/master/imgs/after.png)

#### 框架适合小白使用，逻辑比较简单，后续会重点优化，持续更新中

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