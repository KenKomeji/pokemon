<template>
    <nav class="navbar has-background-light">
        <div class="navbar-brand">
            <nuxt-link class="navbar-item" to="/">
                <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma" width="112" height="28">
            </nuxt-link>
            <div class="navbar-burger burger" data-target="navbarMenu" @click="showNav = !showNav" :class="{'is-active': showNav}">
                <span></span>
                <span></span>
                <span></span>
             </div>
        </div>
        <div id="navbarExampleTransparentExample" class="navbar-menu" :class="{'is-active':showNav}">
            <div class="navbar-end">
                <nuxt-link class="navbar-item" to="/">
                   HOME
                </nuxt-link>
                <div class="navbar-item has-dropdown is-hoverable">
                   <div class="navbar-dropdown is-boxed">
                       <nuxt-link v-for="item in items" :key="item.title" :to="item.url" class="navbar-item">
                           {{ item.title }}
                       </nuxt-link>
                   </div>
                </div>
                <div v-if="isSignIn" class="navbar-item">
                    <p class="control">
                        <a class="button is-primary" href="/userpage">
                            <span class="icon">
                                <i class="fa fa-user"></i>
                            </span>
                            <span>{{ username_display }}</span>
                        </a>
                    </p>
                </div>
                <div v-else class="navbar-item">
                    <p class="control">
                        <a class="button is-info" @click="login()">
                                <span class="icon">
                                    <i class="fa fa-user"></i>
                                </span>
                            <span>login</span>
                        </a>
                    </p>
                </div>
            </div>
        </div>
     </nav>
</template>

<script>
//   import feature from '~/pages/feature.vue'
//   import contact from '~/pages/contact.vue'
    import firebase from "@/plugins/firebase.js"
    export default {
        components: {
//           feature,
//           contact
        },
        computed: {
            isSignIn () { return this.$store.state.user_info.isSignedIn},
            username_display () { return this.$store.state.user_info.user}
        },
        data: () => ({
            showNav: false,
            items: [
                { title: 'Home', icon: 'home', url: '/' },
            ]
        }),
        methods: {
            login() {
                const firebase = require('firebase/app');
                require('firebase/auth');
                var provider = new firebase.auth.GoogleAuthProvider();
                firebase.auth().signInWithRedirect(provider);
            },
            logout() {
                const firebase = require('firebase/app');
                require('firebase/auth');
                firebase.auth().signOut().then(()=>{
                    this.$store.commit('user_info/logout');
                })
                .catch( (error)=>{
                    console.log('logout error (${error})');
                    location.href("/loginerror");
                });
                
            }
        }
   }
</script>

<style>
.navbar {
　　margin-bottom: 20px;
}
</style>