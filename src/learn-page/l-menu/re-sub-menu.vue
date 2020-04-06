<template>
  <div>
    <template v-for="item in list">
      <menu-item v-if="!item.children" :key="item.title">{{ item.title }}</menu-item>
      <sub-menu v-else :key="item.title">
        <div>{{item.title}}</div>
        <re-sub-menu :list="item.children"/>
      </sub-menu>
    </template>
  </div>
</template>
<script>
import MenuItem from './menu-item'
import SubMenu from './sub-menu'
export default {
  name: 'ReSubMenu',
  components: {
    MenuItem, SubMenu
  },
  props: {
    list: {
      type: Array,
      default: () => []
    }
  }
}
</script>
