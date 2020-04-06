<template>
  <div>
    <v-btn @click="handleClick">获取用户列表</v-btn>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'user',
  data: () => ({

  }),
  methods: {
    ...mapActions([
      'getusers'
    ]),
    handleClick () {
      this.getusers().then(res => {
        console.log('res===-->', res)
      }).catch(err => {
        console.log('err', err)
      })
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
