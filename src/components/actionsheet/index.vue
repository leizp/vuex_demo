<template>
  <div class="ActionSheet" >
    <group>
      <x-switch title="一般使用" v-model="show1"></x-switch>
      <x-switch title="取消使用" v-model="show2"></x-switch>
      <x-switch title="显示提示文字" v-model="show3"></x-switch>
      <x-switch title="使用数组定义" v-model="show5"></x-switch>
    </group>
    <actionsheet v-model="show1" :menus="menus1" @on-click-menu="click1"></actionsheet>
    <actionsheet v-model="show2" :menus="menus2" @on-click-menu="click2" show-cancel cancel-text="撤销"></actionsheet>
    <actionsheet v-model="show3" :menus="menus3" @on-click-menu="click3" show-cancel cancel-text="取消"></actionsheet>
    <actionsheet v-model="show5" :menus="menus5" show-cancel @on-click-menu="click4"></actionsheet>
  </div>
</template>

<script>
import { Actionsheet, Group, Cell, XSwitch } from 'vux'
export default {
  name: 'ActionSheet',
  created () {
    // this.getListData()
  },
  data () {
    return {
      show1: false,
      show2: false,
      show3: false,
      show5: false,
      menus1: {
        menu1: '确认',
        menu2: '取消'
      },
      menus2: {
        menu1: '拍照',
        menu2: '读取本地图片'
      },
      menus3: {
        'title.noop': 'Are you sure?<br/><span style="color:#666;font-size:12px;">Once deleted, you will never find it.</span>',
        delete: '<span style="color:red">Delete</span>'
      },
      menus5: [{
        label: 'Are you sure?<br/><span style="color:#666;font-size:12px;">Once deleted, you will never find it.</span>',
        type: 'info'
      }, {
        label: 'Primary',
        type: 'primary',
        value: 'primary'
      }, {
        label: 'Warn',
        type: 'warn'
      }, {
        label: 'Disabled',
        type: 'disabled'
      }, {
        label: 'Default'
      }]
    }
  },
  components: {
    Actionsheet,
    Group,
    Cell,
    XSwitch
  },
  computed: {
  },
  methods: {
    click1: function () {
      this.show1 = true
    },
    click2: function () {
      this.show2 = true
    },
    click3: function () {
      this.show3 = true
    },
    click4: function () {
      this.show5 = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.icon{
  font-size: 28px;
}
</style>
