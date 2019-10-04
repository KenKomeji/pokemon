<template>
  <div class="container">
    <div>
        <h1 class="title">
        PokemonTop
        </h1>
        <h2 class="subtitle">
            You can make party & record battle result!!
        </h2>
        <div class="links">
            <nuxt-link
                to="/pokemon/TeamBuilder"
                class="button"
            >
                TeamBuilder
            </nuxt-link>
        </div>
        <div class="links">
            <a
                href="https://github.com/nuxt/nuxt.js"
                target="_blank"
                class="button"
            >
                GitHub
            </a>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {

  }
}
</script>