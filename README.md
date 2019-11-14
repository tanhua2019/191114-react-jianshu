#React中的虚拟Dom
1. state数据
2. JSX 模板
3. 数据 + 模板 生成虚拟DOM （虚拟DOM就是一个JS对象，用它来描述真实的DOM） （损耗了性能）
['div', {id: 'abc}, ['span', {} , 'hello world']] 通过一个js对象完整的描述了上面的dom结构，这就是虚拟dom
4.  用虚拟DOM结构生成真实的DOM， 来显示
<!-- <div id='abc'><span>hello world</span></div> -->
5. state 发生改变 
6. 数据 + 模板 生成新的虚拟DOM （虚拟DOM就是一个JS对象，用它来描述真实的DOM）
['div', {id: 'abc}, ['span'], {} , 'bye'] 
7. 比较原始DOM和新的虚拟DOM的区别，找到区别是span中内容
8. 直接操作DOM，改变span中的内容

总结： 当你生成一个真实的dom的时候，性能的损耗是非常大的，当生成一个虚拟dom的时候本质上是生成一个JS对象，JS对象创建的过程，性能的损耗是极低的，在第六步的时候节约了大量的性能。第七部的时候比较的是虚拟dom和新的虚拟dom 原始的JS对象和新的JS对象 对象之间的比对是非常不消耗性能的。
虚拟dom本质上就是一个JS对象，之所以能够提高性能本质上因为JS比较JS对象不怎么消耗性能，比较真实Dom很耗性能

#虚拟DOM的diff算法（diffirence）
- setState 是异步的，为了提升react底层的性能。 连续调用三次setState react可以把三次setState合并成一次setState,只做一次虚拟dom的比对，省去其他两次dom比对性能的消耗
- 同级比较 逐层比对
##为什么react在做列表循环的时候要引入key值
 - 为了提高虚拟dom比对时的性能，
 - 能不用index做key值尽量不用index做key值，因为index是不稳定的，
 例如: 移除第一个元素 key会变化，失去它原有的意义
 原始虚拟dom 1 a 2 b 3 c 
 新的虚拟dom 1 b 2 c
 - 同层比对和key值得比对都是diff比对