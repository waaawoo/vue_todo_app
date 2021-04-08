<template>
  <div>
    <p>
      <input type="text" v-model="keyword">
    </p>
    <p>
      {{message}}
    </p>
    <ul>
      <li v-for="(item, index) in items" :key="index">
        <a v-bind:href="item.url" target="_blank"> {{ item.title }} </a>
      </li>
    </ul>
  </div>
</template>

<script>
// axiosの呼び出し
import axios from "axios"

export default {

  data() {
    return {
      items: null,
      keyword: "",
      message: "",
    };
  },
  mounted() {

  },
  created(){
    this.keyword = "javascript"
    this.getAnswer()
  },
  methods: {
    getAnswer(){
      if(this.keyword  === ""){
        this.items = null
        return
      }
      //
      this.message = "loding..."
      let vm = this
      let params = {page: 1, per_page: 20, query: this.keyword }
      axios.get('https://qiita.com/api/v2/items', { params })
      .then((response) => {
        console.log(response.data)
        vm.items = response.data
      })
      .catch((error) => {
        vm.message = `ここにはいいてるError  : ${error}`
      })
      .finally(() => {
        vm.message = ""
      })

    },
  },
};
</script>

<style lang="scss" scoped>


</style>
