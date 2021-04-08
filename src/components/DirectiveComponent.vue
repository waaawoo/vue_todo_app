<template>
  <div>
    <h2> {{message}} </h2>
    <button @click="clickChange">リバース</button>
    <p>{{ ok ? "YES" : "NO" }}</p>

    <p> {{price | numberFomat }} </p>
    <input type="text" v-bind:value="price | number">

    <h2>日本円をドルへ変更</h2>
    {{jpyPrice}} =>
    {{ jpyPrice | toUSD | number }}

    <h2>長文を引数で制御</h2>
    {{ text | readMore(20, "...")}}
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
      text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.",

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

