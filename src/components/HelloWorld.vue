<script>
// import { ref } from 'vue';
// import axios from 'axios';


// import { defineComponent } from 'vue';

//coucou le pull
export default {
  props: ["name", "face", "atk", "category", "hp", "rarity", "npname","perso"],
  //les différents éléments hérités du composant Characters
  data() {
    return {
      npdet: [],
      npdesc: [],
      npimg: [],
      stage1:[],
      stage2:[],
      stage3:[],
    };
  },
  created() {
    // console.log(JSON.parse(JSON.stringify(this.npname[0])));
    console.log(JSON.parse(JSON.stringify(this.perso[1])));
    this.npdet = JSON.parse(JSON.stringify(this.npname[0].name));
    this.npdesc = JSON.parse(JSON.stringify(this.npname[0].detail));
    this.npimg = JSON.parse(JSON.stringify(this.npname[0].icon));
    this.stage1 =JSON.parse(JSON.stringify(this.perso[1]));
    this.stage2 =JSON.parse(JSON.stringify(this.perso[2]));
    this.stage3 =JSON.parse(JSON.stringify(this.perso[3]));
    //Certains éléments auxquels on veut accéder sont contenus dans un array multidimensionnel
    //et donc nous devons appeler ces fonctons pour pouvoir les afficher( ici on veut afficher le Noble Phantasm)
    //On utilise Json.stringify pour passer le contenu de l'array en string (JSON) puis
    //On utilise Json.parse pour convertir le Json en objet car je trouve l'exploitation plus simple 
  },
};
</script>

<template>
<!-- ces différents éléments seront passés dans la route en tant que paramètre -->

  <div class="card">
    <div class="container">
      <router-link
        :to="{
          name: 'Details',
          params: {
            name: name,
            atk: atk,
            face: face,
            category: category,
            hp: hp,
            rarity: rarity,
            npdet: npdet,
            npdesc: npdesc,
            npimg: npimg,
            stage1 : stage1,
            stage2 : stage2,
            stage3 : stage3,
          },
        }"
      >
        {{ name }}
      </router-link>
      <br />
      <img :src="face" />
    </div>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
div {
  text-align: center;
  /* display: inline; */
}
.container {
  padding: 2px 4px;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 10%;
  margin: 5%;
  display: inline-block;
  /* background-color: gold; */
}
.card:hover {
  box-shadow: 0 32px 64px 0 rgba(0, 0, 0, 0.2);
}
</style>
