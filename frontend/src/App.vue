<template>
  <div id="app">
    <div class="container-fluid container-md">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss"> // Pour respecter les standarts WCAG je me suis servi du css en modifiant les couleurs
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  background-color: #fafbff;
  min-height: 100%;
  .container-fluid{
    max-width: 1000px;
  }
  a {
    color: #2c3e50;
  }
  nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #0132c6;
    }
  }
}
}
.text-muted {
    color: #000000!important;
    font-size: 15px;
}
.text-danger {
    color: #ed0e0e!important;
}
</style>