
<template>
  <Home />
</template>

<script>
import Home from './containers/Home/Home.vue'
export default {
  components: { Home },
  mounted() {
    console.log(import.meta.env.VITE_APP_END_POINT)
  }
}
</script>

<style>

</style>
