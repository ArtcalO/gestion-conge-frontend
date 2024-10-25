<template>
  <router-view v-if="!!$store.state.user" />
  <login-view  v-else></login-view>
</template>

<script>
import LoginView from './views/auth/LoginView.vue';
export default {
  mounted(){
    let user = JSON.parse(localStorage.getItem("user"))
    if(user)
      this.$store.state.user = user
  },
  watch:{
    "$store.state.user"(newVal){
      if(newVal){
        localStorage.setItem("user", JSON.stringify(newVal))
      }
    }
  },
  components:{
    LoginView
  }
}
</script>

<style>

</style>