<template>
<div id="app">
  <p>{{ maxCount }}</p>
  <p>
    <button @click="countUp">+</button>
  </p>
</div>
</template>
 
<script>

import { mapState, mapGetters, mapActions } from 'vuex'
 
export default {
  computed: {
    ...mapGetters(['maxCount']),
  },
  methods: {
    ...mapActions(['countUp']),
  }
}
</script>