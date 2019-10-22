<template>
  <div class="party" v-show="isDisplay">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">{{ Partytitle }}</p>
      </header>
      <div class="card-content">
        <div class="columns is-mobile">
          <div v-for="pokemon in this.party.pokemons" :key="pokemon.name" class="column">
            <PokemonImage :PokemonName="pokemon.name" :ImageURL="pokemon.ImageURL" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PokemonImage from "~/components/PokemonImage.vue";

export default {
  name: "Party",
  props: {
    party: {
      type: Object,
      default: null
    },
    role: {
      type: String,
      default: "ALL"
    }
  },
  components: {
    PokemonImage
  },
  computed: {
    isDisplay() {
      if (
        this.party.role == this.$store.state.role.role ||
        this.$store.state.role.role == "ALL"
      ) {
        return true;
      } else {
        return !true;
      }
    },
    Partytitle() {
      return this.party.title;
    }
  }
};
</script>

