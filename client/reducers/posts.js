// reducers tienen dos cosas:
// 1. the action (info sobre lo q ocurre)
// 2. copia del estado actual
// Aplica la acción y devuelve el estado modificado

function posts(state = [], action) {
  console.log('STATE POST', state, action);
  return state;
}

export default posts;
