<template>
  <div>
    <h1 class="title">EditTeam</h1>
    <div class="tabs">
      <ul>
        <div v-for="party in AddingParties" :key="party.title">
          <li v-bind:class="[party.partyid == selected_party_num ? 'is-active' : '']">
            <a>
              <span @click="SelectTeam(party.partyid)">{{ party.title }}</span>
              <span class="icon">
                <i class="fa fa-minus" @click="DeleteParty(party.partyid)"></i>
              </span>
            </a>
          </li>
        </div>
        <li>
          <a @click="AddParty">
            <span class="icon">
              <i class="fa fa-plus"></i>
            </span>
          </a>
        </li>
      </ul>
    </div>
    <div>
      <div v-if="Selected_Party != null ">
        <div class="columns is-mobile is-vcentered">
          <div class="column is-one-third">
            <label class="label">PartyName</label>
            <input
              class="input"
              type="text"
              :value="this.Selected_Party.title"
              @input="ChangeTitle({SPN:selected_party_num,Title:$event.target.value})"
            />
          </div>
          <div class="column is-one-third">
            <label class="label">Role</label>
            <div class="select">
              <select
                :value="this.Selected_Party.role"
                @change="ChangeRole({SPN:selected_party_num,Role:$event.target.value})"
              >
                <option disabled value>Please select role</option>
                <option>BattleSpotSingle</option>
                <option>OU</option>
              </select>
            </div>
          </div>
          <div class="column">
            <div class="button has-background-info" @click="AddPokemon({SPN:selected_party_num})">Add Pokemon</div>
            <div class="button has-background-primary">Complete</div>
          </div>
        </div>
        <div v-for="pokemon in Selected_Party.pokemons" :key="pokemon.index">
        <div class="box" >
          <div class="media">
            <div class="media-left">
              <PokemonImage :PokemonName="pokemon.name" :ImageURL="pokemon.ImageURL" />
            </div>
            <div class="media-content">
              <div class="content">
                <div class="columns">
                  <div class="column">
                    <label class="label">Pokemon</label>
                    <input 
                      class="input" 
                      type="text" 
                      :value="pokemon.name"  
                      @focus="change_modal_appear(pokemon.index)"
                    />
                    <div class="modal" 
                      v-bind:class="[pokemon.index == modal_appear ? 'is-active' : '']">
                      <div class="modal-background"></div>
                      <div class="modal-card">
                        <header class="modal-card-head">
                          <div class="modal-card-title">
                            Selected:
                            <input class="input is-small"  
                              type="text"
                              :value="selected_pokemon"
                              @change="filterPokemon($event.target.value)"
                            >
                          </div>
                          <button 
                            class="delete" 
                            aria-label="close" 
                            @click="reflesh_selected_pokemon()"
                          ></button>
                        </header>
                        <section class="modal-card-body">
                          <table class="table is-hoverable is-narrow">
                          <thead>
                            <tr>
                              <th>name</th>
                              <th>type1</th>
                              <th>type2</th>
                              <th>Abilities</th>
                              <th @click="change_sortkey('H')">HP</th>
                              <th @click="change_sortkey('A')">Atk</th>
                              <th @click="change_sortkey('D')">Def</th>
                              <th @click="change_sortkey('spA')">SpA</th>
                              <th @click="change_sortkey('spB')">SpD</th>
                              <th @click="change_sortkey('S')">Spe</th>
                              <th @click="change_sortkey('SUM')">BST</th>
                            </tr>  
                          </thead>
                          <tbody>
                          <tr v-for="poke in AllPokeData" :key="poke.id">
                            <th @click="change_selected_pokemon(poke.name)">{{ poke.name }} </th>
                            <td>{{ poke.first_type }}</td>
                            <td>{{ poke.second_type }}</td>
                            <td>
                              <span class="is-small">
                                {{ poke.ability1 }}<br/>
                                {{ poke.ability2 }}<br/>
                                {{ poke.ability3 }}
                              </span>
                            </td>
                            <td>{{ poke.H }}</td>
                            <td>{{ poke.A }}</td>
                            <td>{{ poke.D }}</td>
                            <td>{{ poke.spA }}</td>
                            <td>{{ poke.spB }}</td>
                            <td>{{ poke.S }}</td>
                            <td>{{ poke.H + poke.A + poke.D + poke.spA + poke.spB + poke.S }}</td>
                          </tr>
                          </tbody>
                          </table>
                        </section>
                        <footer class="modal-card-foot">
                          <button
                            class="button is-success"
                            @click="setPokemon(selected_pokemon,selected_party_num,pokemon.index)"

                          >
                            set pokemon
                          </button>
                          <button 
                            class="button" 
                            @click="reflesh_selected_pokemon()"
                          >
                            Cancel
                          </button>
                        </footer>
                      </div>
                    </div>
                  </div>
                  <div class="column">
                    <label class="label">Item</label>
                    <input class="input" type="text" :value="pokemon.item" />
                  </div>
                  <div class="column">
                    <label class="label">Ability</label>
                    <div class="select">
                      <select
                        :value="pokemon.Ability"
                        @change="ChangeAbility({SPN:selected_party_num,pokeidx:pokemon.index,Role:$event.target.value})"
                      >
                        <option disabled value>Please select pokemon</option>
                        <option v-for="ability of pokemon.ability_list" :key="ability">
                          {{ability}}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="column">
                    <label class="label">Nature</label>
                    <input class="input" type="text" :value="pokemon.Nature" />
                  </div>
                </div>
                <details class="columns">
                  <summary>Other Info</summary>
                  <div class="column">
                    <div class="field">
                      <label class="label">Move</label>
                      <div class="control">
                        <input class="input" type="text" :value="'icicle-spear'" />
                      </div>
                      <div class="control">
                        <input class="input" type="text" :value="'earthquake'" />
                      </div>
                      <div class="control">
                        <input class="input" type="text" :value="'superpower'" />
                      </div>
                      <div class="control">
                        <input class="input" type="text" :value="'icicle Crash'" />
                      </div>
                    </div>
                  </div>
                  <div class="column">
                    <div class="field">
                      <label class="label">Stat&Ev</label>
                      <table class="table is-hoverable">
                        <thead>
                          <tr>
                            <th></th>
                            <th>Base</th>
                            <th>Evs</th>
                            <th></th>
                            <th>IVs</th>
                            <th>Stats</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th>HP</th>
                            <td>{{ pokemon.Base.HP }}</td>
                            <td>
                              <input claas="input" type="text" :value="pokemon.Ev.HP" maxlength='3' size="3" 
                                @input="ChangeEv({
                                  SPN:selected_party_num,
                                  IDX:pokemon.index,
                                  KIND:'HP',
                                  Ev:$event.target.value
                                  })"
                              />
                            </td>
                            <td>
                              <input class="slider" step="4" min="0" max="252" :value="pokemon.Ev.HP" type="range"
                                @input="ChangeEv({
                                  SPN:selected_party_num,
                                  IDX:pokemon.index,
                                  KIND:'HP',
                                  Ev:$event.target.value
                                  })"
                              />
                            </td>
                            <td>
                              <input claas="input" type="text" :value="pokemon.Iv.HP" maxlength='2' size="2" 
                                @input="ChangeIv({
                                  SPN:selected_party_num,
                                  IDX:pokemon.index,
                                  KIND:'HP',
                                  Ev:$event.target.value
                                  })"
                              />
                            </td>
                            <td>{{ 
                              Math.floor(
                                (
                                  pokemon.Base.HP*2+pokemon.Iv.HP+Math.floor(pokemon.Ev.HP/4)
                                )
                                *50/100
                              )
                              +50+10 
                              }}</td>
                          </tr>
                          <tr>
                            <th>Attack</th>
                            <td>{{ pokemon.Base.A }}</td>
                            <td>{{ pokemon.Ev.A }}</td>
                            <td>
                              <input claas="input" type="text" :value="pokemon.Ev.A" maxlength='3' size="3" />
                              <input class="slider" step="4" min="0" max="252" :value="pokemon.Ev.A" type="range" />
                            </td>
                            <td>31</td>
                            <td>155</td>
                          </tr>
                          <tr>
                            <th>Defence</th>
                            <td>50</td>
                            <td>252</td>
                            <td>
                              <input claas="input" type="text" :value="'252'" maxlength='3' size="3" />
                              <input class="slider" step="4" min=0 max=252 value=252 type="range" />
                            </td>
                            <td>{{ pokemon.Iv.A }}</td>
                            <td>182</td>
                          </tr>
                          <tr>
                            <th>Sp.A</th>
                            <td>50</td>
                            <td>252</td>
                            <td>
                              <input claas="input" type="text" :value="'252'" maxlength='3' size="3" />
                              <input class="slider" step="4" min=0 max=252 value=252 type="range" />
                            </td>
                            <td>31</td>
                            <td>182</td>
                          </tr>
                          <tr>
                            <th>Sp.D</th>
                            <td>50</td>
                            <td>252</td>
                            <td>
                              <input claas="input" type="text" :value="'252'" maxlength='3' size="3" />
                              <input class="slider" step="4" min=0 max=252 value=252 type="range" />
                            </td>
                            <td>31</td>
                            <td>182</td>
                          </tr>
                          <tr>
                            <th>Speed</th>
                            <td>50</td>
                            <td>252</td>
                            <td>
                              <input claas="input" type="text" :value="'252'" maxlength='3' size="3" />
                              <input class="slider" step="4" min=0 max=252 value=252 type="range" />
                            </td>
                            <td>31</td>
                            <td>182</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="column">
                    <div class="field">
                      <label class="label">Memo</label>
                      <div class="control">
                        <textarea class="textarea" :value="'icicle-spear'"></textarea>
                      </div>
                    </div>
                  </div>
                </details>
              </div>
            </div>
            <div class="media-right">
              <button class="button" 
                @click="DeletePokemon({SPN:selected_party_num,IDX:pokemon.index})"
              >
                <span class="icon">
                  <i class="fa fa-minus"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div v-else>
        <h2 class="subtitle" is-info>
          Add Team!!
          <br />Please click plus button!!
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState, mapGetters,mapActions } from "vuex";
import PokemonImage from "~/components/PokemonImage.vue";
//import bulmaSlider from 'bulma-extensions/bulma-slider/dist/js/bulma-slider.js'
//import 'bulma-extensions/bulma-slider/dist/css/bulma-slider.min.css';

export default {
  layout: "TeamBuilder",
  components: {
    PokemonImage
  },
  data () {
    return {
      sortkey :'id',
      selected_pokemon: '',
      modal_appear: '',
      AllPokeData: this.getSortData(this.sortkey),
    }
  },
  /*
    data () {
        return {
            sliders : []
        }
    },
    mounted: function () {
        this.sliders = bulmaSlider.attach()
    },
    */
  methods: {
    ...mapMutations("AddingTeams", [
      "AddParty",
      "DeleteParty",
      "SelectTeam",
      "ChangeTitle",
      "ChangeRole",
      "AddPokemon",
      "ChangeEv",
      "ChangeIv",
      "DeletePokemon",
      "SetPokemon",
      "ChangeAbility"
    ]),
    ...mapGetters("pokedata",[
      "getAllPokemon",
      "getSortData"
    ]),
    ...mapActions("pokedata",[
    ]),
    SortData ( data , sortkey) {
      data.sort( function (poke1, poke2) {
          var order = 'des'
          if ( sortkey =='id'){
              order = 'asc'
          }
          if ( sortkey == 'SUM') {
              var poke1sum = poke1.H + poke1.A + poke1.D + poke1.spA + poke1.spB + poke1.S
              var poke2sum = poke2.H + poke2.A + poke2.D + poke2.spA + poke2.spB + poke2.S
              if ( poke1sum < poke2sum){
                  if(order == 'des'){
                      return 1;
                  }
                  else return -1;
              }
              else{ 
                  if( order == 'des'){
                      return -1;
                  }
                  else return 1;
              }
          }
          else {
              if ( poke1[sortkey] < poke2[sortkey]){
                  if(order == 'des'){
                      return 1;
                  }
                  else return -1;
              }
              else {
                  if( order == 'des'){
                      return -1;
                  }
                  else return 1;
              }
          }
      })
    },
    filterPokemon ( str) {
      this.selected_pokemon = str
      var tmp = this.getAllPokemon()
      console.log(tmp)
      var regex = RegExp( str )
      this.AllPokeData = tmp.filter(pokemon => regex.test(pokemon.name))
    },
    change_selected_pokemon( name){
      this.selected_pokemon = name
      console.log(name)
    },
    reflesh_selected_pokemon(){
      this.selected_pokemon = ''
      this.modal_appear = ''
      this.AllPokeData = this.getAllPokemon()
    },
    change_sortkey( key) {
      this.sortkey = key
      this.SortData(this.AllPokeData,this.sortkey)
      console.log(this.AllPokeData)
    },
    change_modal_appear( pokeid ) {
      this.modal_appear = pokeid
    },
    setPokemon( name, selected_party_num,pokeindex){
      var alldata = this.getAllPokemon()
      var targetpoke = alldata.find(poke => poke.name == name)
      this.SetPokemon({Data:targetpoke,SPN:selected_party_num,IDX:pokeindex})
      this.reflesh_selected_pokemon()

    },
    /*getAbilityList( name ){
      if( name === 'undefined'){
        return null
      }
      var abilityList = []
      var targetpoke = this.getAllPokemon().find(poke => poke.name == name)
      if ( targetpoke === 'undefined'){
        if( targetpoke.ability1 != ""){
          abilityList.push(targetpoke.ability1)
        }
        if( targetpoke.ability2 != ""){
          abilityList.push(targetpoke.ability2)
        }
        if( targetpoke.ability2 != ""){
          abilityList.push(targetpoke.ability2)
        }
        return abilityList
      }
    },*/
  },
  computed: {
    ...mapState(
      "AddingTeams", ["parties", "selected_party_num"]
      ),
    AddingParties() {
      return this.parties;
    },
    Selected_Party() {
      return this.AddingParties.find(
        party => party.partyid == this.selected_party_num
      );
    },
  },
};
</script>