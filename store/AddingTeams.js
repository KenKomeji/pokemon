export const state = () => ({
    parties: [],
    next_num: 1,
    selected_party_num: null
  });

export const mutations = {
    AddParty(state) {
        state.parties.push(
            {
                title: "untitled"+state.next_num,
                partyid: state.next_num,
                role: "",
                pokemons: []
            }
        );
        state.selected_party_num = state.next_num;
        state.next_num += 1;
    },
    DeleteParty(state,partyid) {
        state.parties = state.parties.filter(party => party.partyid != partyid);
        if ( state.selected_party_num = partyid) {
            if( state.parties.length != 0 ) {
                state.selected_party_num = state.parties[0].partyid;
            }
            else {
                state.selected_party_num = 0;
            }
        }
    },
    SelectTeam(state,partyid) {
        state.selected_party_num = partyid;
    },
    ChangeTitle(state,{SPN:selected_party_num,Title:title}){
        state.parties.forEach(element => {
            if ( element.partyid == selected_party_num){
                element.title = title;
            }
        });
    },
    ChangeRole(state,{SPN:selected_party_num,Role:role}){
        state.parties.forEach(element => {
            if ( element.partyid == selected_party_num){
                element.role = role;
            }
        });
    },
    AddPokemon(state,{SPN:selected_party_num}){
        state.parties.forEach(element => {
            if ( element.partyid == selected_party_num){
                if ( element.pokemons.length < 6) {
                    element.pokemons.push(
                        {
                        index: element.pokemons.length + 1,
                        name: '',
                        item: '',
                        Ability: '',
                        Nature: '',
                        ImageURL: '',
                        Move: [
                            { name: ''},
                            { name: ''},
                            { name: ''},
                            { name: ''},
                        ],
                        Base: { HP: 50, A: 50, D: 50, SpA: 50, SpD: 50, S: 50},
                        Ev: { HP: 0, A: 0, D: 0, SpA: 0, SpD: 0, S: 0},
                        Iv: { HP: 31, A: 31, D: 31, SpA: 31, SpD: 31, S: 31},
                        memo: '',
                        ability_list: [],
                        move_list: []
                        }
                    )
                }
            }
        })
    },
    ChangeEv(state,{
        SPN: selected_party_num,
        IDX: index,
        KIND: kind,
        Ev: Ev 
    }) {
        state.parties.forEach(party => {
            if( party.partyid == selected_party_num){
                party.pokemons.forEach(pokemon => {
                    if( pokemon.index == index ){
                        pokemon.Ev[kind] = Ev
                    }
                })
            }
        })
    },
    ChangeIv(state,{
        SPN: selected_party_num,
        IDX: index,
        KIND: kind,
        Ev: Iv 
    }) {
        state.parties.forEach(party => {
            if( party.partyid == selected_party_num){
                party.pokemons.forEach(pokemon => {
                    if( pokemon.index == index ){
                        pokemon.Iv[kind] = Iv
                    }
                })
            }
        })
    },
    DeletePokemon(state,{
        SPN: selected_party_num,
        IDX: index,
    }) {
        state.parties.forEach(party => {
            if( party.partyid == selected_party_num){
                party.pokemons = party.pokemons.filter(pokemon => pokemon.index != index)
            }
        })
    },
    SetPokemon(state,{Data: pokedata,SPN:selected_party_num,IDX:poke_index}){
        console.log(pokedata)
        console.log(selected_party_num)
        console.log(poke_index)
        state.parties.forEach(element => {
            if ( element.partyid == selected_party_num){
                element.pokemons.forEach(pokemon => {
                    if ( pokemon.index == poke_index ){
                        pokemon.name = pokedata.name
                        pokemon.ImageURL = pokedata.image
                        pokemon.Base.HP = pokedata.H
                        pokemon.Base.A = pokedata.A
                        pokemon.Base.D = pokedata.D
                        pokemon.Base.SpA = pokedata.spA
                        pokemon.Base.SpD = pokedata.spB
                        pokemon.Base.S = pokedata.S

                        if( pokedata.ability1 != ''){
                            pokemon.ability_list.push(pokedata.ability1)
                        }
                        if( pokedata.ability2 != '' ){
                            pokemon.ability_list.push(pokedata.ability2)
                        }
                        if( pokedata.ability3 != '' ){
                            pokemon.ability_list.push(pokedata.ability3)
                        }
                        console.log(pokemon.ability_list)
                    }
                })
            }
        })
    },
    ChangeAbility(state, {SPN:selected_party_num,pokeidx:index,Role:abilityname}){
        state.parties.forEach(element => {
            if ( element.partyid == selected_party_num){
                element.pokemons.forEach(pokemon => {
                    if ( pokemon.index == index ){
                        pokemon.Ability = abilityname
                    }
                })
            }
        })
    }
  }