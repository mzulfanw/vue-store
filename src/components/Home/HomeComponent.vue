<template>
  <div
    v-for="(item,i) in items"
    :key="i"
  >
    {{ item.title }}
  </div>
</template>

<script>
export default {
    name: 'HomeComponent',
    props: {
        items: {
            type: Array,
            required: true
        },
        fetchItems: {
            type: Function,
            default() {
                return () => {}
            }
        }
    },
    created() {
        this.fetchItems()
    }
}
</script>

<style>

</style>