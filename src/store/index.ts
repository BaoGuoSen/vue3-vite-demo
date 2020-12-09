import { createStore } from 'vuex'

interface State {
  userName: string
}

const store = createStore({
  state(): State {
    return {
      userName: "国森",
    };
  },
});

export default store