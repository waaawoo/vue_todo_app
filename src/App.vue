<template>
  <div>
    <Form></Form>
    <BitCoin></BitCoin>
    <Directive></Directive>
    <Watch></Watch>
    <Name></Name>

  </div>
</template>

<script>
  import Form from "./components/Form_component.vue";
  import BitCoin from "./components/BitCoinComponent";
  import Directive from "./components/DirectiveComponent";
  import Watch from "./components/WatchComponent"
  import Name from "./components/nameComponent"

  export default{
    data(){

    },
    components: {
      Form,
      BitCoin,
      Directive,
      Watch,
      Name,
    },
  };
</script>

<style>

</style>
