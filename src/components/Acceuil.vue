<template>
  <div class="banner">
    <p>
      Bienvenue sur notre site dont le thème est le jeu mobile Fate Grand Order.
      C'est un jeu inspiré du Visual Novel Fate Stay/night créé en 2004 par la
      compagnie Type-moon sur Pc. Afin de récupérer des données, nous utilisons
      l'API de l'Atlas Academy qui peut être trouvée à cette addresse
      <a href="https://api.atlasacademy.io/rapidoc">Atlas Academy</a>. Pour le
      moment, le site permet d'observer 34 personnages venant du jeu mobile, par
      observer je veux dire afficher leur noms et les différentes statistiques
      fournies par le jeu
    </p>
  </div>
    <div class="video">
          <video height="1080" width="720" autoplay muted loop>
            <source src="../assets/fgo.mp4" type="video/mp4">
          </video>
    </div>
</template>

<script>
import VuePlayerVideo from "vue3-player-video";

export default {
  components: {
    VuePlayerVideo,
  },
};
</script>
<style>
.banner {
  background-color: lightgoldenrodyellow;
}
.video{
  margin:10%;
}
</style>
