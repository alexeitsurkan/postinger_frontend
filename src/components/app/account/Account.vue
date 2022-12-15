<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>Подключить аккаунт</span>
      </div>
    </template>

    <div class="demo-collapse">
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item title="Vkontakte" name="1">
          <Vkontakte/>
        </el-collapse-item>
        <el-collapse-item title="Telegram" name="2">
          <Telegram/>
        </el-collapse-item>
      </el-collapse>
    </div>
  </el-card>

  <el-card class="box-card">
    <el-row class="mt-8">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="platform" label="Платформа"/>
        <el-table-column prop="account_id" label="Аккаунт"/>
        <el-table-column fixed="right" label="">
          <template #default="scope">
            <el-button link type="primary" size="small" @click="handleDelete(scope.$index, scope.row)">
              <el-icon>
                <Delete/>
              </el-icon>
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
  </el-card>

</template>

<script>

import {Account} from "@/api/account";
import {Platform} from "@/api/platform";
import Vkontakte from "./Vkontakte.vue";
import Telegram from "./Telegram.vue";

export default {
  name: 'AccountComponent',
  components: {
    Vkontakte,
    Telegram,
  },
  data() {
    return {
      platforms: [],
      tableData: [],
      vk: {
        token: null,
        src: null,
      },
      tg: {
        token: null,
        src: null,
      }
    }
  },
  created() {
    Platform.get().then((res) => {
      this.platforms = res.data;
    });
    this.upTable();
  },
  methods: {
    handleDelete(index, item) {
      Account.delete(item.id).then(() => {
        this.tableData.splice(index, 1)
      })
    },
    upTable() {
      Account.get().then((res) => {
        res.data.forEach((item) => {
          let platform_name = Object.keys(this.platforms).find(key => this.platforms[key] === item.platform);
          this.tableData.push({
            id: item.id,
            platform: platform_name,
            account_id: item.sid,
          });
        })
      });
    }
  }
}
</script>

<style scoped>
.box-card {
  display: block;
  width: 100%;
  margin-top: 12px;
}
</style>
