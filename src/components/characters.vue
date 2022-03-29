<Character
            class="character"
            v-for="character in characters.results"
            :key="character.id"
            :name="character.name"
        />