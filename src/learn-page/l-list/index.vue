<template>
  <ul>
    <li v-for="(item, index) in list" :key="`item_${index}`">
      <span v-if="!render">{{ item.name }}</span>
      <render-dom v-else :render-func="render" :name="item.name"></render-dom>
    </li>
  </ul>
</template>
<script>
import renderDom from './render-dom'
export default {
  name: 'item-list',
  components: {
    renderDom
  },
  props: {
    list: {
      type: Array,
      default: () => []
    },
    render: {
      type: Function
      // default: () => {}
    }
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>

</style>
