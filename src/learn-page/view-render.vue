<template>
  <div>
    <item-list :list="list" :render="renderFunc" />
    <item-list :list="list" />
    <v-btn @click="handleClick">点击</v-btn>
  </div>
</template>
<script>
import ItemList from '@/components/l-list'
import { getUserInfo } from '@/api/test.js'
export default {
  name: 'render-page',
  data: () => ({
    list: [
      { name: '李四' },
      { name: '张三' }
    ],
    spining: false
  }),
  components: {
    ItemList
    // Spin,
    // renderDom
  },
  methods: {
    renderFunc (h, name) {
      // return h('i', {
      //   style: {
      //     color: 'red'
      //   }
      // }, name)
      return (
        <i style={{ color: 'pink' }}>{name}</i>
      )
    },
    handleClick () {
      getUserInfo().then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
