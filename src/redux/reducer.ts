import { combineReducers } from 'redux';

const testReducer = (state = [], action: any) => {
    switch(action.type) {
        case "ADD_TEST":
            return Object.assign({}, state, action.payload);
        default: return state
    }
}

const loanReducer = (state = 0, action: any) => {
    switch(action.type) {
        case "ADD_LOAN":
            return action.payload
        default: return state
    }
}

const feeReducer = (state = 0, action: any) => {
    switch(action.type) {
        case "ADD_FEE":
            return action.payload
        default: return state
    }
}

const aprReducer = (state = 0, action: any) => {
    switch(action.type) {
        case "ADD_APR":
            return action.payload
        default: return state
    }
}

const rootReducer = combineReducers({
    test: testReducer,
    totalLoan: loanReducer,
    totalFee: feeReducer,
    totalApr: aprReducer,
});

export default rootReducer;