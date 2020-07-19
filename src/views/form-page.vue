<template>
  <div class="form_wrapper">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-row align="center">
        <v-col cols="12" md="3"
          v-for="(item,index) in formList"
          :key="`${item.name}_${item.type}_${index}`">
          <form-item
            :formItem="item"
            @formItemChange="formItemChange"
            ></form-item>
        </v-col>
      </v-row>
      <v-btn @click="handleSubmit">提交</v-btn>
    </v-form>
  </div>
</template>
<script>
import FormItem from '@/components/form'
export default {
  name: 'formPage',
  components: {
    FormItem
  },
  data: () => ({
    valid: true,
    formList: [
      {
        type: 'v-text-field',
        name: 'name',
        label: '名字',
        outlined: true,
        dense: true,
        rules: [
          v => !!v || 'Name is required',
          v => (v && v.length <= 10) || 'Name must be less than 10 characters'
        ],
        required: true
      },
      {
        type: 'v-text-field',
        name: 'age',
        label: '年龄',
        outlined: true,
        dense: true,
        rules: [
          v => !!v || 'Age is required',
          v => (v && typeof Number(v) === 'number' && v <= 200) || 'Age must be a Number and less than 200'
        ],
        required: true
      },
      {
        type: 'v-select',
        name: 'sex',
        label: '性别',
        outlined: true,
        dense: true,
        text: 'text',
        value: 'value',
        items: [{ text: '男', value: 'male' }, { text: '女', value: 'female' }],
        rules: [],
        required: true
      },
      {
        type: 'v-select',
        name: 'city',
        label: '城市',
        items: ['杭州', '南京', '上海', '北京'],
        multiple: true,
        chips: true,
        outlined: true,
        dense: true,
        rules: [],
        required: true
      },
      {
        type: 'v-slider',
        name: 'size',
        label: '尺寸',
        thumbSize: 24,
        thumbLabel: 'always'
      },
      {
        type: 'v-radio-group',
        name: 'education',
        label: '学历',
        children: [
          {
            type: 'v-radio',
            label: '高中',
            value: 1
          },
          {
            type: 'v-radio',
            label: '大专',
            value: 2
          },
          {
            type: 'v-radio',
            label: '本科',
            value: 3
          },
          {
            type: 'v-radio',
            label: '硕士',
            value: 4
          },
          {
            type: 'v-radio',
            label: '博士',
            value: 5
          }
        ]
      }
    ],
    form: {}
  }),
  methods: {
    handleSubmit () {
      if (this.$refs.form.validate()) {
        console.log(this.form)
      } else {
        console.log('err')
      }
    },
    formItemChange (type, value) {
      this.form[type] = value
    }
  }
}
</script>
<style lang="scss" scoped>
.form_wrapper{
  width: 100%;
  padding: 10px;
}
</style>
