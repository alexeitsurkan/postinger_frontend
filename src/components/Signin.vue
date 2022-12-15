<template>
  <div class="fon">
    <div class="login">
      <div class="box-card">
        <el-card>
          <el-form
              status-icon
              label-width="auto"
          >

            <el-row class="mb-4">
              <h2>Login</h2>
            </el-row>
            <el-form-item>
              <el-input id="email" v-model="email" placeholder="email"/>
            </el-form-item>
            <el-form-item>
              <el-input id="password" type="password" v-model="password" placeholder="password"/>
            </el-form-item>
            <el-form-item>
              <el-button class="mr-4" type="primary" @click="onSubmit">Login</el-button>
              <el-button>
                <router-link to="/signup">Sign up</router-link>
              </el-button>
            </el-form-item>
          </el-form>
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
    onSubmit() {
      this.$store.dispatch('login', {email: this.email, password: this.password}).then(() => {
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
