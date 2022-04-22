<template>
  <div>
    <div v-for="value in item" :key="value.id">
      <h1>Вы хотите удалить: {{value.name}}</h1>
      <img :src="getImg(value.img)">
      <h2>Цена товара: {{value.price}}</h2>
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
  beforeCreate() {
    let id = this.$route.params['id']
    this.$http.get(`http://localhost:3000/items/?id=${id}`)
        .then(res => res.json())
        .then(res => this.item = res)
  },
  methods:{
    goBack(){
      this.$router.push('/catalog');
    },
    goDelete(){
      this.$router.push('/catalog/delete/' + this.id);
    },
    getImg(img){
      return require('../assets/' + img)
    }
  },
}
</script>

<style scoped>

</style>