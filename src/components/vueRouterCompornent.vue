<template>
  <div>
    <h2>user</h2>
    <p>userId: {{ $route.params.userId }} </p>
    <input type="text" v-model="profile">
    <router-link :to="{ name: 'profile',params: { profileId: profile } }">{{ profile }}へ移動</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  data() {
    return {
      profile: 0,
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
