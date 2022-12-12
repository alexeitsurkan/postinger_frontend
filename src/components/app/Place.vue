<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="platform" label="Платформа"/>
    <el-table-column prop="name" label="Название"/>
    <el-table-column fixed="right" label="Operations">
      <template #default>
        <el-button link type="primary" size="small" @click="handleDelete"><el-icon><Delete /></el-icon></el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>

export default {
  name: 'PlaceComponent',
  data() {
    return {
      tableData: []
    }
  },
  created() {
    this.tableData = [
      {
        platform: 'Vkontakte',
        name: 'Tom',
      },
      {
        platform: 'Telegram',
        name: 'Tom2',
      },
    ]
  },
  methods:{
    handleDelete(){

    },
  }
}
</script>

<style scoped>

</style>
