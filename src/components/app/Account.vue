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
          <el-form
              status-icon
              label-width="auto"
          >
            <ol>
              <li>В поле <b>Ссылка на профиль</b> введите ссылку на профиль, который хотите подключить. Вы можете
                найти
                ее в разделе Информация канала или группы. Добавьте несколько пабликов, если необходимо, кликнув на
                Добавить новый паблик .
              </li>
              <li>В поле <b>Токен</b> бота введите токен, полученный от @BotFather после успешного создания бота.
              </li>
            </ol>

            <el-form-item label="Номер страницы">
              <el-input v-model="vk.id"/>
            </el-form-item>

            <el-form-item label="Токен">
              <el-input v-model="vk.token"/>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="submitVkontakte">Подключить</el-button>
            </el-form-item>

          </el-form>
        </el-collapse-item>
        <el-collapse-item title="Telegram" name="2">
          <el-form
              status-icon
              label-width="auto"
          >
            <ol>
              <li>В поле <b>Токен бота</b> бота введите токен, полученный от @BotFather после успешного создания
                бота.
              </li>
              <li>В поле <b>Ссылка на паблик</b> введите ссылку на паблик, который хотите подключить. Вы можете
                найти ее
                в разделе Информация канала или группы. Добавьте несколько пабликов, если необходимо, кликнув на
                Добавить новый паблик .
              </li>
            </ol>

            <el-form-item label="Токен бота">
              <el-input v-model="tg.token"/>
            </el-form-item>

            <el-form-item label="Ссылка на паблик">
              <el-input v-model="tg.src"/>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="submitTelegram">Подключить</el-button>
            </el-form-item>

          </el-form>
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

export default {
  name: 'AccountComponent',
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
      console.log(res);
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
    submitVkontakte() {
      Account.add(this.platforms.Vkontakte, this.vk.id, this.vk.token).then(() => {

      })
    },
    submitTelegram() {
      let account_id = this.tg.src.split('/').pop();
      Account.add(this.platforms.Telegram, account_id, this.tg.token).then(() => {

      })
    },
    upTable() {
      Account.get().then((res) => {
        res.data.forEach((item) => {
          this.tableData.push({
            id: item.id,
            platform: item.platform,
            account_id: item.account_id,
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
