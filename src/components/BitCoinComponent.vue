<template>
  <div>
    <h2>本日のビットコイン価格表示</h2>
      <div v-if="bitCoinFlg">
      <section v-if="hasError">
        Error
      </section>
      <section v-else>
        <ul v-cloak>
        <li v-for="(rate, currency) in bpi" :key="currency">
          <!-- |の後にfilterを設置 -->
          {{ currency }} {{ rate.rate_float | currencyDecimal }}
        </li>
      </ul>
      </section>
      </div>
      <button @click="change" v-if="!bitCoinFlg">表示</button>
  </div>
</template>

<script>
// axiosの呼び出し
import axios from "axios"

export default({
  data(){
    return{
      bpi: null,
      hasError: false,
      bitCoinFlg: false,
    }
  },
  methods: {
    change(){
      console.log(this.bitCoinFlg);
      this.bitCoinFlg = true
    }
  },
  mounted: function(){
    axios.get("https://api.coindesk.com/v1/bpi/currentprice.json")
    .then(function(response){
      this.bpi = response.data.bpi
      // vueインスタンスのthisを指定するためにbindする必要がある
    }.bind(this))
    // エラーのキャッチ
    .catch(function(error){
      console.log(error)
      this.hasError = true
    }.bind(this))
  },
  filters:{
    // 小数点以下の表示を指定
    currencyDecimal(value){
      // toFixed 小数点以下のけた数を指定
      return value.toFixed(2)
    }
  },
});

</script>

<style scope>
/* 一瞬チラつく表示を防止 */
  [v-cloak]{
    display: none;
  }
</style>
