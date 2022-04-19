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
      search: "",
      // "https://api.atlasacademy.io/nice/NA/servant/search?excludeCollectionNo=0&type=normal&className=saber&attribute=human&lang=en"
      //https://api.atlasacademy.io/basic/NA/servant/search?lang=en&excludeCollectionNo=0&type=normal
      //https://api.atlasacademy.io/nice/NA/servant/search?excludeCollectionNo=0&type=normal&className=saber&lang=en%22%20\
      //https://api.atlasacademy.io/nice/NA/servant/search?excludeCollectionNo=0&rarity=4&rarity=5&rarity=3&className=saber&lang=en
      //https://api.atlasacademy.io/nice/NA/servant/search?excludeCollectionNo=0&type=normal&className=saber&lang=en
    };
  },
  mounted() {
    axios
      .get(
        "https://api.atlasacademy.io/nice/NA/servant/search?excludeCollectionNo=0&type=normal&className=saber&lang=en",
        
      )
      .then((servants) => {
        // this.characters.push(servants.data)
        this.characters = servants.data;
        console.log(servants.data);
      });
  },  

  //la fonction dans le mounted est l'appel D'api qui permet de récuperer les données désirées dans ce cas là, 4
  //toutes les données sur les Servants
  computed: {
    filteredcharacters() {
      return this.characters?.filter((character) =>
        character?.name.toLowerCase().includes(this.search)
      );
    },
  },
  //la fonction dans le computed permet de créer une barre de recherche aui retourne un servant qui correspond à la recherche
};
</script>
<template>
  <input
    text="text"
    v-model="search"
    placeholder="Chercher un perso (en minuscules)"
  />
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
