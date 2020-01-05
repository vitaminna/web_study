#  vue学习
### 一 基本语法
- 属性值动态绑定 简写 :href="" :src=""
```text
       1. v-bind 属性值绑定<img v-bind:src="属性值"></img> 属性值动态绑定
           2. <a v-bind:href="属性值"></a>
           3. 绑定classs属性：
               1) 对象语法：v-bind:class/:class ="{class值:布尔值，class值:布尔值}"
                   如果本身也有其他class ，则会合并所有的class属性
               2) 也可以绑定 :class="getClass()"
                   methods:{
                       getClass:function(){
                           return {class值：this.布尔变量}
                       }
                   }
               3) 数组语法：用的较少
            4. 绑定style
               1) :style={属性名：属性值}如果属性值是直接写的，不是动态的则就直接用单引号括起来
                   属性可以不加，但是属性值要加引号，但是如果动态绑定，在data里面也要加引号，
                   多个属性值用,分开
```
- 方法绑定 v:on:click="方法名" @click="" click事件名()
    -  注意 ：如果方法后没有参数，引用时可以不加(),
    -  如果定义函数时加了参数，但是调用时没加括号，系统会传入event
    -  如果调用时加了括号，没传参，为默认参数为undefined
    -  若想传入自己的参数，和默认的event,event参数用$event 传入
    -  如果传入的参数是数字的话，直接写，如果传入的是字符串必须加引号，若果不加引号就会被当成变量
    -  阻止事件冒泡：在内层的事件上添加@click.stop
    -  阻止默认事件：@click.prevent 比如说:提交按钮
    -  监听按键点击 @keyup.enter/键盘符="事件名" enter抬起会触发事件
    -  只希望点击一次：.once
![](./images/20.png)
- v-once 属性值固定，展示后不能够更改<h2 v-once>{{插值}}</h2>
- v-html 将服务器返回来的html格式的文本，展示成html页面 标签 v-html="{{}}"
- v-text 将文本展示<h2 v-text={{}>你好啊</h2> 覆盖你好啊
- v-pre <h2 v-pre>{{你好啊}}</h2> 不解析{{}} ，直接展示成{{你好啊 }}
- 插值表达式可以调用方法{{方法()}}
- v-if 条件判断 <标签 v-if="变量(布尔值)"><标签 v-else-if="布尔表达式"><标签 v-else> 
   - 多数情况下不适用，多用computed{}
- dom复用 ，给dom加上自己唯一的key，就不会出现复用
- v-show 只是隐藏，不会删除 
- v-for="(单个item，index) in 数组", 遍历对象v-for="item  in 对象"这样获取的都是value
    遍历对象v-for="(value,key,index) in 对象"
    注意：v-for，最好加上:key属性，提升效率
- computed(计算)这个值只计算一次，有缓存，性能较好
    { fllname(就是一个属性名) :function(){return "123"} } fullname就是属性名，取出来用直接就写{{fullname}}
![](./images/19.png)
### 二 ES6语法
* const 定义变量必须进行初始化，const指向的对象不能改变，但是内部的属性可以改变
* 对象的增强写法 const obj ={name："lucy"},若果上面有一些变量
    直接写成 const obj ={name，age}，其中name，age 为变量
* 函数增强 直接写方法名(e){};
* 数组.splice(位置，删除长度，待添加元素) 带数组删除或添加，替换元素
* 数组末尾追加元素 数组.push(元素) 元素可以为多个
                  * 删除最后一个元素 pop（元素）
* 删除第一个元素：shift（元素）
* 在数组开始加元素 ：unshift(元素) 元素可以为多个
* 可变参数个数 fun add(...nums){} 调用 add(1,2,2,3,4)
* 数组反转 reverse
* 数组排序 
* 直接更改数组的元素值，vue不会直接修改，更新dom，要采用其他方法 splice
* vue.set(数组，索引 ，修改后的值)