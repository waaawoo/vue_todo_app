<template>
  <div>
    <button @click="showChange">コンポーネントを表示</button>
    <div v-if="show">
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

      <p>税込み価格</p>
      <input type="text" v-model="basePrice">
      <input type="text" v-model="texIncludedPrice">

      <p>computedとmethodのランダム表示</p>
      <ol>
        <!-- キャッシュされるので同じ値 -->
        <li> {{computedNumer}} </li>
        <li> {{computedNumer}} </li>
        <li> {{computedNumer}} </li>
      </ol>
      <ol>
        <!-- キャッシュされないので全て違う値 -->
        <li> {{methodsNumber()}} </li>
        <li> {{methodsNumber()}} </li>
        <li> {{methodsNumber()}} </li>
      </ol>
    </div>
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
      basePrice: 100,
      show: false,

    }
  },
  computed: {
    //
    texIncludedPrice:{
      get: function(){
        return parseInt(this.basePrice * 1.10)
      },
      set: function(texIncludedPrice){
        this.basePrice = Math.ceil(texIncludedPrice / 1.10)
      }
    },
    computedNumer(){
      return Math.random()
    }
  },
  methods: {
    clickChange(){
      this.message = this.message.split("").reverse().join('');
    },
    methodsNumber(){
      return Math.random()
    },
    showChange(){
      return this.show = !this.show
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

