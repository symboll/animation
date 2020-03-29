<template>
  <div>
    <l-input :value="value" @input="handleInput" />
    <l-input v-model="modalValue"></l-input>

    <p> appName: {{ appName }}</p>
    <p> userName: {{ userName }}</p>
    <p> version: {{ appNameWithVersion }}</p>
    <p> userNameLast: {{ userNameLast }} </p>
    <h1>empty: {{ empty.name }}</h1>
    <v-btn @click="updateEmptyObj">修改empty对象</v-btn>
    <v-btn @click="commitChangeStore">修改store</v-btn>
    <v-btn @click="commitChangeUserName">修改userName</v-btn>
    <v-btn @click="dispatchChangeAppName">修改storeApp Name</v-btn>
    <v-btn @click="registModule">动态注册模块</v-btn>
    <div v-for="item in todoList" :key="item" >{{ item }}</div>
  </div>
</template>
<script>
import vue from 'vue'
import LInput from '@/components/l-input'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
// import { createNamespacedHelpers } from 'vuex'
// const {mapstate} = createNamespacedHelpers('user')
export default {
  name: 'store',
  components: {
    LInput
  },
  computed: {
    // appName () {
    //   return this.$store.state.appName
    // },
    // userName () {
    //   return this.$store.state.user.userName
    // },
    // ...mapState([
    //   'appName'
    // ])
    ...mapState({
      appName: state => state.appName,
      userName: state => state.user.userName,
      todoList: state => state.user.todo ? state.user.todo.todoList : []
    }),
    // ...mapGetters({
    //   appNameWithVersion: getters => getters.appNameWithVersion
    // })
    ...mapGetters([
      'appNameWithVersion',
      'userNameLast'
    ])
  },
  data: () => ({
    value: '',
    modalValue: '',
    empty: {}
  }),
  methods: {
    ...mapMutations([
      'SET_APP_NAME',
      'SET_USER_NAME'
    ]),
    ...mapActions([
      'updateAppName'
    ]),
    handleInput (value) {
      this.value = value
    },
    commitChangeStore () {
      // this.$store.commit('SET_APP_NAME', {
      //   appName: 'newAppName'
      // })
      // this.$store.commit({
      //   type: 'SET_APP_NAME',
      //   appName: 'newAppName'
      // })
      this.SET_APP_NAME({ appName: 'newAppName' })
    },
    updateEmptyObj () {
      // 方法一
      // this.empty.name = '张三'
      // this.$forceUpdate()
      // 方法二
      vue.set(this.empty, 'name', '张三')
    },
    commitChangeUserName () {
      this.SET_USER_NAME({
        userName: '张三'
      })
    },
    dispatchChangeAppName () {
      // this.$store.dispatch('updateAppName')
      this.updateAppName()
    },
    registModule () {
      this.$store.registerModule(['user', 'todo'], {
        state: {
          todoList: [
            '学习Action',
            '学习mutation',
            '学习state'
          ]
        }
      })
    }
  }
}
</script>
