const initialState = {
    increment : false,
    decrement : false
}

export default function reducer(state = initialState, action ) {
  switch (action.type) {

  case increment:
    return { 
        
     }

  default:
    return state
  }
}
