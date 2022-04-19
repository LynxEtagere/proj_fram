<script>
import { defineComponent } from "@vue/runtime-core";
// // import HelloWorld from './components/HelloWorld.vue'
// import Characters from './components/HelloWorld.vue'
// import axios from 'axios'
import store from "./store";

export default defineComponent({});
</script>
<template>
  <img class="center" alt="Vue logo" src="./assets/fgo.png" />
  <nav class="nav">
    <router-link to="/Servants">Liste des servants</router-link>
    <router-link to="/">Acceuil</router-link>
    <!-- <router-link to="/">Nobles Phantasms</router-link> -->
    <!-- Le routeur permet de naviguer parmis les routes que l'on va utuiliser dans cette aplication -->
  </nav>
  <router-view />
  <br />
</template>

<style>
@font-face {
  font-family: "fgofont";
  /* src: url("https://en.fontworks.co.jp/fontsearch/skippro-l/"); */
  src: url("https://fonts.google.com/specimen/Open+Sans");
}
div {
  font-family: sans-serif;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
}
body {
  background-image: url("./assets/mainmenu.png");
  background-size: 100%;
  background-attachment: fixed;
}
.nav {
  background-color: #b3cdd1;
  overflow: hidden;
  padding: 10px;
  text-align: center;
  color: white;
  font-size: 20px;
  margin: 0.5em;
  width: 95%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
a:hover {
  background-color: yellow;
  height: 20%;
}
</style>
