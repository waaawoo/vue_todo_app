<template>
  <div class="show">
    <button @click="showChange">イベントハンドリング表示する</button>
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
    <hr>
    <p v-on:click.shift="clickHandler">シフトを押しながらクリックするとアラートが出る</p>
    <hr>
    <p>Ctrlkey + Cで文字クリア</p>
    <input type="text" @keyup.ctrl.67="clear" v-model="message">
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
    clickHandler(){
      alert("shift + click")
    },
  },
};
</script>

<style scoped>
.show{
  margin-top: 100px;
}
</style>
