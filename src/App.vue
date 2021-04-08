<template>
  <div>
    <Form></Form>
    <BitCoin></BitCoin>
    <Directive></Directive>
    <Watch></Watch>
  </div>
</template>

<script>
  import Form from "./components/Form_component.vue";
  import BitCoin from "./components/BitCoinComponent";
  import Directive from "./components/DirectiveComponent";
  import Watch from "./components/WatchComponent"

  export default{
    data(){

    },
    components: {
      Form,
      BitCoin,
      Directive,
      Watch,
    },
  };
</script>

<style>

</style>
