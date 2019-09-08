export const state = () => ({
    user: "",
    isSignedIn: false
  });

export const mutations = {
    login(state, user) {
        state.user = user;
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