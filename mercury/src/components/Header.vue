<template>
  <header>
      <ul class="header">
          <li v-for="i in 10" :class="'bg-color-' + i"></li>
      </ul>
  </header>
</template>
<script>
export default {
  name: "HeaderTag",
  data () {
      return {
      }
  }
}
</script>

<style lang="scss" scoped>
$bg-colors: (
    #12A89D,
    #652D90,
    #F7941D,
    #BF1E2E,
    #8C6238,
    #F1592A,
    #B3B5B4,
    #25AAE2,
    #9EB83B,
    #808281
);

@mixin link-color($bg-color) {
  background-color: $bg-color;
}
@for $i from 1 through 10 {
    .bg-color-#{$i} {
        @include link-color(nth($bg-colors, $i));
        width: 10%;
        height: 10px;
    }
}
.header {
    display: flex;
    flex-direction: row;
    list-style: none;
    width: 100%;
    height: 10px;
    padding: 0;
    margin: 0;
}
</style>
