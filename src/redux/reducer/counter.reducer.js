import * as ActionTypes from '../Actiontypes'

const iniState = {
    count : 0 
}

export const counterReducer = (state = iniState, action) => {
    switch (action.type) {
        case ActionTypes.INCREMENT_COUNTER:
            return {
                count: state.count + 1
            }

        case ActionTypes.DECREMENT_COUNTER:
            return {
                count: state.count - 1
            }
        default:
            return state;
    }
}