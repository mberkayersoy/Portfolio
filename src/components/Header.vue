<template>
  <div class="header">
    <div class="nav-bar">
      <router-link to="/">About me</router-link>
      <router-link to="/game-projects">Projects</router-link>
      <!-- <router-link to="/other-projects">Other stuff</router-link> -->
      <router-link to="/resume">Resume</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Header",
  //   props: {
  //     msg: String,
  //   },
});
</script>

<style scoped lang="less">

@import '../css/variables.less';

.header {
  width: 100%;
}

.nav-bar {
  text-align: right;
  padding: 20px;
  line-height: 3em;
  font-weight: 700;
}

a {
  text-transform: uppercase;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 8px;
  white-space: nowrap;
  display: inline-block;
  border-bottom: 1px solid rgba(255, 255, 255, 0.262);
  transition: all 0.3s ease-in-out;
}

.router-link-exact-active {
  border: 0px solid @textColor;
  border-bottom-width: 1px;
  transition: all 0.3s ease-in-out;
}

@media only screen and (max-width: 620px){
  .nav-bar {
    line-height: 2em;
  }

  a {
    margin-left: 9px;
    margin-right: 9px;
    padding-bottom: 0px;
  }
}

</style>
