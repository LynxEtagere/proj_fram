<template>

<Character
            class="character"
            v-for="character in characters.results"
            :key="character.id"
            :name="character.name"
            :character="character"
/>

</template>

<script>

import { defineComponent } from "vue";
import Characters from "./characters.vue";


export default defineComponent({
    props: {
        character: {
            Type: Object,
        }
    },
    components: { Characters }
})

</script>

<style scoped>
.calculator {
  background-color: rgba(15, 26, 75, 0.911);
  /* margin: 1em; */
  padding: 1em;
  width: 200px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
}
</style>