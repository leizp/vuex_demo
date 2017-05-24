<template>
  <div id="app" style="height:100%;">
   <view-box ref="viewBox">
    <!-- 头部组件 -->
    <transition v-on:before-enter="beforeEnter" v-on:leave="leave">
      <x-header :left-options="{showBack: true,backText:'返回',showMore: true}"  :right-options="{showMore: true}" @on-click-more="showActionsheet = true" v-model="showActionsheet" :title="title"></x-header>
    </transition>
    <!-- 内容组件 -->
    <transition 
      v-on:before-enter="beforeEnter"
      v-on:leave="leave">
      <router-view></router-view>
    </transition>
    <!-- 底部选项卡切换 -->
    <tabbar>
      <tabbar-item show-dot selected @on-item-click="changeShow(0)" link='/'>
        <img slot="icon" src="./assets/images/message0.png">
        <img slot="icon-active" src="./assets/images/message1.png">
        <span slot="label">消息</span>
      </tabbar-item>
      <tabbar-item @on-item-click="changeShow(1)" link='/home'>
        <img slot="icon" src="./assets/images/person0.png">
        <img slot="icon-active" src="./assets/images/person1.png">
        <span slot="label">联系人</span>
      </tabbar-item>
      <tabbar-item badge="2" @on-item-click="changeShow(2)" link='/other'>
        <img slot="icon" src="./assets/images/link0.png">
        <img slot="icon-active" src="./assets/images/link1.png">
        <span slot="label">动态</span>
      </tabbar-item>
    </tabbar>
    <!-- 底部弹出页面 -->
    <actionsheet v-model="showActionsheet" :menus="menus1" :close-on-clicking-mask="false" show-cancel></actionsheet>
   </view-box>
  </div>
</template>

<script>
import { XHeader, Actionsheet, Tabbar, TabbarItem, ViewBox } from 'vux'
export default {
  name: 'app',
  data () {
    return {
      showActionsheet: false,
      bounce: {},
      curIndex: 0,
      menus1: {
        menu1: '分享给朋友',
        menu2: '分享到朋友圈'
      }
    }
  },
  created () {
    console.log(this)
  },
  computed: {
    title () {
      if (this.$route.path === '/') return '首页'
      if (this.$route.path === '/home') return 'Home'
      if (this.$route.path === '/other') return 'other'
    }
  },
  components: {
    XHeader,
    Actionsheet,
    Tabbar,
    TabbarItem,
    ViewBox
  },
  methods: {
    changeShow: function (index) {
      this.curIndex = index
      // console.log(index)
    },
    // 过渡进入
    // 设置过渡进入之前的组件状态
    beforeEnter: function (el, done) {
      // 判断当前动画该如何执行
      var className = el.attributes.class.value
      // console.log(this.curIndex) // 获取当前tapbar的index
      // console.log(el.attributes.class.value) // 获取当前进入元素的class name
      if (className === 'home' && this.curIndex !== 2) {
        el.style.animationName = 'fadeInRight'
        el.style.animationDuration = '0.5s'
      } else if (className === 'other') {
        el.style.animationName = 'fadeInRight'
        el.style.animationDuration = '0.5s'
      } else {
        el.style.animationName = 'fadeInLeft'
        el.style.animationDuration = '0.5s'
      }
    },
    // 设置过渡离开完成时地组件状态
    leave: function (el, done) {
      // ...
      var className = el.attributes.class.value
      if (className === 'home') {
        el.style.animationName = 'fadeInRightL'
        el.style.animationDuration = '0.5s'
      } else if (className === 'other') {
        el.style.animationName = 'fadeInRightL'
        el.style.animationDuration = '0.5s'
      } else {
        el.style.animationName = 'fadeInLeftR'
        el.style.animationDuration = '0.5s'
      }
      done()
    }
  }
}
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';

  body {
    background-color: #fbf9fe;
  }
  .bounce-enter-active {
    animation: fadeInRight 0.5s;
  }
   .bounce-leave-active {
    animation: fadeInRightL 0.5s;
  }
  //右边进入界面动画
  /* fadeInRight Anmiate start */
  @keyframes fadeInRight {
    from {
      transform: translate3d(100%, 0, 0);
    }
    to {
      transform: none;
    }
  }
  @keyframes fadeInRightL {
    from {
      transform: none;
    }
    to {
      transform: translate3d(-100%, 0, 0);
    }
  }

  /* fadeInRight Anmiate end */
  /* 左边进入动画 */
  /* fadeInLeft Anmiate Start */

  @keyframes fadeInLeft {
    from {
      transform: translate3d(-100%, 0, 0);
    }
    to {
      transform: none;
    }
  }

  @keyframes fadeInLeftR {
    from {
      transform: none;
    }
    to {
      transform: translate3d(100%, 0, 0);
    }
  }
</style>
