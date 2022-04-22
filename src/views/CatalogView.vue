<template>
  <div>
    <h1>CatalogView</h1>
    <ul>
      <li v-for="item in items" :key="item.id">
        <router-link exact :to="'catalog/item/' + item.id">
          <img :src="getImg(item.img)">
          {{item.name}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CatalogView",
  data(){
    return{
      items: Object
    }
  },
  beforeCreate(){
    this.$http.get(`http://localhost:3000/items`)
        .then(res => res.json())
        .then(res => this.items = res)
  },
  methods:{
    getImg(img){
      return require('../assets/' + img)
    }
  }

}
</script>