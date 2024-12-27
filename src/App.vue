<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import reportReview from './components/report-review/index.vue'
// import jumpReview from './components/jump-review/index.vue'

</script>

<template>
  <div style="width: 100vw; height: 100vh; overflow-y: scroll;">

    <!-- 该组件是通过显示页面，用户自己点击按钮进行查询报告 -->
    <reportReview />

    <!-- 该组件为直接通过路由参数进行跳转查报告，不显示布局页面 -->
    <!-- <jumpReview /> -->
  </div>
  <!-- <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" /> -->
</template>

<!-- <style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style> -->
