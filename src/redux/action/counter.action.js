import * as ActionTypes from '../Actiontypes'

export const increment = () => (dipatch) => {
    dipatch({type: ActionTypes.INCREMENT_COUNTER})

}

export const decrement = () => (dipatch) => {
    dipatch({type: ActionTypes.DECREMENT_COUNTER})

}