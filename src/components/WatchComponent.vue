<template>
  <div>
    <h2>ウォッチャー</h2>
    <p>{{message}}</p>
    <p>
      <input type="text" v-model="message">
    </p>
    <p>新しい入力 {{ newMessage }} </p>
    <p>古い入力 {{ old }} </p>
  </div>
</template>

<script>
export default {

  data() {
    return {
      message: "vuejs",
      old: "",
      newMessage: "",
    };
  },
  watch: {
    message: function(newValue, oldValue){
      console.log(`new: ${newValue}, old: ${oldValue}`)
      this.old = oldValue
      this.newMessage = newValue
    }
  },
  mounted() {

  },
  methods: {

  },
};
</script>

<style lang="scss" scoped>

</style>
