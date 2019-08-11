// reducers tienen dos cosas:
// 1. the action (info sobre lo q ocurre)
// 2. copia del estado actual
// Aplica la acción y devuelve el estado modificado

function posts(state = [], action) {
  // console.log('STATE POST', state, action);
  // return state;

  switch(action.type) {
    case 'INCREMENT_LIKES' :
      console.log("Incremeting likes!!", action);
      const i = action.index;
      return [
        ...state.slice(0, i),
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1)
      ]
      default: 
      return state;
  }
}

export default posts;
