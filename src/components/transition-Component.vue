<template>
  <div>
    <button @click="show = !show">トランジション表示</button>
    <div v-show="show">
      <button @click="trans=!trans">トランジション開始</button>
      <!-- transitionを設定する 設定したらCSSに設定を記載する -->
      <transition>
        <p v-show="trans">もじにトランジションをかけているよ</p>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      trans: false,
    };
  },
  mounted() {

  },
  methods: {

  },
};
</script>

<style scoped>
/* 表示のタイミング */
  .v-enter-active{
    transition: opacity 1s;
  }

  .v-enter{
    opacity: 0;
  }
/* 削除のタイミング */
  .v-leave-active{
    transition: opacity 1s;
  }

  .v-leave-to{
    opacity: 0;
  }
</style>
