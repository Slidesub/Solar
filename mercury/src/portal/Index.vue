<template>
  <div class="hello">
    <header-tag></header-tag>
    <center>
      <h1>Welcome!</h1>
      <p>Please <a href="">Sing in</a> or <a href="">Sign up</a>!</p>
    </center>
    <dl>
      <dt style="font-size: 1rem;">推荐<a href="" style="font-size: 0.8rem;">more!</a></dt>
      <dd v-for="article in articles">
        <img src="" />
        <span>{{article}}</span>
      </dd>
    </dl>
    <dl>
      <dt style="font-size: 1rem;">热门<a href="" style="font-size: 0.8rem;">more!</a></dt>
      <dd v-for="article in articles">
        <img src="" />
        <span>{{article}}</span>
      </dd>
    </dl>
    <dl>
      <dt style="font-size: 1rem;">最新<a href="" style="font-size: 0.8rem;">more!</a></dt>
      <dd v-for="article in articles">
        <img src="" />
        <span>{{article}}</span>
      </dd>
    </dl>

    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
import HeaderTag from '@/components/Header';
import Player from "@/components/Player";
export default {
  name: 'Index',
  data () {
    return {
      msg: 'Welcome!',
      articles: ['1', "2"]
    }
  },
  components: {
    HeaderTag,
    Player
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>


h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
