<template>
  <div>
    <div class="ContainerData">
      <h1>
        Add View
      </h1>
      <label>Название: </label>
      <input type="text" @keyup="IsNotEmpty" v-model="item.name">
      <label>Цена: </label>
      <input type="number" @keyup="IsMinValue" v-model="item.price">
      <div class="btn" @click="AddNote">Добавить</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddView",
  data(){
    return{
      item:{
          name: 'Название',
          price: 1,
        },
      minValue: 1,
    }
  },
  methods:{
    AddNote(){
      let note = {
        name: this.item.name,
        price: this.item.price,
        img: 'default.jpg',
      }
      this.$http.post('http://localhost:3000/items', note).then(res => console.log(res));
      this.$router.push('/catalog')
    },
    IsMinValue(){
      if(this.item.price < this.minValue){
        this.item.price = this.minValue
      }
    },
    IsNotEmpty(){
      setTimeout(()=>{
        if(this.item.name === '') {
          this.item.name = 'Название'
        }
      },1000)
    },
  }
}
</script>

<style scoped>

</style>