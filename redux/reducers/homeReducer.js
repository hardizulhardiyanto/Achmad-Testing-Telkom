import createReducer from "../createReducer";
import {HOME_ACT_SET_REPOS} from "../action";

const initialState = {
    homeReducer: undefined
}

const setHomeReducer = ( state, { resultGet }) => {
    return {
        ...state,
        homeReducer: resultGet
    }
}

export const home = createReducer(initialState, {
    [HOME_ACT_SET_REPOS]: setHomeReducer
})
