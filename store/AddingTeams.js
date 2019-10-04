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
                role: ""
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

  }