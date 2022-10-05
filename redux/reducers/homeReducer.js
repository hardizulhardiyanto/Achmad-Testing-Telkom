import createReducer from "../createReducer";
import {HOME_ACT_SET_REPOS} from "../action";

const initialState = {
    listRepos: undefined
}

const setHomeReducer = ( state, { resultGet }) => {
    return {
        ...state,
        listRepos: resultGet
    }
}

export const home = createReducer(initialState, {
    [HOME_ACT_SET_REPOS]: setHomeReducer
})
