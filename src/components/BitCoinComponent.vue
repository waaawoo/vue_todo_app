<template>
  <div>
    <h2>ビットコイン価格表示</h2>
    <ul>
      <li v-for="(rate, currency) in bpi" :key="currency">
        {{ currency }} {{ rate.rate_float }}
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
  methodes: {

  }
});

</script>

<style scope>

</style>
