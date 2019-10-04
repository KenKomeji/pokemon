<template>
    <div>
        <h1 class="title">
        {{ Role }}
        </h1>

        <div class="tile is-ancestor">
            <div class="tile is-parent is-vertical">
                <div v-for="party in parties" :key="party.title" class="tile is-child">
                    <Party :party="party" :role="Role" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Party from '~/components/Party.vue'

export default {
    layout: 'TeamBuilder',
    components: {
        Party
    },
    computed: {
        Role () { return this.$store.state.role.role }
    },
    data: () => ({
        parties: [
            {
                title: 'party1', 
                partyid: '12',
                role: 'BattleSpotSingle',
                pokemons: [
                    { 
                        name: 'mamoswine',
                        item: 'Choice Scarf',
                        Ability: 'Thick Fat',
                        Nature: 'Jolly',
                        ImageURL: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/473.png',
                        Move: [
                            { name: 'Icicle Spear'},
                            { name: 'Earthquake'},
                            { name: 'Superpower'},
                            { name: 'Icicle Crash'},
                        ],
                        Ev: { HP: 0, A: 252, D: 0, SpA: 0, SpD: 0, S: 252}
                    },
                    { 
                        name: 'blaziken-mega',
                        item: 'Blazikenite',
                        Ability: 'Speed Boost',
                        Nature: 'Hasty',
                        ImageURL: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10050.png',
                        Move: [
                            { name: 'Flare Blitz'},
                            { name: 'Hidden Power Ice'},
                            { name: 'Protect'},
                            { name: 'High Jump Kick'},
                        ],
                        Ev: { HP: 0, A: 244, D: 0, SpA: 76, SpD: 0, S: 188}
                    },
                    { 
                        name: 'thundurus-therian',
                        item: 'Electrium Z',
                        Ability: 'Volt Absorb',
                        Nature: 'Modest',
                        ImageURL: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10020.png',
                        Move: [
                            { name: 'Thunderbolt'},
                            { name: 'Hidden Power Ice'},
                            { name: 'Nasty Plot'},
                            { name: 'Agility'},
                        ],
                        Ev: { HP: 212, A: 0, D: 76, SpA: 164, SpD: 4, S: 52}
                    },                                        { 
                        name: 'tapu-lele',
                        item: 'Blazikenite',
                        Ability: 'Speed Boost',
                        Nature: 'Hasty',
                        ImageURL: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/786.png',
                        Move: [
                            { name: 'Flare Blitz'},
                            { name: 'Hidden Power Ice'},
                            { name: 'Protect'},
                            { name: 'High Jump Kick'},
                        ],
                        Ev: { HP: 0, A: 244, D: 0, SpA: 76, SpD: 0, S: 188}
                    },                                        { 
                        name: 'kartana',
                        item: 'Blazikenite',
                        Ability: 'Speed Boost',
                        Nature: 'Hasty',
                        ImageURL: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/798.png',
                        Move: [
                            { name: 'Flare Blitz'},
                            { name: 'Hidden Power Ice'},
                            { name: 'Protect'},
                            { name: 'High Jump Kick'},
                        ],
                        Ev: { HP: 0, A: 244, D: 0, SpA: 76, SpD: 0, S: 188}
                    },                                        { 
                        name: 'pheromosa',
                        item: 'Blazikenite',
                        Ability: 'Speed Boost',
                        Nature: 'Hasty',
                        ImageURL: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/795.png',
                        Move: [
                            { name: 'Flare Blitz'},
                            { name: 'Hidden Power Ice'},
                            { name: 'Protect'},
                            { name: 'High Jump Kick'},
                        ],
                        Ev: { HP: 0, A: 244, D: 0, SpA: 76, SpD: 0, S: 188}
                    }
                ]
            },
            {
                title: 'party2', 
                role: 'OU',
            }
        ]
    })
}
</script>