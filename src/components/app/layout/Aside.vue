<template>

  <el-menu
      :router="true"
      active-text-color="#ffd04b"
      background-color="#545c64"
      text-color="#fff"
  >

      <el-menu-item index="/posts">
        <el-icon>
          <Position/>
        </el-icon>
        <span>Posts</span>
      </el-menu-item>

      <el-menu-item index="/accounts">
        <el-icon>
          <StarFilled/>
        </el-icon>
        <span>Accounts</span>
      </el-menu-item>

  </el-menu>
</template>

<script>
export default {
  name: 'AsideLayout',
  components: {}
}
</script>

<style>

</style>

