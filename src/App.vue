<template>
  <div>
    <ul class="display">
      <li><router-link to="/">TODOリスト</router-link></li>
      <li><router-link to="/bitcoin">Bitcoin</router-link></li>
      <li><router-link to="/directive">Directive</router-link></li>
      <li><router-link to="/watch">Watch</router-link></li>
      <li><router-link to="/name">Name</router-link></li>
      <li><router-link to="/qiitaApi">QiitaApi</router-link></li>
      <li><router-link to="/classbinding">ClassBinding</router-link></li>
      <li><router-link to="/handling">Handling</router-link></li>
      <li><router-link to="/forminput">FormInput</router-link></li>
      <li><router-link to="/transition">Transition</router-link></li>
    </ul>
    <router-view />
    <!-- <div class="container">
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
    </div> -->
    <!-- <div class="container">
      <QiitaApi class="qiita"></QiitaApi>
      <Handling></Handling>
      <FormInput></FormInput>
    </div> -->
    <!-- <div>
      <Transition></Transition>
      <VueRouter></VueRouter>
    </div> -->
  </div>
</template>

<script>
// import Form from "./components/Form_component.vue";
// import BitCoin from "./components/BitCoinComponent";
// import Directive from "./components/DirectiveComponent";
// import Watch from "./components/WatchComponent";
// import Name from "./components/nameComponent";
// import QiitaApi from "./components/qiitaApiComponent";
// import ClassBinding from "./components/classBinding";
// import Handling from './components/eventhandlingConponent';
// import FormInput from "./components/formInputComponent";
// import Transition from "./components/transition-Component";
// import VueRouter from "./components/vueRouterCompornent"

export default {
  data() {},
  methods:{},
  components: {
    // Form,
    // BitCoin,
    // Directive,
    // Watch,
    // Name,
    // QiitaApi,
    // ClassBinding,
    // Handling,
    // FormInput,
    // Transition,
    // VueRouter,
  },
};
</script>

<style scoped>
.display{
  display: flex;
}
.display li{
  margin: 5px;
}
/* .container {
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
  margin-top: 100px; */
/* } */
</style>
