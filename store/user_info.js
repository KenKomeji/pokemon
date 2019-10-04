export const state = () => ({
    user: "",
    uid: "",
    isSignedIn: false
  });

export const mutations = {
    login(state, user, uid) {
        state.user = user;
        state.uid = uid;
        state.isSignedIn = true;
    },
    logout(state) {
        state.user = "";
        state.isSignedIn = false;
    }
  }
export const getters = {
    get_user (state) {
        return state.user;
    },
    get_isSignedIn (state) {
        return state.isSignedIn;
    }
}