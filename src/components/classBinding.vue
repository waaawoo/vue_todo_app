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

      l: {
        large: true,
        "bg-gray": true
      },

    };
  },
  mounted() {

  },
  methods: {
    showChange(){
      return this.show = !this.show
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
