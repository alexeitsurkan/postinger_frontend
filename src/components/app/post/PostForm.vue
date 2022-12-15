<template>
  <el-form
      status-icon
      label-width="auto"
  >
    <el-form-item label="Место публикации">
      <el-select v-model="publicPlaceId" placeholder="">
        <el-option
            v-for="item in publicPlaces"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
      </el-select>
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

      <el-button type="primary" @click="submitPost">Добавить пост</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import {Post} from "@/api/post";

export default {
  name: 'PostForm',
  data() {
    return {
      publicPlaces: [],
      publicPlaceId: '',
      text: '',
      datetime: '',
      defaultTime: new Date()
    }
  },
  created() {
  },
  methods: {
    submitPost(){
      Post.add(this.publicPlaceId, this.text, this.datetime).then((res) => {
        if (res) this.$router.push({name: 'Home'})
      })
    }
  }
}
</script>

<style scoped>

</style>
