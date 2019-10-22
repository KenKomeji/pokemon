import pokedata from '~/assets/pokedata.json'

export const state = () => ({
    data: pokedata,
  })

export const getters = {
    getAllPokemon ( state ) {
        return state.data.slice()
    },
    getSortData ( state, sortkey) {
        console.log(pokedata)
        var tmp = state.data.slice()
        tmp.sort( function (poke1, poke2) {
            var order = 'des'
            if ( sortkey !='id'){
                order = 'asc'
            }
            if ( sortkey == 'SUM') {
                if ( 
                    (poke1.H + poke1.D + poke1.spA + poke1.spB + poke1.S)
                    < (poke2.H + poke2.D + poke2.spA + poke2.spB + poke2.S)
                ){
                    if(order == 'des')
                        return 1;
                    else return -1;
                }
                else{ 
                    if( order == 'des')
                        return -1;
                    else return 1;
                }
            }
            else {
                if ( poke1[sortkey] < poke2[sortkey]){
                    if(order == 'des')
                        return 1;
                    else return -1;
                }
                else {
                    if( order == 'des')
                        return -1;
                    else return 1;
                }
            }
        })
        console.log(tmp)
        return tmp
    }
}

export const actions = {
    
}