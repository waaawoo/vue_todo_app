<template>
  <div>
    <h2>TODO List</h2>
    <form v-on:submit.prevent>
      <!-- v-model データを双方向でバインディング -->
      <input type="text" v-model="newItem">
      <!-- @click DOMイベント指定 -->
      <button @click="addItem">Add</button>
    </form>
    <pre>{{$data}}</pre>
  </div>
</template>

<script>
export default {
  data(){
    // returnする必要がある
    return{
      newItem: "",
    }
  },
  // メソッド
  methods: {
    addItem(){
      alert();
    }
  }
}
</script>
