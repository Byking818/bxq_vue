<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
 <!--    <h1 v-text='msg'></h1>
    <h1 v-html='msg'></h1> -->
    <input v-model="newItem" @keyup.enter="addNew"/>
    <ul>
      <li v-for="item in items" v-bind:class="{finished:item.isFinished}" @click="toggleFinsh(item)">
        {{ item.label }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    data () {
    return {
      msg: 'toDoList',
      items: []
    }
  },
  methods: {
    toggleFinsh: function (item) {
      item.isFinished = !item.isFinished
    },
    addNew: function () {
      this.items.push({
        label: this.newItem,
        isFinished: false
      })
      this.newItem = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
.finished {
  color: red;
}
</style>
