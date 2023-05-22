<template>
  <h1>Welcome</h1>

  <router-link to="/">Home</router-link> | 
  <router-link to="/login">signin</router-link> | 
  <router-link to="/signup" >signup</router-link>

  <router-view></router-view>
</template>

<script>
// import LoginView from './presentation/views/LoginView.vue';


export default {
  name: 'App',
  components: {
    // LoginView
}
}
</script>

<style>

</style>
