<template>
  <div>
    <slot name="pre"></slot>
    <span :id="elementId"></span>
    <slot name="post"></slot>
  </div>
</template>
<script>
import CountUp from 'countup'
export default {
  name: 'lCountUp',
  props: {
    startVal: {
      type: Number,
      default: 0
    },
    endVal: {
      type: Number,
      required: true
    },
    /***
     * @description 小数点后保留几位
     */
    decimals: {
      type: Number,
      default: 0
    },
    duration: {
      type: Number,
      default: 1
    },
    delay: {
      type: Number,
      default: 0
    },
    useEasing: {
      type: Boolean,
      default: false
    },
    useGrouping: {
      type: Boolean,
      default: true
    },
    separator: {
      type: String,
      default: ','
    },
    /***
     * @description 整数和小数分隔符号
     */
    decimal: {
      type: String,
      default: '.'
    },
    className: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    counter: null
  }),
  computed: {
    elementId () {
      return `count_up_${this._uid}`
    }
  },
  watch: {
    endVal (newVal, oldVal) {
      this.counter.update(newVal)
    }
  },
  methods: {

  },
  mounted () {
    this.$nextTick(() => {
      this.counter = new CountUp(this.elementId, this.startVal, this.endVal, this.decimals, this.duration, {
        useEasing: this.useEasing,
        useGrouping: this.useGrouping,
        separator: this.separator,
        decimal: this.decimal
      })
      this.counter.start()
    })
  }
}
</script>
<style lang="scss" scoped>

</style>
