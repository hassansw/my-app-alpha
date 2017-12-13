import Action from './Action'

const initialState = {
    increment : false,
    decrement : false
}

export default function reducer(state = initialState, action ) {
  switch (action.type) {

case Action.increment :
    return Object.assign(
          {},
          state,
          action.num
        )
     
  case Action.decrement:
     return Object.assign(
      {},
      state,
      action.num
    )

  default:
    return state
  }
}
