<template>
<div>
    <figure class="image">
        <img :src="this.ImageURL" :alt="Name">
    </figure>
    <p> {{ getImageURL() }}</p>
</div>
</template>

<script>
   export default {
        name: "PokemonImage",
        props: {
            PokemonName: {
            type: String,
            default: null
            },
            ImageURL: {
                type: String,
                default: null
            }
        },
        

        computed: {
            Name () { return this.PokemonName},
        },
        methods: {
            getImageURL() {
                /*
                URL = "https://pokeapi.co/api/v2/pokemon/" + this.PokemonName + "/"
                var request = new XMLHttpRequest();
                request.open('GET', URL, false);
                request.send(null);   

                if( request.status === 200) {
                    console.log(this.response)
                }
                */
               console.log(this.ImageURL)
            }
        }
   }
</script>