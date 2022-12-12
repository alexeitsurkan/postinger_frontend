<template>
  <el-form
      status-icon
      label-width="auto"
  >
    <el-form-item label="Место публикации">
      <el-select v-model="publicPlaceValue" placeholder="">
        <el-option
            v-for="item in publicPlaces"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
      </el-select>
    </el-form-item>

    <el-form-item label="Название поста">
      <el-input
          v-model="title"
          maxlength="50"
          placeholder=""
          show-word-limit
          type="text"
      />
    </el-form-item>
    <el-form-item label="Текст поста">
      <el-input
          v-model="text"
          maxlength="5000"
          placeholder=""
          show-word-limit
          type="textarea"
      />
    </el-form-item>
    <el-form-item label="Время публикации">
      <el-date-picker
          v-model="datetime"
          type="datetime"
          placeholder=""
          :default-time="defaultTime"
      />
    </el-form-item>
    <el-form-item>

      <el-button type="primary">Добавить пост</el-button>
    </el-form-item>
  </el-form>
</template>

<script>

export default {
  name: 'PostForm',
  data() {
    return {
      publicPlaces: [],
      publicPlaceValue: '',
      text: '',
      title: '',
      datetime: '',
      defaultTime: new Date()
    }
  },
  created() {
  },
  methods: {}

}
</script>

<style scoped>

</style>
