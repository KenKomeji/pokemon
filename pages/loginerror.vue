<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        Login Error Occur!!
      </h1>
      <h2 class="subtitle">
        <div class= "content">
            <p>login not complete</p>
            <p>sorry</p>
        </div>
      </h2>
      <div class="links">
        <nuxt-link
        to="/"
        >
        homeへ戻る
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>