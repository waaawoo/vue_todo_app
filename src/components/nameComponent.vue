<template>
  <div>
    <button @click="showChange">NameComponent表示</button>
    <div v-if="show">
      <h3>Watchで監視(watch)</h3>
      <p>
        firstName <input type="text" v-model="firstName">
      </p>
      <p>
        lastName <input type="text" v-model="lastName">
      </p>
      <p>
        fullname {{ fullName }}
      </p>
      <h3>算出プロパティ表示(computed)</h3>
      <p>
        firstName <input type="text" v-model="cfirstName">
      </p>
      <p>
        lastName <input type="text" v-model="clastName">
      </p>
      <p>
        fullname {{ cfullName }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      firstName: "",
      lastName: "",
      fullName: "",
      cfirstName: "",
      clastName: "",
    };
  },
  // ウォッチ
  watch:{
    firstName(value){
      this.fullName = `${value} ${this.lastName}`
    },
    lastName(value){
      this.fullName = `${this.firstName} ${value}`
    },
  },
  // 算出プロパティ
  computed: {
    cfullName: function(){
      return `${this.cfirstName} ${this.clastName}`
    }
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
