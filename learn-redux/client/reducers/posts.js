// a reducer takes in 2 things = 1. action , 2. Copy of the current state 

import React from 'react'

function posts(state = [], action ) {
  console.log('The post will change!!!!');
  console.log(React.version);
  console.log(state, action);
  return state;
}

export default posts;