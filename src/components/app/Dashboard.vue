<template>
  <el-container>
    <el-header class="header">
      <Header/>
    </el-header>
    <el-container class="container-aside">
        <el-aside>
          <Aside/>
        </el-aside>
        <el-container class="container-main">
          <el-main>
            <Main/>
          </el-main>
          <el-footer>
            <Footer/>
          </el-footer>
        </el-container>
    </el-container>
  </el-container>
</template>

<script>
import Header from './layout/Header.vue'
import Aside from './layout/Aside.vue'
import Main from './layout/Main.vue'
import Footer from './layout/Footer.vue'

export default {
  name: 'DashboardComponent',
  components: {
    Header,
    Aside,
    Main,
    Footer,
  }
}
</script>

<style scoped>
.header {
  position: fixed;
  padding: 0;
  left: 0;
  right: 0;
  z-index: 1;
}

.container-aside {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin-top: 59px;
  overflow: auto;
}

.el-aside{
  height: 100%;
}

.container-main{
  overflow: auto;
}

.el-main{
  min-height: 100vh;
}
.el-footer{
  min-height: 12px;
  background: #ccc;
}
</style>
