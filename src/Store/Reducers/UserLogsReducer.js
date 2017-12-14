import Action from './Action'

const initialState = {
    userLogs: 'No-Data'
}

export default function reducer(state = initialState, action) {
    switch (action.type) {

        case Action.increment:
            return Object.assign({}, state, action.data)

        case Action.decrement:
            return Object.assign({}, state, action.data)

        default:
            return state
    }
}
