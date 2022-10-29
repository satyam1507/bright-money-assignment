
import * as types from './actionType';
const initialState = {
    bills: [],
    bill: {},
    loading: false,
}

const billReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.LOAD_BILL_DATA:
            return {
                ...state,
                bills: action.payload,
                loading: false
            };

        case types.DELETE_BILL:
            return {
                ...state,
                loading: false
            };
        case types.ADD_BILL:
            return {
                ...state,
                loading: false
            };
        case types.GET_SINGLE_BILL:
            return {
                ...state,
                bill: action.payload,
                loading: false
            };
        case types.UPDATE_BILL:
            return {
                ...state,
                loading: false
            };
        default:
            return state;
    }
}

export default billReducer;