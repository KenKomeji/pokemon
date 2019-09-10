<template>
  <div class="container">
    <div>
        <logo />
        <h1 class="title">
            User Page
        </h1>
        <h2 class="subtitle" v-if="isSignIn">
        <div class="content" >
            <p>Your Login Name</p>
            <p>{{ $store.state.user_info.user }} </p>
        </div>
        <div class= "content">
            <p class="control">
                <a class="button is-primary is-horizontal-center" @click="logout()">
                    <span class="icon">
                        <i class="fa fa-user"></i>
                    </span>
                    <span>logout</span>
                </a>
            </p>
        </div>
        </h2>
        <h2 class="subtitle" v-else>
            <div class="content">
              <p>Logout Complete</p>
            </div>
            <div class= "content">
                <p class="control">
                    <a class="button is-primary is-horizontal-center" @click="login()">
                        <span class="icon">
                            <i class="fa fa-user"></i>
                        </span>
                        <span>login</span>
                    </a>
                </p>
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
    },
    methods: {
        logout() {
            const firebase = require('firebase/app');
            require('firebase/auth');
            firebase.auth().signOut().then(()=>{
                this.$store.commit('user_info/logout');
            })
            .catch( (error)=>{
                console.log('logout error (${error})');
            });
                
        },
        login() {
            const firebase = require('firebase/app');
            require('firebase/auth');
            var provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithRedirect(provider);
        },
    }
}
</script>

<style>
.is-horizontal-center {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>