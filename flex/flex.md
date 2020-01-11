# flex布局
### 一、概念
- 1.开启flex布局的元素叫`flex container`
- 2.`flex container`里面的元素叫`flex items`
- 3.`display`属性可以为`inline-flex`(以块元素存在)和`flex`（以行内元素存在）
- 4.布局模型，原来的x轴改为主轴，原来的y轴为交叉轴。原点为起始位置（图38）

![](./images/38.png)
![](./images/39.png)
![](./images/40.png)
![](./images/41.png)
![](./images/42.png)
![](./images/43.png)
### 二、container的css属性
- 1.`flex direction` 演着主轴的start到end排列 
     - `row`从左上角往右
     - `row-reverse`从右上角往左
     - `column`从左上往下
     - `column-reverse`左下往上 
- 2.`justify-content` 决定item在主轴上的对齐方式
- 3.`align-items` 决定item在交叉轴上的对齐方式
- 4.基线就是第一行文字的下方对齐
- 5.`flex-wrap`默认是在一行显示，默认是nowrap,若需要修改，则改为wrap ，还有一个wrap-reverse 少用
- 6.flex-flow 是flex-direction与flex-wrap的结合
- 7. align-content决定多行的flex items在交叉轴上的对齐方式
### 三、item的css属性
- 1.order ，值越小越靠前，每个单独的设置，决定显示顺序
- 2.align-self，决定自己在交叉轴上的显示位置。覆盖父元素的设置
- 3.flex-grow 可以设置成大于0的任意数，将盒子剩余的宽度按比例分给小伙伴，比例想等就是平分
- 4.比例之和小于1，每个元素的长度+比例*剩余宽度
- 5.flex-shink，超出父元素宽度的数值，比例大于1将剩余宽度按比例*超出父元素的数值
- 6.比例小于1，每个盒子收缩长度=自己的比例*超出宽度。有可能收缩后还是超出父元素
- 7.flex-basis 定义在主轴的宽度，覆盖掉上面的width，优先级较高，少用
- 8.flex：是flex-grow，flex-shrink，flex-basis的缩写
- 9.如果只给了1个数，没给单位，代指flex-grow
- 10.有宽度的值，代指flex-basis 
- 11. 关键字，none，auto，initial
- 给了2个参数，第一个无单位是代表shrink，第二个是basis
- 给3个，按顺序




