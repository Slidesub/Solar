<template>
  <div class="player">
      <video controls="controls" preload="none" :width="this.width" :height="this.height" :style="{backgroundColor: this.backgroundColor}">
          <source :src="this.src" />
      </video>
  </div>
</template>
<script>
export default {
  name: "Player",
  props: {
      width: {
          default: "100%"
      },
      height: {
          default: "250px"
      },
      backgroundColor: {
          default: "#2c3e50"
      },
      src: {
          default: "http://k.youku.com/player/getFlvPath/sid/051496005200010001849_00_Ac3c713cd0c1b6e045f12d477d58e66e3/st/mp4/fileid/03000801005A45EDE70564003E8803432A5FB2-6430-B995-8059-CC9CDB37F785?K=f4100483d5a0ba79282cf2db&hd=1&myp=0&ts=81&ymovie=1&ypp=0&ctype=10&ev=1&token=2917&oip=2130706433&sign=5d71eec3f268aa02eb624898a9b401e4&ep=3o0a2nck9eRKXDECNtoODtgc3aLF5R8A95EeoXVaAnuYotjxaZl%2BFrZGzk5F%2FwG1eBG2DNEwIru6Aih3SMy3pve9fioAw3%2Fc9wwC7IDrlFYmrcvu8J0H0FHCtlaWevKqu7hLw2QV79%2BWWU%3D&vl=15"
      }
  },
  data () {
      return {
      }
  }
}
</script>
<style scoped>
</style>

