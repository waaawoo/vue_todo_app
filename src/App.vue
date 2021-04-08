<template>
  <div>
    <Form></Form>
    <BitCoin></BitCoin>
    <Directive></Directive>
  </div>
</template>

<script>
  import Form from "./components/Form_component.vue";
  import BitCoin from "./components/BitCoinComponent";
  import Directive from "./components/DirectiveComponent"

  export default{
    data(){

    },
    components: {
      Form,
      BitCoin,
      Directive,
    },
  };
</script>

<style>

</style>
