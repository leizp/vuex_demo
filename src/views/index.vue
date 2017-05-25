<template>
  <div class="index">
    <!-- header logo svg-->
    <svg width="100%" height="70px" version="1.1" xmlns="http://www.w3.org/2000/svg" style="margin:0 auto;">
      <defs>
        <radialGradient id="grey_blue" cx="50%" cy="50%" r="50%"
        fx="50%" fy="50%">
          <stop offset="0%" style="stop-color:rgb(200,200,200);
          stop-opacity:0"/>
          <stop offset="100%" style="stop-color:rgb(0,0,255);
          stop-opacity:1"/>
        </radialGradient>
      </defs>
      <ellipse cx="50%" cy="40" rx="30" ry="30" style="fill:url(#grey_blue)"/>
    </svg>
    <h3 class="title">我的第一个Vue+vux Deom</h3>
    <!-- cell页面 -->
    <group>
      <cell title="Demo 页面" value="演示" link="/home">
        <span class="demo-icon" slot="icon" style="color:#F70968">
           <img src="../svg/魔鬼.svg" alt="" style="width:16px">
        </span>
      </cell>
    </group>
    <group>
      <cell title="给还是不给" link="/other">
        <span class="demo-icon" slot="icon" style="color:#F70968">
           <img src="../svg/热恋.svg" alt="" style="width:16px">
        </span>
         <badge text="给钱"></badge>
      </cell>
      <cell title="给一点嘛" value="给点钱呗" link="/other">
        <span class="demo-icon" slot="icon" style="color:#F70968">
           <img src="../svg/天使.svg" alt="" style="width:16px">
        </span>
      </cell>
    </group>
    <group>
      <cell title="好生气" value="" link="/other">
        <span class="demo-icon" slot="icon" style="color:#F70968">
           <img src="../svg/生气.svg" alt="" style="width:16px">
        </span>
      </cell>
      <cell title="震惊" value="" link="/other">
        <span class="demo-icon" slot="icon" style="color:#F70968">
           <img src="../svg/震惊.svg" alt="" style="width:16px">
        </span>
      </cell>
      <cell title="好眼红" value="" link="/other">
        <span class="demo-icon" slot="icon" style="color:#F70968">
           <img src="../svg/眼红.svg" alt="" style="width:16px">
        </span>
      </cell>
      <cell title="给一点嘛" value="给点钱呗" link="/other">
        <span class="demo-icon" slot="icon" style="color:#F70968">
           <img src="../svg/天使.svg" alt="" style="width:16px">
        </span>
      </cell>
    </group>
  </div>
</template>

<script>
import { Cell, Group, Badge } from 'vux'
export default {
  name: 'index',
  data () {
    return {
    }
  },
  created () {
  },
  props: {
  },
  components: {
    Cell,
    Group,
    Badge
  },
  methods: {
  },
  computed: {

  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title{
  font-size: 18px;
  text-align: center;
  font-weight: normal;
}
.demo-icon{
  margin-right: 5px;
}
</style>
