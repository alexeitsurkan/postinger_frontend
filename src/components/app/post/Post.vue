<template>
  <el-row class="mb-4">
    <router-link to="posts/post-form">
    <el-button type="primary">Добавить пост</el-button>
    </router-link>
  </el-row>
  <el-row class="mb-4">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="datetime" label="Дата"/>
      <el-table-column prop="text" label="Текст"/>
      <el-table-column fixed="right" label="">
        <template #default="scope">
          <el-button link type="primary" size="small" @click="handleEdit(scope.$index, scope.row)"><el-icon><Edit /></el-icon></el-button>
          <el-button link type="primary" size="small" @click="handleDelete(scope.$index, scope.row)"><el-icon><Delete /></el-icon></el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-row>

</template>

<script>

import {Post} from "@/api/post";

export default {
  name: 'PostComponent',
  data() {
    return {
      tableData: []
    }
  },
  created() {

    Post.get().then((res) => {
      res.data.forEach((item) => {
        this.tableData.push({
          id: item.id,
          datetime: item.datetime.date,
          text: item.text,
        });
      })
    })
  },
  methods:{
    handleDelete(index, item){
      Post.delete(item.id).then(() => {
        this.tableData.splice(index, 1)
      })
    },
    handleEdit(index, item){
      console.log(index, item);
    }
  }
}
</script>

<style scoped>

</style>
