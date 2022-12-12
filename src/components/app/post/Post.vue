<template>
  <el-row class="mb-4">
    <router-link to="posts/post-form">
    <el-button type="primary">Добавить пост</el-button>
    </router-link>
  </el-row>
  <el-row class="mb-4">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="Дата"/>
      <el-table-column prop="name" label="Заголовок"/>
      <el-table-column fixed="right" label="Operations">
        <template #default>
          <el-button link type="primary" size="small" @click="handleEdit"><el-icon><Edit /></el-icon></el-button>
          <el-button link type="primary" size="small" @click="handleDelete"><el-icon><Delete /></el-icon></el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-row>

</template>

<script>

export default {
  name: 'PostComponent',
  data() {
    return {
      tableData: []
    }
  },
  created() {
    this.tableData = [
      {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
    ]
  },
  methods:{
    handleDelete(){

    },
    handleEdit(){

    }
  }
}
</script>

<style scoped>

</style>
