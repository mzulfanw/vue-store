<template>
  <HomeComponent
    :items="items"
    :fetch-items="Index"
  />
</template>

<script>
import HomeComponent from '../../components/Home/HomeComponent.vue'
import { mapGetters,mapActions } from 'vuex'
export default {
  name: 'Home',
  components: { HomeComponent },
  data() {
      return {}
  },
  computed: {
      ...mapGetters('products', ['items'])
  },
  methods: {
      ...mapActions('products', ['Index'])
  }
}
</script>

<style>

</style>