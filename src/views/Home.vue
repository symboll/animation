<template>
  <div>
    name: {{ name }}
    id:{{ id }}
  </div>
</template>

<script>

export default {
  name: 'Home',
  props: {
    name: {
      type: [String, Number],
      default: 'lkh'
    },
    id: {
      type: [String, Number],
      default: 0
    }
  },
  data: () => ({

  }),
  // 组件内守卫
  beforeRouteEnter (to, from, next) {
    // console.log('this=>', this) // 此时页面还未渲染。 this获取不到 当前组件的实例
    // console.log(from.name, to.name)
    // next(vm => {
    //   console.log(vm) // vm就是组件的实例
    // })
    next()
  },
  beforeRouteLeave (to, from, next) {
    // 在页面即将离开的时候，调用
    // const leave = confirm('您确定要离开吗？')
    // if (leave) next()
    // else next(false)
    next()
  },
  beforeRouteUpdate (to, from, next) {
    // console.log('beforeRouteUpdate', to.name, from.name)
    next()
  },
  methods: {

  },
  mounted () {

  }
}
</script>
