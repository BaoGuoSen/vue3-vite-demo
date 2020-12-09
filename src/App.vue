<template>
  <header>
    <h1 class="title">你好，{{store.userName}}</h1>
  </header>
  <div class="main">
    <article class="my-article">
      <img alt="Vue logo" src="./assets/logo.png" />
      <HelloWorld msg="Hello Vue 3.0 + Vite" />
    </article>
    <aside class="my-aside">
      <todo-list/>
    </aside>
  </div>
  <footer>
    <code>勒是雾都！梦想成为大佬的菜鸟</code>
  </footer>
</template>

<script lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import store from './store/index'
import todoList from './views/todoList.vue'

export default {

  name: 'App',
  components: {
    HelloWorld,
    todoList
  },
  data () {
    return {
      store: store.state
    }
  }
}
</script>
<style scoped>
.title {
  text-align: left;
}
.main {
  overflow: auto;
  min-height: 600px;
}
.my-aside {
  width: 30%;
  float: left;
}
.my-article {
  width: 70%;
  float: left;
}
</style>
