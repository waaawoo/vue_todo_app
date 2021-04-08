<template>
  <div class="qiitaAPI">
    <h2>Qiitaの記事を検索できます</h2>
    <p>
      <input type="text" v-model="keyword" />
    </p>
    <p>
      {{ message }}
    </p>
    <ul class="qiitaAPI__UL">
      <li v-for="(item, index) in items" :key="index">
        <a v-bind:href="item.url" target="_blank"
          >{{ index + 1 }}『 {{ item.title }}』
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
// Lodashのいんぽーと
import _ from "lodash";
// axiosの呼び出し
import axios from "axios";

export default {
  data() {
    return {
      items: null,
      keyword: "",
      message: "",
    };
  },
  mounted() {},
  created() {
    // this.keyword = "javascript"
    // this.getAnswer()
    // 入力中は処理が走らない
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 2000);
  },
  methods: {
    getAnswer() {
      if (this.keyword === "") {
        this.items = null;
        this.message = "";
        return;
      }
      //
      this.message = "loding...";
      let vm = this;
      let params = { page: 1, per_page: 20, query: vm.keyword };
      axios
        .get("https://qiita.com/api/v2/items", { params })
        .then((response) => {
          console.log(response);
          vm.items = response.data;
        })
        .catch((error) => {
          vm.message = `ここにはいいてるError  : ${error}`;
        })
        .finally(() => {
          vm.message = "";
        });
    },
  },
  watch: {
    keyword() {
      this.message = "メッセージ入力中...";
      this.debouncedGetAnswer();
    },
  },
};
</script>

<style scoped>
  .qiitaAPI .qiita{
    width: 80%;
    margin: 0 auto;
  }

  .qiitaAPI__UL{
    text-align: left;
  }
  .qiitaAPI__UL li{
    margin-top: 5px;
  }
</style>
