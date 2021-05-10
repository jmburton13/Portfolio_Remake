<template>
  <div id="app">
    <nav-bar />
    <div id="main">
      <router-view />
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
    
  }
}
</script>

<style>

#app {
  height: 100vh;
  width: 100vw;
  max-width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

#main {
  height: 100vh;
  background-image: url(https://media.beam.usnews.com/bd/c1/b1eb15f44e1fa0877f853e979280/181129-editorial.vertical.forests_lead.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}

</style>
