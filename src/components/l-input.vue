<template>
  <div>
    <input :value="value" type="text" @input="handleInput"  class="input_style" />
  </div>
</template>
<script>
export default {
  name: 'store',
  props: {
    value: {
      type: [String, Number]
    }
  },
  data: () => ({

  }),
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>
<style lang="scss" scoped>
.input_style{
  outline: 1px solid royalblue;
  margin-left: 20px;
}
</style>
