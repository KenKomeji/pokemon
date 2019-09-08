<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        pokemon
      </h1>
      <h2 class="subtitle">
        <div class="content" v-if="isSignIn">
            <p>Login complete</p>
            <p>Welcome {{ $store.state.user_info.user }} </p>
        </div>
        <div class= "content" v-else>
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
  },
  computed: {
      isSignIn () { return this.$store.state.user_info.isSignedIn}
  }
}
</script>