<template>
  <div class="show">
    <button @click="clickShow">入力コンポーネント表示する</button>
    <div v-show="show">
      <p>{{ message }}</p>
      <!-- v-modelで双方向データバインディングする
           v-modelを使用時は属性は無視される
       -->
      <input type="text" v-model="message">
      <hr>
      <!-- 複数 preは改行を有効に -->
        <pre>{{ message }}  </pre>
        <textarea v-model="message" name="" id="" cols="30" rows="10"></textarea>
      <hr>
      <!-- チェックボックス  -->
      <input type="checkbox" id="checkbox" v-model="checked">
      <label for="checkbox"> {{ checked }} </label>
      <hr>
      <!-- 複数チェック -->
      <input type="checkbox" id="red" value="red" v-model="colors">
      <label for="red">red</label>
      <input type="checkbox" id="green" value="grenn" v-model="colors">
       <label for="green">green</label>
      <input type="checkbox" id="blue" value="blue" v-model="colors">
      <label for="blue">blue</label>
      <p>
        {{colors}}
      </p>
      <hr>
      <!-- ラジオぼたん -->
      <input type="radio" id="red1" value="red" v-model="color">
      <label for="red1">red</label>
      <input type="radio" id="green1" value="green" v-model="color">
      <label for="green1">green</label>
      <input type="radio" id="blue1" value="blue" v-model="color">
      <label for="blue1">blue</label>
      <p>
        {{ color }}
      </p>
      <hr>
      <!-- セレクトボックス -->
      <select v-model="selected">
        <option disabled value="選択してください">選択してください</option>
        <option>赤</option>
        <option>青</option>
        <option>緑</option>
      </select>
      <p>
        選択文字:{{ selected }}
      </p>
      <!-- 複数のセレクトボックス -->
      <select v-model="selecteds" multiple>
        <option disable value="">選択してください</option>
        <option>Reeeeeeed</option>
        <option>Greeeeeen</option>
        <option>Blueeeeee</option>
      </select>
      <p>
      {{ selecteds }}
      </p>
      <!-- .lazyについて Ent完了後反映 -->
      <p>エンターで入力が確定すると表示されます</p>
      <input type="text" v-model.lazy="message2">
      <p> {{ message2 }} </p>
      <hr>
      <!-- .trim 前後の空白削除 -->
      <p>スペースがTrimされます</p>
      <input type="text" v-model.trim="message3">
      <p> {{ message2 }} </p>
      <hr>
      <!-- .number 入力値を数値型へ変換する -->
      <input type="number" v-model.number="age">
      <p>
        ＋１０の値を出力
        {{ age + 10 }}
      </p>
    </div>
    <div>

    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      show: false,
      message: "",
      checked: false,
      colors: [],
      color: "",
      selected: "",
      selecteds: [],
      message2: "",
      message3: "",
      age: 0,
    };
  },
  mounted() {

  },
  methods: {
    clickShow(){
      this.show = !this.show
    }

  },
};
</script>

<style scoped>
  .show{
    margin-top: 100px;
  }
</style>
