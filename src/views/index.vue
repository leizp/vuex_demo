<template>
  <div class="index">
    <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
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
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
    }
  },
  created () {
    console.log(this.$props)
  },
  props: {
    title: String
  },
  components: {
  },
  methods: {
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index{
}
</style>
