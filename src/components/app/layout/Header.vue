<template>
  <el-menu
      :router="true"
      mode="horizontal"
      :ellipsis="false"
  >
    <el-menu-item index="/">POSTINGER</el-menu-item>

    <div class="flex-grow"/>

    <el-menu-item index="null" @click="logout">Logout</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'HeaderLayout',
  methods: {
    logout() {
      this.$store.dispatch('logout').then(() => {
        this.$router.push({name: 'Signin'})
      });
    },
  }
}
</script>

<style>
.flex-grow {
  flex-grow: 1;
}
</style>
