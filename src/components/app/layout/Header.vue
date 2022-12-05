<template>
    <el-menu
        :router="true"
        mode="horizontal"
        :ellipsis="false"
    >
      <el-menu-item index="0">Postinger</el-menu-item>
      <div class="flex-grow" />
      <el-menu-item index="1">Logout</el-menu-item>
    </el-menu>
</template>

<script>
export default {
  name: 'HeaderLayout',
}
</script>

<style>
.flex-grow {
  flex-grow: 1;
}
</style>
