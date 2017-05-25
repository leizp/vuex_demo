<template>
  <div class="home" >
    <grid :rows="3">
        <grid-item 
        :label="item.componentsName" 
        v-for="item in list" 
        style="font-size:16pt;"
        @on-item-click="goTo(item.url)">
          <i slot="icon" v-bind:class="item.iconName" :style="{color: item.color}" class="icon"></i> 
        </grid-item>
      </grid>
  </div>
</template>

<script>
import { Grid, GridItem } from 'vux'
import demoListJson from '../datas/DemoList.json'
export default {
  name: 'home',
  created () {
    // this.getListData()
    console.log(demoListJson)
  },
  data () {
    return {
    }
  },
  components: {
    Grid,
    demoListJson,
    GridItem
  },
  computed: {
    list () {
      return demoListJson
    }
  },
  methods: {
    getListData: function () { // 整个DemoList页面请求
      // ajax请求swiper页面数据
      this.$http.get('./static/DemoList.json', {
        token: this.token
      }).then((res) => {
        console.log(res)
      }, (res) => {
        console.log(res)
        alert('后台数据报错')
      })
    },
    goTo: function (url) {
      this.$router.push({path: url})
      alert(url)
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
