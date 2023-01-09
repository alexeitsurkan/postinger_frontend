<template>

  <template v-if="currentStep === 1">
    <el-form status-icon label-width="auto">
      <ol>
        <li>В поле <b>Ссылка на профиль</b> введите ссылку на профиль, который хотите подключить.
        </li>
        <li>В поле <b>Токен</b> введите токен.
        </li>
      </ol>

      <el-form-item label="Номер страницы">
        <el-input v-model="step1.id"/>
      </el-form-item>

      <el-form-item label="Токен">
        <el-input v-model="step1.token"/>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitVkontakte">Подключить</el-button>
      </el-form-item>

    </el-form>
  </template>

  <template v-if="currentStep === 2">

    <el-form status-icon label-width="auto">
      <el-form-item>
        <el-checkbox
            v-model="step2.checkAll"
            :indeterminate="false"
            @change="handleCheckAllChange"
        >Выбрать все</el-checkbox
        >
        <el-checkbox-group
            v-model="step2.checkedPlaces"
        >
          <el-checkbox v-for="(place,index) in step2.places" :key="index" :label="place.name"/>
        </el-checkbox-group>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitPlace">Добавить</el-button>
      </el-form-item>
    </el-form>
  </template>
</template>

<script>

import {Account} from "@/api/account";
import {PublicPlace} from "@/api/publicPlace";

export default {
  name: 'VkontakteComponent',
  data() {
    return {
      step1: {
        token: null,
        id: null,
      },
      step2: {
        account_id: null,
        checkAll: false,
        checkedPlaces: [],
        places: [],
      },
      currentStep: 1,
    }
  },
  methods: {
    submitVkontakte() {
      let platform = this.$store.state.platforms.Vkontakte;
      Account.add(platform, this.step1.id, this.step1.token).then((res) => {
        this.step2.account_id = res.data;
        PublicPlace.pull(platform,this.step2.account_id).then((res) => {
          this.currentStep=2;
          this.step2.places = res.data;
        })
      })
    },
    submitPlace(){
      let data = [];
      this.step2.places.forEach((item)=>{
        if(this.step2.checkedPlaces.includes(item.name)){
          data.push({
            account_id:this.step2.account_id,
            public_place_id:item.id,
            name:item.name,
          });
        }
      });
      PublicPlace.add(data).then(() => {
        alert('send');
      })
    },
    handleCheckAllChange(val) {
      if(val){
        this.step2.places.forEach((item)=>{
          this.step2.checkedPlaces.push(item.name);
        })
      }else{
        this.step2.checkedPlaces = [];
      }
    }
  }
}
</script>

<style scoped></style>
