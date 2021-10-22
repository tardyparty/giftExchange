import * as ACTION_TYPES from '../actions/action_types'


export const initialState = {
    stateProp1: false,
    stateProp2: false
}

export const Reducer1 = ( state = initialState, action ) => {
    switch (action.type) {
        case ACTION_TYPES.SUCCESS:
            return {
                ...state,
                stateProp1: true,
                stateProp2: true
            }
        case ACTION_TYPES.FAILURE:
            return {
                ...state,
                stateProp1: false,
                stateProp2: false
            }
        default:
            throw new Error();
    }
}
