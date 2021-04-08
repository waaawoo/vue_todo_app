<template>
  <div>
    <h2>TODO List</h2>
    <form v-on:submit.prevent>
      <input type="text">
      <button @click="addItem">Add</button>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    addItem(){
      alert();
    }
  }
}
</script>
