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

      <el-form-item label="Ссылка на паблик">
        <el-input v-model="src" placeholder="https://t.me/your-public-key"/>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitTelegram">Подключить</el-button>
      </el-form-item>

    </el-form>
</template>

<script>

import {Account} from "@/api/account";
import {Platform} from "@/api/platform";

export default {
  name: 'TelegramComponent',
  data() {
    return {
      platforms: [],
      token: null,
      src: null,
    }
  },
  created() {
    Platform.get().then((res) => {
      this.platforms = res.data;
    });
  },
  methods: {
    submitTelegram() {
      let account_id = this.tg.src.split('/').pop();
      Account.add(this.platforms.Telegram, account_id, this.tg.token).then(() => {

      })
    },
  }
}
</script>

<style scoped></style>
