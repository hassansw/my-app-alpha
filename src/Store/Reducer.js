const initialState = {
    increment : false,
    decrement : false
}

export default function reducer(state = initialState, action ) {
  switch (action.type) {

  case increment:
    return { 
        
     }
  case decrement:
     return {
       
     }

  default:
    return state
  }
}
