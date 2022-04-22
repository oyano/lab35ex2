<template>
  <div>
    <div class="ContainerEdit">
      <div v-for="value in item" :key="value.id" class="ContainerData">
        <h1>Предпросмотр:</h1>
        <h2>{{value.name}}</h2>
        <img :src="getImg(value.img)">
        <h2>Цена товара: {{value.price}}</h2>
      </div>
      <div v-for="(value,index) in item" :key="index" class="ContainerData">
        <h1>Редактирование:</h1>
        <label>Название: </label>
        <input type="text" v-model="value.name" >
        <label>Цена: </label>
        <input type="number" v-model="value.price" >
      </div>
    </div>
    <div class="ContainerBtn">
      <div class="btn" @click="goBack">Назад</div>
    </div>
  </div>

</template>

<script>
export default {
  name: "EditView",
  data(){
    return{
      item: Object,
    }
  },
  created() {
    this.GetData().then()
    console.log(this.item)
  },
  methods:{
    goBack(){
      this.$router.push('/catalog');
    },
    getImg(img){
      return require('../assets/' + img)
    },
    async GetData(){
      let id = this.$route.params['id']
      await this.$http.get(`http://localhost:3000/items/?id=${id}`)
          .then(res => res.json())
          .then(res => this.item = res)
    }
  }
}
</script>

<style scoped>

</style>