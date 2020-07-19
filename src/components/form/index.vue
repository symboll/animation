<template>
  <component
    :is="formItem.type"
    :label="formItem.label"
    v-model="value"

    :outlined="formItem.outlined"
    :rules="formItem.rules"
    :required="formItem.required"
    :dense="formItem.dense"
    :items="formItem.items"
    :item-text="formItem.text"
    :item-value="formItem.value"
    :multiple="formItem.multiple"
    :chips="formItem.chips"

    :thumb-size="formItem.thumbSize"
    :thumb-label="formItem.thumbLabel"
    @input="handleChange(formItem.name, $event)"
    @change="handleChange(formItem.name, $event)"
  >
    <template v-if="formItem.children">
      <template  v-for="(i,index) in formItem.children">
        <component
          :key="`${index}_${i.value}`"
          :is="i.type"
          :value="i.value"
          :label="i.label"
        ></component>
      </template>
    </template>
  </component>
</template>
<script>
import { VTextField, VSelect, VSlider, VRadioGroup,VRadio } from 'vuetify/lib'
export default {
  name: 'form-item',
  components: {
    VTextField,
    VSelect,
    VSlider,
    VRadioGroup,
    VRadio
  },
  props: {
    formItem: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    value: ''
  }),
  methods: {
    handleChange (type, value) {
      this.$emit('formItemChange', type, value)
    }
  },
  mounted () {

  }
}
</script>
<style lang="scss" scoped>

</style>
