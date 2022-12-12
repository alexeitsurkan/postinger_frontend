<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
  components: {}
}
</script>

<style>

html,body{
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  font-size: 16px;
  --el-collapse-header-font-size: 22px;
}

a{
  text-decoration: none;
}

.mb-4{
  margin-bottom: 1rem;
}

.mt-8{
  margin-top: 2rem;
}

.mr-2{
  margin-right: 0.5rem;
}

</style>
