<template>
  <div>
    <login-form
      :loginform="loginform"
      @handleLogin="handleLogin"
    />
  </div>
</template>
<script>
import LoginForm from '@/components/login-form.vue'
import { mapActions } from 'vuex'

export default {
  name: 'login',
  components: {
    LoginForm
  },
  data: () => ({
    loginform: {
      userName: '',
      password: ''
    }
  }),
  methods: {
    ...mapActions([
      'login'
    ]),
    handleLogin () {
      this.login(this.loginform).then(() => {
        this.$router.push({ name: 'home' })
      }).catch(err => {
        console.log('err=>', err)
      })
    }
  }
}
</script>
