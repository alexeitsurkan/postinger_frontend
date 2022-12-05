<template>
  <div class="fon">
    <div class="login">
      <div class="box-card">
        <el-card>
          <el-row class="mb-4">
            <h2>Sign up</h2>
          </el-row>
          <el-row class="mb-4">
            <el-input v-model="email" placeholder="email"/>
          </el-row>
          <el-row class="mb-4">
            <el-input v-model="password" placeholder="password"/>
          </el-row>
          <el-row class="mb-4">
            <el-button class="mr-4" type="primary">Sign up</el-button>
            <el-button><router-link to="/signin">Login</router-link></el-button>
          </el-row>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignUp'
}
</script>

<style>
.fon{
  background: #ccc;
}
.login {
  display: table;
  width: 480px;
  height: 100vh;
  margin: 0 auto;
}

.box-card {
  display: table-cell;
  vertical-align: middle;
}
</style>
