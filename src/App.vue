<template>
  <div id="app" style="height:100%;">
   <view-box ref="viewBox">
    <x-header :left-options="{showBack: true,backText:'返回',showMore: true}"  :right-options="{showMore: true}" @on-click-more="show1 = true" v-model="show1">首页</x-header>
    <transition name="bounce">
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
    <actionsheet v-model="show1" :menus="menus1" :close-on-clicking-mask="false" show-cancel></actionsheet>
   </view-box>
  </div>
</template>

<script>
import { XHeader, Actionsheet, Tabbar, TabbarItem, ViewBox } from 'vux'
export default {
  name: 'app',
  data () {
    return {
      show1: false,
      menus1: {
        menu1: '分享给朋友',
        menu2: '分享到朋友圈'
      }
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
      console.log(index)
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
  animation: slideInLeft 1s;
}
 .bounce-leave-active {
  animation: slideOutRight 1s;
} 
@keyframes slideOutLeft {
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
}

.slideOutLeft {
  animation-name: slideOutLeft;
}

@keyframes slideOutRight {
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
}

@keyframes slideInLeft {
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}

.slideInLeft {
  animation-name: slideInLeft;
}

@keyframes slideInRight {
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}

.slideInRight {
  animation-name: slideInRight;
}
</style>
