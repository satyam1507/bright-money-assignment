
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
        // case types.LOAD_BILL_DATA_SUCCESS:
        //     return {
        //         ...state,
        //         bills: action.payload,
        //         loading: false
        //     };
        // case types.LOAD_BILL_DATA_FAILURE:
        //     return {
        //         ...state,
        //         loading: false
        //     };
        // case types.CREATE_BILL_START:
        //     return {
        //         ...state,
        //         loading: true
        //     };
        // case types.CREATE_BILL_SUCCESS:
        //     return {
        //         ...state,
        //         loading: false
        //     };
        // case types.CREATE_BILL_FAILURE:
        //     return {
        //         ...state,
        //         loading: false
        //     };
        // case types.UPDATE_BILL_START:
        //     return {
        //         ...state,
        //         loading: true
        //     };
        // case types.UPDATE_BILL_SUCCESS:
        //     return {
        //         ...state,
        //         loading: false
        //     };
        // case types.UPDATE_BILL_FAILURE:
        //     return {
        //         ...state,
        //         loading: false
        //     };
        default:
            return state;
    }
}

export default billReducer;