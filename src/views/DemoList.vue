<template>
  <div class="DemoList">
    <grid>
        <grid-item link="/other" label="test">
          <i slot="icon" class="fa fa-bars fa-lg" style="color:green;width:28px;height:28px;font-size: 28px;"></i> 
        </grid-item>
        <grid-item :link="{ path: '/other'}" label="test">
          <img slot="icon" src="../svg/ActionSheet.svg">
        </grid-item>
        <grid-item link="/other">
          <img slot="icon" src="../svg/ActionSheet.svg" style="color:red">
          <span slot="label">nihao1</span>
        </grid-item>
      </grid>
  </div>
</template>

<script>
import { Grid, GridItem } from 'vux'
export default {
  name: 'DemoList',
  created () {
  },
  data () {
    return {
    }
  },
  components: {
    Grid,
    GridItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
