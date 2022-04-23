<template>
  <div>
    <div class="ContainerEdit">
      <div class="ContainerData"> <!--v-for="item in item" :key="item.id" -->
        <h1>Предпросмотр:</h1>
        <h2>{{item.name}}</h2>
        <img :src="getImg(item.img)">
        <h2>Цена товара: {{item.price}}</h2>
      </div>
      <div  class="ContainerData"> <!--v-for="(item, index) in item" :key="index"-->
        <h1>Редактирование:</h1>
        <label>Название: </label>
        <input type="text" v-model="item.name" >
        <label>Цена: </label>
        <input type="number" v-model="item.price" >
      </div>
    </div>
    <div class="ContainerBtn">
      <div class="btn" @click="EditNote(item.id)">Изменить товар</div>
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
      item: [],
    }
  },
  created() {
    this.GetData()
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
      await this.$http.get(`http://localhost:3000/items`,{params:{id: id}})
          .then(res => res.json())
          .then(res => this.item = res[0])
    },
    EditNote(id){
      let note = {
        id: id,
        name: this.item.name,
        img: this.item.img,
        price: this.item.price
      }
      console.log(note)
      this.$http.put(`http://localhost:3000/items/${id}`, note).then(res => console.log(res));
      this.$router.push(`/catalog/item/${id}`)
    },
  }
}
</script>

<style scoped>

</style>