<template>
  <div class="show">
    <h3>イベントハンドリング</h3>
    <button @click="showChange">表示する</button>
    <div v-show="show">
      <p>数値: {{ num }}</p>
      <p>{{ message }}</p>
      <button @click="clickChange($event, num + 1)">Click</button>

      <h2>イベント修飾子の種類</h2>
      <p>v-once(一度しか実行できない)</p>
      <button @click.once="nowTime('once')">今何時？</button>
      {{ once }}
      <p>通常</p>
      <button @click="nowTime('time')">今何時？</button>
      {{ time }}
    <hr>
    <p>ESC,space,↑keyを押すとクリアできる</p>
    <!-- <input type="text" @keyup.esc="clear" v-model="message">
    複数条件 -->
    <input type="text" @keyup.esc.up.space="clear" v-model="message">
    <p>変数message: {{ message }}  </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 0,
      message: "",
      once: "",
      time: "",
      show: false,
    };
  },
  mounted() {},
  methods: {
    clickChange($event, num) {
      this.num += 1;
      this.message = `${num}回押されました`;
      console.log($event);
    },
    nowTime(flg) {
      if (flg === "once") {
        this.once = new Date().toLocaleTimeString();
      } else {
        this.time = new Date().toLocaleTimeString();
      }
    },
    showChange(){
      this.show = !this.show
    },
    clear(){
      this.message = ""
    },
  },
};
</script>

<style scoped>
.show{
  margin-top: 100px;
}
</style>
