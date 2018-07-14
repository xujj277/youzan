# vue重构有赞商城

#### 功能介绍：
- 推荐图实现轮播效果。
- 触底加载并配有回到顶部功能。
- 分类页和导航页等页面都实现了点击跳转到对应的页面。
- 商品的价格只保留两位小数。
- 购物车商品数量增减改。
- 收货地址的增减改和设置默认地址。

#### 技术细节： 
- 用axios获取数据并进行列表和条件渲染，用模版语法来插值和更新HTML特性。用mint-ui触底加载更多数据。用swiper插件写轮播组件。底部导航组件用qs对url处理成对象并写href的相应跳转页面。用mixin对组件进行混合使用并写保留两位小数方法。
- 回到顶部按钮的显示与隐藏要监听touchmove的移动距离，这部分要考虑浏览器的兼容性问题，刚开始用的document.body.scrollTop就没用，后改成document.scrollingElement.scrollTop就解决此问题了。
- 商品详情页选择规格弹框的过渡效果用到了transition组件实现向上拉取的效果。
- 为了优化在跳转页面时出现代码的不友好问题，用到了v-cloak来当数据编译完成了才显示页面，用了加载的icon来代替白屏。
- 购物车页用computed属性来判断是否全选以及选中的商品列表。滑动删除用到@touchstar和@touchend，而滑动所选中的商品用到了ref特殊特性来标记。
- 用fetch封装对接口的请求，用Service封装各种异步请求的方法。
- 地址管理用到了vue-router，创建实例并注入到根实例，页面路由匹配的组件渲染用到router-view，路由导航用了两种方式声明式router-link和编程式$router.push。在所有地址和编辑地址页面用了嵌套路由的方式，并用命名路由的方式导航到指定页面，路由参数的传递用query来带对象属性。
- 用vuex来对地址进行状态管理，state数据源是地址，mutations是写对地址增减改的方法，而actions是异步调用方法来触发mutations从而改变地址信息。

#### 技术栈： 
vue.js/ES6/Webpack

#### 预览地址：
https://xujj277.github.io/youzan-preview/
