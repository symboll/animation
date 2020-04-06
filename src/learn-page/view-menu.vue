<template>
  <ul>
    <re-sub-menu :list="list" />
  </ul>
</template>
<script>
import { ReSubMenu } from '@/components/l-menu'
export default {
  name: 'v-menu',
  components: {
    ReSubMenu
  },
  data: () => ({
    list: [
      {
        title: '11111'
      },
      {
        title: '22222'
      },
      {
        title: '33333',
        children: [
          {
            title: '33333-00'
          },
          {
            title: '33333-11',
            children: [{
              title: '33333-11-11'
            }, {
              title: '33333-11-22'
            }]
          }
        ]
      }
    ]
  })
}
</script>
<style lang="scss" scoped>

</style>
