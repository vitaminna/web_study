### 伪类选择器
```html
    a:link{
    	//未访问的链接
    }
    a:visted{
    	//已经访问过的链接
    }
    a:hover{
    	//鼠标放上去
    }
    a:active{
    	//选中状态
    }
```
### 主要识别点
> even是偶数，odd基数（nth-child(even)）
![](./images/1.png)
```html
1.text-align 水平居中 center/left/right
2.line-height 行高(比字体大8个像素）
3.首行缩进 text-indent 2em
4.字间距 letter-spacing  2px
5.单词间距 word-spacing 
6.半透明效果 rgb(a,b,c,d) d是取值范围0-1
7.文字阴影 text-shadow (水平，垂直，模糊，颜色rgba（）)ab是必须要写的（水平，上下时），后面两个参数可以省略
```
> div是块级元素，
> 行内元素（a,span,)给出宽高无意义，不会显示
> 行内块元素  宽和高可以修改(img,input,td)
###模式转换
```text
  - 块级元素转换为行内元素：dispaly：inline
  - 行内元素转换为块级元素 ：display：block
  - 行内元素转换为行内块元素 ：dispaly：inline-block
```
### 交集选择器
```text
 - 标签.class类选择器 只会选择标签名对的且类名是给出的。
 - 并集选择器：div,p,sapan，.class类名，#id名采用逗号连接集体声明
 - 后代选择器：父级选择器/标签  子集的选择器/标签
 - 子元素选择器 ：使用> 只会选择亲儿子(这个可以一层一层的嵌套，儿子的儿子的儿子)
 - 属性选择器：[]内写属性（type，titile,等属性）
   - 带有title属性的a标签:a[]{}；
   - 带有title属性的a标签:a[属性=值]{}；
   -  [属性^=值]  选择与值相等开头的标签；
   -  [属性$= 值]选择以值结尾的标签；
   - [*=值]只要包含值得标签都选择
```
###伪元素选择器
```text
  - div::before{content:内容 }放在所选择的标签内部的前面
  - div::after{content:内容}放在所选择的标签内部的后面
```
### 背景图
```text
- (可以控制平铺，位于div中的位置)多背景时，将颜色加载左后一个图上
- 网页中的坐标轴（以左上角为坐标原点,向右为正，向下为正）
   - background-postion：10px，10px; 第一个是水平的位置
   - background-postion：top,center;
   - background-postion：center,10px;混搭
   - backgrond-size:背景图片的大小：一般只改一个值，等比缩放
   - background:rgba();设置透明的背景
   - backgrond-size：cover（会自动进行等比缩放，图片可能少一点，溢出部分隐藏）
   - backgrond-size：contain（只要有一部分达到div，就不会进行缩放，盒子会剩余一部分，图片会完整显示），
- 将a标签设置相应的高度，宽度，在一行展示，需要将display：inline-block.
   在一行文本中，设定行高等于盒子的高度，就可以达到，文字垂直居中
- 文本的装饰 text-decoration ： none，underline，overline ，line-through
```
```html
a{
    height:50px;
    width:100px;
    display:inline-block;
    text-align:center; //水平居中
    line-height：50px;// 垂直居中
    background-color：red// 盒子的背景色
    color：文字的颜色
    font-size： 文字的大小
}1
```
---
### 权重问题(优先级)
```text
权重叠加（标签/类。标签。标签，权重相加）数值之间没有进制，0，0,0,10
继承的权重为0；使用自己的属性，只要自己有就使用自己的
```
![](./images/2.png)
![](./images/4.png)
![](./images/5.png)
![](./images/6.png)````````````

###  盒子模型
- 盒子的边框设置
```css
border-color：red，      /*颜色*/
border-style：solid，dashed，dotted， /*边框样式*/
border-width：1px，/*边框粗细*/
border-top-size/color/style /*某个边框*/ 
```
- 表格相关信息
```html
<style>
    table{
    border-collapse: collapse; /* 合并相邻的边框*/
    }
</style>

<table cellpadding="0" cellpadding="0">
   <tr>
        <td></td>
   </tr>
</table>
```
```text
- 圆角矩形
    - border-radius:10px；四个角相同，取宽高的一半50%就是圆形
    - border-radius:10px 40px； 左上角，右下角10px, 右上左下40px
    - 高度减半， border-radius：100px;成为一个椭圆
-　padding　内边距；内容距离边框的距离
    padding-left/right/bottom/top
    padding:两个值：上下，左右
    padding：三个值：上，左右，下
    padding：四个值：上右下左，顺时针
- margin 外边距，必须是块元素
    margin:30px auto 左右居中
- 插入图片(产品展示)
```
```html
    width:200px;
    height:50px; //修改图片大小
    margin-left：修改图片位置 ，因为图片也是一个盒子

```   
- 背景图片 (适合做一些背景图片，小图标)
  background-size：200px 600px;　//更该图片的大小
  background-postion:30px //图片位置
  
  
#### 补充问题
  - 行内元素只有左右的间距，没有上下span{margin:30px}左右的
  - 块元素外边距合并，只出现在上下。以最大的为准，直接给一个人就好，距离上面直接确定的距离
  - 外边距合并，对于外层加一个边框，可以使内部下沉,或者给父元素加一个额overflow：hidden
  - 所有的输入框也要清除边框 boder ：0
  ![](./images/8.png)
  ![](./images/9.png)
### 盒子尺寸 
   - 空间尺寸：width+border+padding+margin
   - 内核尺寸，实际尺寸：width+border+padding
   - 如果盒子未指定宽度，padding-left就不会影响大小
   ![](./images/7.png)
 ### 例子
 ![](./images/10.png)
 - 取消列表自带的小点 list-style：none
 -  取消表格轮廓线：outline　none
 
 
### css3盒子（盒子阴影）
 - box-sizing： content-box
 - box-sizing： border-box
![](./images/11.png)

### 浮动
```text
- 普通流：块自上而下 ，行左往右（块元素直接设置成行内块，两个之间会有间距 不要用div{dispalay:inline-block}）
- 浮动：只可以左右浮动（页面上面的div是浮动的，下面的就会往上去，占用他原本的位置，，呈现出上面压着下面的样子）
- 块元素加了浮动，就会有行内块的属性，宽度为给定的情况下，会按实际内容显示宽度
- 行内元素加了浮动，也会具有行内块的属性，盒子大小由内容决定，可以更改大小
```
### 清除浮动
 - 标准流父级元素可以不给高度
 - 浮动出现的话，要清除浮动 
   - 在浮动盒子的后面追加空标签设置属性 clear： both
   - 在父元素添加 overflow:hidden
   - 伪元素清除.
          - clearfix:after{
            content：".",
            display:block,
            height:0,
            visibility:hidden;
            clear:both;}
          - clearfix{
             *zoom:1
             }
   -双伪元素清除浮动
   - clear:after,clearfix:before{
        content:"",
        display:table;
   }
   .clearfix:after{
        clear:both;
   } 
   .clearfix{
        *zoom:1;
   }
   
### 定位
    - postion：static
    - postion：relative 相对偏移，他原本的位置还在，没人能够占有
    - postion： absolote 绝对定位，不占有位置，完全脱离标准流的，飘起来的    
    - （绝对定位）如果父亲没有定位，子元素会以浏览器的左上角为原点，进行定位
    - （绝对定位)如果父亲有定位，子元素以父亲为基准找定位，或找爷爷辈的定位为基准
    - 子绝父相
    - 行内元素如果添加了绝对定位或者相对定位，或者浮动后就不需要些转换模式
    - 加了定位的子盒子，实现在父元素中的居中，使用left、right：50%（子绝父相），往左走margin-left：50%
    - 固定定位：不占有位置，完全脱标，只以浏览器为标准，与父亲无关，一直在顶部或底部，不滚动：postion：fixed
    - 叠放次序：z-index：1 数值大在上（没单位)
    - 定位总结
![](./images/16.png)
### 显示隐藏
    - display：none 隐藏后，不占有位置
    - visbility：hidden/visible 隐藏后占用位置
    - overflow 内容溢出 ：
      - visible 默认的，超出显示，
      - auto 自动，超出才显示，
      - scroll :一直显示
      - hidden ：超出隐藏（用的最多）
      
### flex
    - display:flex;
    - justify-content：水平对齐
    - align-items:垂直对齐：stretch
    - align-content：
                             
