<template>
  <div>
    <template v-for="item in items">
      <v-list-group
        v-if="item.children"
        :key="item.text"
        v-model="item.model"
        :prepend-icon="item.model ? item.icon : item['icon-alt']"
        append-icon=""
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </template>

        <re-sub-menu :items="item.children"/>
      </v-list-group>

      <v-list-item
        v-else
        :key="item.text"
        link
      >
        <v-list-item-action v-if="item.icon">
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>
            {{ item.text }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </template>
  </div>
</template>
<script>
export default {
  name: 'ReSubMenu',
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
