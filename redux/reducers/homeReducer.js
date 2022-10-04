import createReducer from "../createReducer";
import {HOME_ACT_SET_REPOS} from "../action";

const initialState = {
    homeReducer: undefined
}

const setHomeReducer = ( state, {payload}) => {
    return {
        ...state,
        homeReducer: payload
    }
}

export const home = createReducer(initialState, {
    [HOME_ACT_SET_REPOS]: setHomeReducer
})
