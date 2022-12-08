<template>
  <div class="fon">
    <div class="login">
      <div class="box-card">
        <el-card>
          <el-row class="mb-4">
            <h2>Login</h2>
          </el-row>
          <el-row class="mb-4">
            <el-input v-model="email" placeholder="email"/>
          </el-row>
          <el-row class="mb-4">
            <el-input v-model="password" placeholder="password"/>
          </el-row>
          <el-row class="mb-4">
            <el-button class="mr-4" type="primary" @click="onSubmit">Login</el-button>
            <el-button>
              <router-link to="/signup">Sign up</router-link>
            </el-button>
          </el-row>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignIn',
  data() {
    return {
      email: null,
      password: null,
    }
  },
  methods: {
    async onSubmit() {
      this.$store.dispatch('Login', this.email, this.password).then(() => {
        this.$router.push({name: 'Home'})
      });
    }
  }
}
</script>

<style>
.fon {
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
