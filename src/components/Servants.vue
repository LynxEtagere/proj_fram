<script>
import { defineComponent } from "@vue/runtime-core";
import Characters from "../components/HelloWorld.vue";
import axios from "axios";

export default {
  components: {
    // Header,
    Characters,
  },
  data() {
    return {
      characters: [],
      // search: "",
    };
  },


  //la fonction dans le mounted est l'appel D'api qui permet de récuperer les données désirées dans ce cas là,
  //toutes les données sur les Servants
  computed: {
    // filteredcharacters() {
    //   return this.characters?.filter((character) =>
    //     character?.name.toLowerCase().includes(this.search)
    //   );
    // },
    characters(){
      console.log(this.$store.getters.getChar)
      return this.$store.getters.getChar
    }
  },
  //la fonction dans le computed permet de créer une barre de recherche aui retourne un servant qui correspond à la recherche
};
</script>
<template>
<!-- La fonction recherche ne fonctionne plus de puis l'implémentation du store -->
  <!-- <input
    text="text"
    v-model="search"
    placeholder="Chercher un perso (en minuscules)"
  /> -->
  <div v-if="search">
    <Characters
      v-for="character in filteredcharacters"
      :key="character.id"
      :name="character.name"
      :face="character.extraAssets.faces.ascension[4]"
      :perso="character.extraAssets.charaFigure.ascension"
      :atk="character.atkMax"
      :category="character.className"
      :hp="character.hpMax"
      :rarity="character.rarity"
      :npname="character.noblePhantasms"
    >
    </Characters>
  </div>
  <!-- le composant characters ci-dessus permettra de renvoyer le résultat de la recherche --> 
  <div v-else>
    <Characters
      v-for="character in characters"
      :key="character.id"
      :name="character.name"
      :face="character.extraAssets.faces.ascension[4]"
      :perso="character.extraAssets.charaFigure.ascension"
      :atk="character.atkMax"
      :category="character.className"
      :hp="character.hpMax"
      :rarity="character.rarity"
      :npname="character.noblePhantasms"
    >
    </Characters>
  </div>
  <!-- Le composant characters récupère les données contenues dans la  donnée character définie dans le data puis on utilise 
  un v-for afin de parcourir les données que l'on va bind pour pouvoir les  faire passer dans le props afin que les données
  contenues dans characters puissent être affichées.-->
</template>

<style>
input {
  margin: 1%;
}
</style>
