<template>
    <aside class="menu column is-2 is-fullheight section is-hidden-mobile">
        <p class="menu-label">Navigation</p>
        <ul class="menu-list">
            <li>
                <nuxt-link to="/pokemon/TeamBuilder/AddTeam" @click.native="AddParty">Add Team</nuxt-link>
            </li>
        </ul>
        <p class="menu-label">Roles</p>
        <ul class="menu-list">
            <li>
                <nuxt-link to="/pokemon/TeamBuilder" @click.native=changeALL()>
                    All
                </nuxt-link>
            </li>
            <li>
                <nuxt-link to="/pokemon/TeamBuilder" @click.native=changeBSS()>
                    BattleSpotSingle
                </nuxt-link>
            </li>
            <li>
                <nuxt-link to="/pokemon/TeamBuilder" @click.native=changeOU()>
                    OU
                </nuxt-link>
            </li>
        </ul>
    </aside>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    
    name: "TeamBuilderSidebar",

    methods: {
        changeALL() {
            this.$store.commit('role/ALL');
        },
        changeBSS() {
            this.$store.commit('role/BSS');
        },
        changeOU() {
            this.$store.commit('role/OU');
        },
        ...mapMutations('AddingTeams',[
            'AddParty',
        ])
    }
}
</script>