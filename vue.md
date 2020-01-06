#  vue学习
### 一 基本语法
- 属性值动态绑定 简写 :href="" :src="",用到for循环里面的属性时不加{{}}
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
- 过滤器：filters:{过滤器名(参数){方法体}}，调用（参数|过滤器）
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
    { fllname(就是一个属性名) :function(){return "123"} } fullname就是 属性名，取出来用直接就写{{fullname}}
- v-model 表单绑定
    - v-model.lazy实现点击回车时，失去焦点时才进行变量更新
    - v-model.numbber实现只能输入数字
    - v-model.trim 实现消除空格
```html
<!--双向绑定，输入框的值 v-model="变量名"，不需要加插值{{}}-->
<input type="text" :value="message" @input="valueChange">
<!--注意$event ,可以取出值-->
<input type="text" :value="message" @input="message=$event.target.value">
<script>
//  - input也有自己的事件 @input="绑定方法"
valueChange(event){
    this.message =event.target.value;
}
</script>
```
 - radio 与v-model的使用 ，name属性是传到后台的key
![](./images/22.png)
 - checkbox单选框 与v-model的使用
![](./images/23.png)
 - checkbox多选框 与v-model的使用
 ![](./images/24.png)
 - select单选 与v-model的使用
 ![](./images/25.png)
  - select多选 与v-model的使用
 ![](./images/26.png)
 - 值绑定
  ![](./images/27.png)
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
*  数组遍历：
```javascript
for(let i =0;i<数组的长度;i++){
     
}
for(let i in 数组){
    数组[i]为单个项目
}
for(let item of 数组){
    这里的item就是一个项目
}
```
* 直接更改数组的元素值，vue不会直接修改，更新dom，要采用其他方法 splice
* vue.set(数组，索引 ，修改后的值)
* 数字.toFixed(保留的位数)
* 数组filter函数  取出大于100的数到新的数组
```javascript 1.8
const nums=[10,20,30,40,5555,666]
// 接收的是一个新的数组, 回调函数
let newNums =nums.filter(function (t) { 
    return t>100; //必须返回布尔值，
 })
 
```
* 数组map函数 
```javascript 1.8
const nums=[10,20,30,40,5555,666]
let newNums =nums.map(function (t) { 
    return t*2;
 })

```
* 数组reduce函数,对数组内的每个元素进行汇总，递归相加
```javascript 1.8
const nums=[10,20,30,40,5555,666]
let  total =nums.reduce(function (p1, p2) {  //p1为上一个值，p2可以是一个对象
    return p1+p2;
 },0)//这里的0就是total的初值，下次循环将初值赋给p1，循环相加
```
```javascript 1.8
// 大于100的数乘2后相加的和
const nums=[10,20,30,40,5555,666]
nums.filter(function (t) { 
    return t>100;
 }).map(function (t) { 
     return t*2;
  }).reduce(function (p1, p2) { 
      p1+p2;
   },0)
```
### 组件
#### 1. 父子组件
- 在A里面注册B，将A注册在vue实例里 A就是父组件，B为子组件
- 在子组件内data不能是对象；必须是函数,这样多次调用不会产生影响，是在堆开辟内存，每次调用都是不同的内存地址
     data(){
      return{
          title:"123",
      }
     }
#### 2. 父子组件通信
##### 1.父组件向子组件传值（变量名是驼峰是，使用-）
   - (1)在子组件定义一个props:['变量名’，'变量名2’]
      (2)props:{变量名:数据类型} String ,Number,Boolean,Array,Object,Date,Function,Symbol
      (3)props:{变量名:{type:变量类型,default:默认值，required:true}}，当父组件没传时，就用子组件.如果default是一个数组则需要
         写成函数的样子default(){return[]/{}}
      (4)props:{validator:function(){自定义验证}}
   -  (2)在调用方也就是父组件通过v-bind:变量名="父组件内代传递的值”,父组件传值时，变量名使用驼峰时用-代替
   -  (3)子组件传值时就直接使用变量名
##### 2.子组件向父组件传值
        在子组件内 this.$emit(事件的名字，参数)
        在父组件内监听事件 v-on:事件的名字="父组件的方法也就是父亲要做的事情"，父组件会默认把参数带过去
        父组件的方法例子：demo(子传递过来的参数){}
### 练习
- 点击数组中的元素，该元素变颜色，其中的active 为一个css样式
![](./images/21.png)