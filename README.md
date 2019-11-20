# redux 概念简述
react可以写出一些比较简单的一些项目，但是只能写出很简单的一些项目，原因是什么呢，原因是react是一个非常轻量级的是视图层框架，打开官网可以看到大大的一行字，A JavaScript library for building user interfaces，一个js库，干什么用的呢，创建UI接口的。也就是他是一个非常简单的视图层的框架。为什么这么说呢，如果我的组件非常的多，经常要在组件之间共享一些数据，进行传值。用react编写应用会发现这个应用会变得非常的恶心。所以说react只是轻量级的视图层框架。

[redux概念图](https://img2018.cnblogs.com/blog/331769/201903/331769-20190316213630952-1287790330.png)
如图，在没有redux，只有react的时候，组件之间的传值会非常的麻烦，假设引入了redux。组件的传值为什么就简单了呢，看右侧的这张图。假设绿色的组件要给很多个灰色的组件传值，怎么去传呢。如果用redux。很简单，redux里面要求把数据都放在一个公共的存储区域，叫做store。组件之中尽量少放数据。也就是所有组件的数据都不放在组件自身了，我们都把他放到哪里去呢？放在一个公用的存储空间里面，叫做store这里

当绿色组件想要改变数据传递给其它组件的时候怎么办？我只要在绿色组件改变对应的数据就行了。接着灰色区域的这些组件会自动的感知到有变化了。只要store里面数据有变化，灰色组件会自动去store里面重新取数据。这样绿色组件的数据就非常轻松的传递给其它组件中。

redux就是把我们组件之中的数据放在公用的存储区域去存储，然后组件改变数据就不需要传递了。改变store里面的数据之后，其它的组件会感知到我store里面的数据发生改变。他再去取就会取到你要的数据。这样，不管层次结构有多深，走的流程都是一样的。所以会把数据的传递简化很多。这就是redux基础的设计理念。

接着，其实 Redux = Reducer + Flux。这又是什么冬冬，react在2013年开源的时候，facebook的团队除了放出react这个框架之外，他还放出了一个框架，叫做flux。flux这个框架实际上就是官方推出的最原始的辅助react使用的数据层框架。当然在他推出之后，业界的人在使用之后发现flux实际上有一些缺点。比如说他的公共存储区域store这个部分可以有很多个store所组成。这样的话，数据存储的时候，就可能存在一个数据依赖的问题。总之他不是特别的好用，于是有人，就把flux做了一个升级，升级成了我们目前使用的redux。在redux里面除了借鉴flux以前很多的设计理念之外呢，他又引入了一个reducer的概念。因为flux这个框架实际上目前已经有些过时了。所以就没必要去在意他的一些细节点了。

## redux的工作流程
 [redux工作流程图例](https://img2018.cnblogs.com/blog/331769/201903/331769-20190317080420294-2142319255.png)
redux就是一个数据层的框架，他把所有的数据都放在了store之中，每个组件都要去store里面拿数据。然后每个组件也可以去改store里面的数据，那么我们想那个react component指的是什么，指的是就是组件。

那么这张图上的两个点就清楚了，react component指的是页面上的每个组件。store指的是存储事件的公共区域。那么action creators 和 reduces又是什么东西呢？我们来讲解一下，举个例子，react components是一个借书的用户。当我在图书馆借书的时候，一般要跟图书馆的管理员说我要借什么书，那么要借什么书，这个数据的传递，就理解成action creators。大家可以把action creators想成我说的这句话，要借什么书。图书馆的管理员，他负责整个图书馆的管理，所以这个store就可以理解成图书馆的管理员。再往下，我们说图书馆的管理员是没办法知道图书馆所有的存储情况的，所以一般来说他都需要有一个记录本，要借什么书，他先查一下，看一下这个书有没有，你要还什么书，也要查一下，放到哪个位置，那么这个本就是图上的reduces。那么整个流程就串起来了

react componets: 我，借书人
action creators: 我说的这句话，我要借一本书
store: 图书管理员
reducers: 记录本

接下来，把这个实际的例子转化成代码中去理解。怎么去理解呢？

首先我有一个组件，我的组件要去store中获取一些数据，然后就跟store说，我要获取数据，说的这句话就是creators。action creator创建了一句话，告诉了store。store接收到你说，我要一些数据。那么store并不知道具体我要什么数据，他得去查一下应该给你什么数据，那到底给什么数据呢，reducers里面，他知道给什么样的数据。所以reducers会告诉store，应该给什么样的数据。store知道了之后给到对应的数据，就可以了。

如果想改变store里面的数据怎么办？

一样的，组件需要先跟store说，我要改变你的数据，所以先通过action creators说，我要改变你的数据，store接收到这句话，知道你要改变数据了，可是他不知道怎样去帮助你改变数据，他得去问谁呢？得去问reducers,reducers接收到你传过来的话之后，会知道如何去修改，然后会告诉store，你应该怎么去修改数据。store修改好了之后，会告诉组件说，我的数据改完了，你可以重新来获取数据了。这就是redux的工作流。

# TodoList
- 繁体简体切换 ctrl + shift + F
- potPlayer 恢复默认设置 F5 初始化
- 引入antd 组件库 import 'antd/dist/antd.css'
- 引入组件 import { Input } from 'antd'
- 注意 设置样式的时候 style={{width: 300}} 用花括号 和vue不同

## store的创建
- 引入redux 库
- 创建store
```JavaScript
import { createStore } from 'redux'
import reducer from './reducer' // 把笔记本传给store
const store = createStore(reducer);
export default store;
```
- 创建一个笔记本reducer
```JavaScript
const defaultState = {}
export default (state = defaultState, action) => {
  return state;
}
```
- reducer 需要返回一个函数，接受两个内容，一个state和action,默认返回state
- state指的是整个仓库里存储的数据 

- 在constructor中获取store数据getState()

## 安装redux devtools插件安装

## 精华
首先你要改变store里的数据，先要派发一个action，通过dispatch方法传递给store，store把之前的数据转发给reduece,reducer是一个函数,接收到state和action做一些处理之后返回一个新的state给store，store用新的数据替换掉之前的数据，store数据发生改变的时候react组件感知到store中的数据发生了变化，从store重新取数据，更新组件的内容，页面就发生改变了。
