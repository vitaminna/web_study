import {DECREMENT, INCREMENT} from "./mutations_types";

export  default  {
  [INCREMENT](state){
    state.counter++
  },
  [DECREMENT](state){
    state.counter--
  },
  updateInfo(state,age) {
    state.vitamin.age=age;
  }

}
