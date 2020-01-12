#           supermall学习与制作
### 一、项目步骤
- 1.使用脚手架创建项目，git项目管理
- 2.完善项目目录结构
- 3.引入css，个性化配置webpack，配置项目的路径别名，引入文件.editorconfig




### 注意的地方
- 1.在配置路径别名的时候不需要写resolve，这个与脚手架2有一定的区别，可以对别一下

- 2.快速构建一个列表显示"ul>{列表$}>li*100"

- 3.使用绝对定位，z-index显示在最上面，在给他其他的最外层组件一个padding-top=固定定位组件的高度

- 4.父子组件传递数组时候如果传递的是数组，也要加：看下面的例子

  ```text
  <tab-control :titles="['mary','lily']"> </tab-control> 
  这个tab-control是一个子组件，titles要求是一个数组，若不加： 传递的是一个字符串
  所以需要加：
  ```
 ### better-Scroll的使用
 - 在最外层写个wrapper,里面写一个元素，在这个元素内部可以添加更多的元素div是wrapper 里面写一个ul ul 里面有很多li
 - 这个warpper所管理的容器必须设置一定的高度，overflow:hidden是隐藏超出的内容
```html

```
  

  

