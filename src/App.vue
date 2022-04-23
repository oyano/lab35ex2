<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/catalog">Catalog</router-link> |
      <router-link to="/add">Add</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
li{
  list-style-type: none
}
ul{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 70%;
  margin: 0 auto;
}
li a{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 20px 20px 20px;
}
img{
  width: 200px;
  transition: all .5s;
  margin-bottom: 10px;
}
.btn{
  width: 200px;
  height: 40px;

  background: #2c3e50;
  color: white;
  border-radius: 5px;
  border: solid 1px #2c3e50;

  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 20px 10px 20px;
  position: relative;
  cursor: pointer;
  transition: all .2s;
}
.btn:hover{
  background: #42b983;
  border: solid 1px #42b983;
}
span{
  font-size: 18px;
}
.text{
  display: inline;
  background-color: white;
  border: none;
  color: #42b983;
  margin: 0;
}
.text:hover{
  background-color: white;
  border: none;
}
.text:after{
  content: '';
  position: absolute;
  transform: translate(-71px,18px);
  width: 0%;
  height: 1px;
  background: #42b983;
  transition: all .2s;
}
.text:hover:after{
  content: '';
  position: absolute;
  transform: translate(-71px,18px);
  width: 100%;
  height: 1px;
  background: #42b983;
  transition: all .2s;
}
h2{
  font-size: 24px;
  display: flex;
  flex-wrap: wrap;
  max-width: 200px;
  margin: 20px auto;
}
.ContainerBtn{
  display: flex;
  justify-content: center;
}
.ContainerEdit{
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
}
.ContainerData{
  margin: 0 30px 0 30px;
  display:flex;
  flex-direction: column;
  align-items: center;
}
</style>
