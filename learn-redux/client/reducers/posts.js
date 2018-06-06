// a reducer takes in 2 things = 1. action , 2. Copy of the current state 

function posts(state = [], action ) {
  console.log(state, action);
  return state;
}

export default posts;