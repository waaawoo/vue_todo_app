<template>
  <div>
    <h2>ビットコイン価格表示</h2>
    <p> {{bpi}} </p>
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
    axios.get(" https://api.coindesk.com/v1/bpi/currentprice/CNY.json Sample JSON")
    .then(function(response){
      console.log(response.data.bpi.USD.rate_float);
      this.bpi = response.data.bpi.USD.rate_float
      // vueインスタンスのthisを指定するためにbindする必要がある
    }.bind(this))
  }
});

</script>

<style scope>

</style>
