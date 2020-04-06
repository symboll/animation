<template>
  <v-list dense>
    <re-sub-menu :items="items"></re-sub-menu>
  </v-list>
</template>
<script>
import ReSubMenu from './re-sub-menu'
export default {
  name: 'MenuList',
  components: {
    ReSubMenu
  },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
