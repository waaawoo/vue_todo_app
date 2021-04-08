<template>
  <div>
    <h2>TODO List</h2>
    <form v-on:submit.prevent>
      <!-- v-model データを双方向でバインディング -->
      <input type="text" v-model="newItem">
      <!-- @click DOMイベント指定 -->
      <button @click="addItem">Add</button>
    </form>
    <!-- リスト表示 -->
    <ul>
      <!-- v-forはkeyを指定する必要がある -->
      <li v-for="(todo, index) in todos" :key="index">{{index + 1}}:{{todo.item}}</li>
    </ul>
    <pre>{{$data}}</pre>
  </div>
</template>

<script>
export default {
  data(){
    // returnする必要がある
    return{
      newItem: "",
      // TODO用の配列
      todos: [],
    }
  },
  // メソッド
  methods: {
    addItem(){
      // 入力がからなら処理終了
      if (this.newItem == ""){
        alert("未入力です");
        return;
      }

      // alert();
      let todo = {
        item: this.newItem
      };
      // TODOを配列へ格納
      this.todos.push(todo);
      // 入力後入力をからにする
      this.newItem = "";
    }
  }
}
</script>
