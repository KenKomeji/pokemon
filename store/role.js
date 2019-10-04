export const state = () => ({
    role: "ALL",
  });

export const mutations = {
    ALL(state) {
        state.role = "ALL";
    },
    BSS(state) {
        state.role = "BattleSpotSingle";
    },
    OU(state) {
        state.role = "OU";
    }
  }