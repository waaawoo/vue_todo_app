<template>
  <dir>
    <button @click="showChange">Watchを表示</button>
    <div v-if="show">
      <h2>ウォッチャー</h2>
      <p>{{message}}</p>
      <p>
        <input type="text" v-model="message">
      </p>
      <p>新しい入力 {{ newMessage }} </p>
      <p>古い入力 {{ old }} </p>

      <h2>距離の出力</h2>
      <p><input type="text" v-model="km">km</p>
      <p><input type="text" v-model="m">m</p>
      <p><input type="text" v-model="mm">mm</p>
    </div>
  </dir>
</template>

<script>
export default {

  data() {
    return {
      message: "vuejs",
      old: "",
      newMessage: "",
      km: 0,
      m: 0,
      mm: 0,
      show: false
    };
  },
  watch: {
    message: function(newValue, oldValue){
      console.log(`new: ${newValue}, old: ${oldValue}`)
      this.old = oldValue
      this.newMessage = newValue
    },
    km: function(value){
      this.km = value
      this.m = value * 1000
      this. mm = value * 100000
    },
    m: function(value){
      this.km = value / 1000
      this.m = value
      this. mm = value * 1000
    },
    mm: function(value){
      this.km = value / 1000000
      this.m = value / 1000
      this. mm = value
    },

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

<style lang="scss" scoped>

</style>
