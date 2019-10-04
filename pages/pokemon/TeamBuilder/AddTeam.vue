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
            <div class="button has-background-info">Add Pokemon</div>
            <div class="button has-background-primary">Complete</div>
          </div>
        </div>
        <div class="box">
          <div class="media">
            <div class="media-left">
              <figure class="image">
                <img
                  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/473.png"
                />
              </figure>
            </div>
            <div class="media-content">
              <div class="content">
                <div class="columns">
                  <div class="column">
                    <label class="label">Pokemon</label>
                    <input class="input" type="text" :value="'mamoswine'" />
                  </div>
                  <div class="column">
                    <label class="label">Item</label>
                    <input class="input" type="text" :value="'choice-scarf'" />
                  </div>
                  <div class="column">
                    <label class="label">Ability</label>
                    <input class="input" type="text" :value="'thick-fat'" />
                  </div>
                  <div class="column">
                    <label class="label">Nature</label>
                    <input class="input" type="text" :value="'modest'" />
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
                            <th>Evs</th>
                            <th></th>
                            <th>IVs</th>
                            <th>Stats</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th>HP</th>
                            <td>0</td>
                            <td>
                              <input claas="input" type="text" :value="'0'" maxlength='3' size="3" />
                              <input class="slider" step="4" min="0" max="252" value="0" type="range" />
                            </td>
                            <td>31</td>
                            <td>155</td>
                          </tr>
                          <tr>
                            <th>Attack</th>
                            <td>252</td>
                            <td>
                              <input claas="input" type="text" :value="'252'" maxlength='3' size="3" />
                              <input class="slider" step="4" min=0 max=252 value=252 type="range" />
                            </td>
                            <td>31</td>
                            <td>182</td>
                          </tr>
                          <tr>
                            <th>Defence</th>
                            <td>252</td>
                            <td>
                              <input claas="input" type="text" :value="'252'" maxlength='3' size="3" />
                              <input class="slider" step="4" min=0 max=252 value=252 type="range" />
                            </td>
                            <td>31</td>
                            <td>182</td>
                          </tr>
                          <tr>
                            <th>Sp.A</th>
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
import { mapMutations, mapState } from "vuex";
//import bulmaSlider from 'bulma-extensions/bulma-slider/dist/js/bulma-slider.js'
import 'bulma-extensions/bulma-slider/dist/css/bulma-slider.min.css';

export default {
  layout: "TeamBuilder",
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
      "ChangeRole"
    ])
  },
  computed: {
    ...mapState("AddingTeams", ["parties", "selected_party_num"]),
    AddingParties() {
      return this.parties;
    },
    Selected_Party() {
      return this.AddingParties.find(
        party => party.partyid == this.selected_party_num
      );
    }
  }
};
</script>