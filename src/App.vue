<template>
  <div>
    <div class="container">
      <div class="main">
        <Form></Form>
      </div>
      <div class="side">
        <BitCoin></BitCoin>
        <Directive></Directive>
        <Watch class="watch"></Watch>
        <Name></Name>
        <ClassBinding></ClassBinding>
      </div>
    </div>
    <QiitaApi class="qiita"></QiitaApi>
  </div>
</template>

<script>
import Form from "./components/Form_component.vue";
import BitCoin from "./components/BitCoinComponent";
import Directive from "./components/DirectiveComponent";
import Watch from "./components/WatchComponent";
import Name from "./components/nameComponent";
import QiitaApi from "./components/qiitaApiComponent";
import ClassBinding from "./components/classBinding"

export default {
  data() {},
  components: {
    Form,
    BitCoin,
    Directive,
    Watch,
    Name,
    QiitaApi,
    ClassBinding,
  },
};
</script>

<style scoped>
.container {
  display: flex;
  widows: 100vh;
}
.main {
  width: 30%;
}
.side {
  display: flex;
  width: 70%;
  margin-top: 0;
  margin-top: 100px;
}
.watch {
  margin: 0;
  padding: 0;
}

.qiita{
  margin-top: 100px;
}
</style>
