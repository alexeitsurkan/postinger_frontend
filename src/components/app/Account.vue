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

                <el-form-item label="Ссылка на профиль">
                  <el-input v-model="tg.src"/>
                </el-form-item>

                <el-form-item label="Токен">
                  <el-input v-model="tg.token"/>
                </el-form-item>

                <el-form-item>
                  <el-button type="primary">Подключить</el-button>
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
                  <el-button type="primary">Подключить</el-button>
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
            <el-table-column prop="name" label="Название"/>
            <el-table-column fixed="right" label="Operations">
              <template #default>
                <el-button link type="primary" size="small" @click="handleDelete">
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

export default {
  name: 'AccountComponent',
  data() {
    return {
      tableData: [],
      tg: {
        'token': null,
        'src': null,
      }
    }
  },
  created() {
    this.tableData = [
      {
        platform: 'Vkontakte',
        name: '12345',
      },
      {
        platform: 'Telegram',
        name: '12345',
      },
    ]
  },
  methods: {
    handleDelete() {

    }
  }
}
</script>

<style scoped>
.box-card{
  display: block;
  width: 100%;
  margin-top: 12px;
}
</style>
