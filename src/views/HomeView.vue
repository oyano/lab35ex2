<template>
  <div>
    <h1>Вы находитесь на главной странице сайта</h1>
    <span>Вы можете перейти на страницу каталога товаров.<div class="btn text" @click="goCatalog">Перейти</div></span>
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
