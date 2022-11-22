<template>
  <div id="app">
    <nav>
      <router-link to="/">Пользователи</router-link>
      <router-link to="/add">Добавить пользователя</router-link>
    </nav>

    <router-view></router-view>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #f7f7f7;
  height: 100vh;
}

nav {
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background-color: #f5f5f5;
  margin-bottom: 40px;
  border-bottom: 2px solid #ebebeb;
  box-shadow: 0 2px 2px #ebebeb;
}

nav a {
  font-weight: bold;
  margin: 10px 20px;
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #fc5d5d;
}
</style>