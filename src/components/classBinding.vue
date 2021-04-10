<template>
  <div>
    <button @click="showChange">クラスのデータバインディング</button>
    <div v-if="show">
      <h3>クラスのデータバインディング</h3>
      <!-- 動的にクラスの付け替え -->
      <p><span v-bind:class="{large:isLarge, 'text-danger':  textColor, bg: bgColor}">動的に変わるよ</span></p>
      <button @click="isLarge = !isLarge">大きさが変わるよ</button>
      <button @click="textColor = !textColor">文字の色が変わるよ</button>
      <button @click="bgColor = !bgColor">背景色が変わるよ</button>
      <p>三項演算子での書き換え</p>
      <p>Hello <span v-bind:class="isLarge ? l : 'text-danger'">おはよう！</span></p>

      <p>Hello <span v-bind:style="{ color: color, 'font-size': `${fontsize}px` }" >インラインスタイル</span> </p>

      <p>Hello <span v-bind:style="styleObject" >スタイルオブジェクト</span> </p>
      <p v-if="toggle">YES</p>
      <p v-else>NO</p>
      <button @click="toggleChange">チェンジ</button>

      <h4>v-showでの切り替え</h4>
      <p v-show="toggle">スタイルにディスプレイNoneを設定する</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      isLarge: true,
      textColor: true,
      bgColor: true,
      color: "red",
      fontsize: 36,
      styleObject: {
        color: "green",
        fontSize: "24px"
      },

      l: {
        large: true,
        "bg-gray": true
      },
      toggle: false,

    };

  },
  mounted() {

  },
  methods: {
    showChange(){
      return this.show = !this.show
    },
    toggleChange(){
      this.toggle = !this.toggle
    },
  },
};
</script>

<style scoped>
  .large{
    font-size: 36px
  }
  .text-danger{
    color: red;
  }
  .bg{
    background-color: blue ;
  }
  .bg-gray{
    background-color: gray;
  }
</style>
