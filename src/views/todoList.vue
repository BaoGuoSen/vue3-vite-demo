<template>
  <div style="text-align: left">
    <h1>TODO:</h1>
    <ul>
      <li v-for="(item,index) in todos" :key="index">{{item.label}}</li>
    </ul>
    <h1>DONE:</h1>
    <ul>
      <li v-for="(item,index) in dones" :key="index">{{item.label}}</li>
    </ul>
  </div>
</template>
<script lang="ts">
import { computed, reactive } from 'vue'

export default {
  setup () {
    const state = reactive({
      todoList: [
        {
          id: 1,
          label: '干饭',
          done: true
        },
        {
          id: 2,
          label: '赚100万',
          done: false
        },
        {
          id: 3,
          label: '女朋友',
          done: false
        },
        {
          id: 4,
          label: '买房',
          done: false
        },
        {
          id: 5,
          label: '游遍中国',
          done: false
        },
        {
          id: 6,
          label: '每天早睡早起',
          done: true
        }
      ]
    })

    const todos = computed(() => {
      return state.todoList.filter(item => !item.done)
    })

    const dones = computed(() => {
      return state.todoList.filter(item => item.done)
    })

    return {
      state,
      todos,
      dones
    }

  }
}
</script>