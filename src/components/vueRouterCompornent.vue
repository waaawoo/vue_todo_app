<template>
  <div>
    <button @click="show=!show">VueRouter</button>
    <div v-show="show">
      <router-link to="/top">TOPへ</router-link>
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      show: false
    };
  },
  mounted() {

  },
  methods: {

  },
};
</script>

<style lang="scss" scoped>

</style>
