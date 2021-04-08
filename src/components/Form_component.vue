<template>
  <div>
    <h2>TODO List</h2>
    <form v-on:submit.prevent>
      <!-- v-model データを双方向でバインディング -->
      <input type="text" v-model="newItem" />
      <!-- @click DOMイベント指定 -->
      <button @click="addItem">Add</button>
    </form>
    <!-- リスト表示 -->
    <ul>
      <!-- v-forはkeyを指定する必要がある -->
      <li v-for="(todo, index) in todos" :key="index">
        <!-- 完了時に下線を入れるクラスを設定 -->
        <span v-bind:class="{ done: todo.isDone }"
          >{{ index + 1 }}:{{ todo.item }}</span
        >
        <!--  -->
        <input type="checkbox" v-model="todo.isDone" />
        <button @click="deleteItem(index)">削除</button>
      </li>
    </ul>

    <div>

    </div>
  </div>
</template>

<script>


export default {
  data() {
    // returnする必要がある
    return {
      newItem: "",
      // TODO用の配列
      todos: [],
    };
  },
  // メソッド
  methods: {
    addItem() {
      // 入力がからなら処理終了
      if (this.newItem == "") {
        alert("未入力です");
        return;
      }

      // alert();
      let todo = {
        item: this.newItem,
        // 完了管理
        isDone: false,
      };
      // TODOを配列へ格納
      this.todos.push(todo);
      // 入力後入力をからにする
      this.newItem = "";
    },
    // 配列から削除
    deleteItem(index) {
      // alert(index);
      // splice 第一引数に削除するindex, 第二引数に削除する長さを記載
      this.todos.splice(index, 1);
    },
  },
  components: {

    },
};
</script>

<style>
div {
  text-align: center;
}
li {
  list-style: none;
}
li > span.done {
  text-decoration: line-through;
}
/* タスクが完了済みなら線を引く */
</style>
