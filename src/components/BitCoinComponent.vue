<template>
  <div>
    <h2>本日のビットコイン価格表示</h2>
    <ul v-cloak>
      <li v-for="(rate, currency) in bpi" :key="currency">
        <!-- |の後にfilterを設置 -->
        {{ currency }} {{ rate.rate_float | currencyDecimal }}
      </li>
    </ul>
  </div>
</template>

<script>
// axiosの呼び出し
import axios from "axios"

export default({
  data(){
    return{
      bpi: null,
    }
  },
  mounted: function(){
    axios.get("https://api.coindesk.com/v1/bpi/currentprice.json")
    .then(function(response){
      console.log(response.data)
      this.bpi = response.data.bpi
      // vueインスタンスのthisを指定するためにbindする必要がある
    }.bind(this))
    // エラーのキャッチ
    .catch(function(error){
      console.log(error)
    })
  },
  filters:{
    currencyDecimal(value){
      // toFixed 小数点以下のけた数を指定
      return value.toFixed(2)
    }
  },
  methodes: {

  }
});

</script>

<style scope>
/* 一瞬チラつく表示を防止 */
  [v-cloak]{
    display: none;
  }
</style>
