<script scope>
// import { defineComponent } from '@vue/runtime-core'
import VGauge from "vgauge";
import { defineComponent, ref, onMounted } from 'vue'

export default {
  // name:'Details',
  data(){
    return{
      select:"",
    }
  },
  props: [
    "name",
    "face",
    "atk",
    "category",
    "hp",
    "rarity",
    "npname",
    "npdet",
    "npdesc",
    "npimg",
    "stage1",
    "stage2",
    "stage3",
            
  ],
  methods:{
    onChange: function(e){
        var id = e.target.value;
        // var name = e.target.options[e.target.options.selectedIndex].text;
        this.select = id;
        console.log('id ',id );
        console.log(this.select);

        // console.log('name ',name );
    }
  },
  created() {
  },
  
};
// console.log(atk)
</script>
<template>
<!-- <div class="wholecard">
  <div class="mycard">
    <div class="card">
      <h1 class="title">Servant Details</h1>
      <p class="title">{{ category }} : {{ name }}</p>
      <div class="container">
         <p>{{class}}</p> 
        <div class="details">
          <img :src="face" v-bind:alt="face" class="center" />
        </div>
      </div>
    </div>
  </div>
</div> -->
  <div class="mydesc">
    <h1 class="title">Servant Details</h1>
    <p class="title">{{ category }} : {{ name }}</p>
    <p>Attaque : {{ atk }}</p>
    <p>Nombre de Pts de Vie :{{ hp }}</p>
    <p>Rareté du personnage :{{ rarity }} étoiles</p>
    <p>Noble Phantasm : {{ npdet }}</p>
    <p>Description : {{ npdesc }}</p>
    <img :src="face" v-bind:alt="face" class="center" />
    <!-- <img :src="npimg" v-bind:alt="npimg" class="icon" /> -->
    <select v-on:change="onChange($event)" v-model="selected">
      <option value="" disabled selected>Select the stage </option>
      <option value="1">Stage 1</option>
      <option value="2">Stage 2</option>
      <option value="3">Stage 3</option>
    </select>
    <div v-if="this.select === '3'"> 
    <img :src="stage3">
    </div>
    <div v-else-if="this.select === '2'"> 
    <img :src="stage2">
    </div>
    <div v-else> 
    <img :src="stage1">
    </div>
    
    </div>
</template>
<style scoped>
.container {
  padding: 12px 16px;
  /* background-image:url("https://static.wikia.nocookie.net/fategrandorder/images/0/0d/SaberBackGold.png/") ; */
  background-size: 100%;
  /* height: 360px;
  width: 180px; */
}

/* .card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 10%;
  margin: 5%;
  height: 300px;
  width: 180px;
  /* background-image:url("../assets/frame.jpg"); */
  /* background-image: url("https://static.wikia.nocookie.net/fategrandorder/images/0/0d/SaberBackGold.png/");
  background-size: 100%;
  text-align: center; */
  /* margin:0 auto; */
  /* background-color: gold; */
/*} */
/* .card:hover {
  box-shadow: 0 16px 32px 0 rgba(0, 0, 0, 0.2);
} */
.center {
  position: relative;
  width: 50%;
  /* height: 100%; */
  /* object-fit:cover;  */
}
.icon {
  width: 50%;
  height: 10%;
  position: relative;
}
.title {
  color: rgb(251, 251, 246);
  text-transform: capitalize;
}
.details {
  color: rgb(244, 244, 244);
}
/* .mycard {
  margin-top: 80px;
} */
.mydesc {
  margin-top: 20%;

  position: relative;
  float: center;
  margin: 20%;
  margin-top: 5em;
  width: 20%;
  background-image: url("../assets/frame.jpg");
  background-size: 100%;
  color: aliceblue;
  text-align: center;
}
</style>
