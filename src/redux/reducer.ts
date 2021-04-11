import { combineReducers } from 'redux';

const testReducer = (state = [], action: any) => {
    switch(action.type) {
        case "ADD_TEST":
            return [...state, {test: action.payload}]
        default: return state
    }
}

const rootReducer = combineReducers({
    test: testReducer,
});

export default rootReducer;