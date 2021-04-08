<template>
  <div>
    <h2> {{message}} </h2>
    <button @click="clickChange">リバース</button>
    <p>{{ ok ? "YES" : "NO" }}</p>

    <p> {{price | numberFomat }} </p>
    <input type="text" v-bind:value="price | number">
  </div>
</template>

<script>

export default ({
  data() {
    return{
      message: "Hello",
      ok: false,
      price: 19800,
      jpyPrice: 28900,
    }
  },
  methods: {
    clickChange(){
      this.message = this.message.split("").reverse().join('');
    },
  },
  // ローカルフィルター
  filters:{
    numberFomat(value){
      return value.toLocaleString()
    }
  },
})
</script>

