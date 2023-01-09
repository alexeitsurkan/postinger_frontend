<template>
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
        <el-input v-model="token"/>
      </el-form-item>

      <el-form-item v-for="(href, index) in hrefs" :key="index" label="Ссылка на паблик">
        <el-input v-model="hrefs[index]" placeholder="https://t.me/your-public-key"/>
        <el-button v-if="index !== 0" @click="handleDelete(index)">Удалить</el-button>
      </el-form-item>

      <el-form-item>
        <el-button type="default" @click="addNewPublic">Добавить новый паблик</el-button>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitTelegram">Подключить</el-button>
      </el-form-item>

    </el-form>
</template>

<script>

import {Account} from "@/api/account";


export default {
  name: 'TelegramComponent',
  data() {
    return {
      token: null,
      hrefs: [''],
    }
  },
  methods: {
    submitTelegram() {
      let account_id = this.tg.src.split('/').pop();
      Account.add(this.$store.state.platforms.Telegram, account_id, this.tg.token).then(() => {

      })
    },
    addNewPublic(){
      this.hrefs.push('');
    },
    handleDelete(index){
      alert(index);
      delete this.hrefs[index];
      alert(this.hrefs);
    }
  }
}
</script>

<style scoped></style>
