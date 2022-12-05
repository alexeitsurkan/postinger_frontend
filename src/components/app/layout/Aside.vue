<template>

  <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      default-active="2"
      text-color="#fff"
      @open="handleOpen"
      @close="handleClose"
  >

    <router-link to="/posts">
      <el-menu-item index="0">
        <el-icon>
          <Position/>
        </el-icon>
        <span>Posts</span>
      </el-menu-item>
    </router-link>

    <router-link to="/places">
      <el-menu-item index="1">
        <el-icon>
          <Place/>
        </el-icon>
        <span>Public Places</span>
      </el-menu-item>
    </router-link>

    <router-link to="/accounts">
      <el-menu-item index="2">
        <el-icon>
          <StarFilled/>
        </el-icon>
        <span>Accounts</span>
      </el-menu-item>
    </router-link>

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

