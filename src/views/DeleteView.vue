<template>
  <div>
    <div>
      <h1>Вы хотите удалить: {{item.name}}</h1>
      <img :src="getImg(item.img)">
      <h2>Цена товара: {{item.price}}</h2>
      <div class="ContainerBtn">
        <div class="btn" @click="DeleteNote(item.id)">Удалить товар</div>
      </div>
      <div class="ContainerBtn">
        <div class="btn" @click="goBack">Назад</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DeleteView",
  data(){
    return{
      id: this.$route.params['id'],
      item: Object
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
    GetData(){
      let id = this.$route.params['id']
      this.$http.get(`http://localhost:3000/items`,{params: {id: id}})
          .then(res => res.json())
          .then(res => this.item = res[0])
    },
    DeleteNote(id){
      this.$http.delete(`http://localhost:3000/items/${id}`)
          .then(res => console.log(res));
      this.$router.push('/catalog')
    },
  }
}
</script>

<style scoped>

</style>