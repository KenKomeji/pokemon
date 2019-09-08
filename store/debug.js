export const state = () => ({
    isUse: false,
  });

export const mutations = {
    use(state) {
        state.isUse = true;
    },
    unuse(state) {
        state.isUse = false;
    }
  }