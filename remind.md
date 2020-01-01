- 伪类选择器
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
- 主要识别点
> even是偶数，odd基数（nth-child(even)）
![](./images/1.png)
```html
1.text-align 水平居中 center/left/right
2.line-height 行高(比字体大8个像素）
3.首行缩进 text-indent 2em
4.字间距 letter-spacing  2px
5.单词间距 word-spacing 
6.半透明效果 rgb(a,b,c,d) d是取值范围0-1
7.文字阴影 text-shadow (a,b,c,d)ab是必须要写的，后面两个参数可以省略
```