<template>
  <div>
    <l-count-up :end-val="endValue">
      <span slot="pre">金额:</span>
      <span slot="post">元</span>
    </l-count-up>
    <v-btn @click="addNumber" >增加数值</v-btn>
  </div>
</template>
<script>
import LCountUp from '@/components/l-count-up.vue'
export default {
  name: 'countUp',
  data: () => ({
    endValue: 20010
  }),
  components: {
    LCountUp
  },
  methods: {
    addNumber () {
      this.endValue += 2102
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
