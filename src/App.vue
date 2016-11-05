<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <hello></hello>
    <h1>There show: {{ someWord }}</h1>
    <!-- 父组件定义属性 -->
    <child myfromefather="You are my snow!!!" @zidingyi="showMsg"></child>
  </div>
  
</template>

<script>
 import Hello from './components/Hello'
import Child from './components/Child.vue'

export defa ult {
  data () {
    return {
      title: 'LIPENGTAO',
      someWord: ' '
    }
  },
  components: {
    Hello, Child
  },
  methods: {
     showMsg: function (some) {
        this.someWord = some;
      }
  }
 
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
