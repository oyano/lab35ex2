<template>
  <div>
    <h1>Вы находитесь на главной странице сайта</h1>
    <h2>Вы можете перейти на страницу каталога товаров.<div class="btn text" @click="goCatalog">Перейти</div></h2>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  methods:{
    goCatalog(){
      this.$router.push('/catalog');
    }
  }
}
</script>
