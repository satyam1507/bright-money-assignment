import * as types from './actionType';
import axios from 'axios';

 const getBillData = (Bills) => ({
   type: types.LOAD_BILL_DATA,
    payload: Bills
});

const deleteBill = () => ({
    type: types.DELETE_BILL,
});

export const loadBillData = () => {
    return (dispatch) => {
        return axios.get('http://localhost:3001/bills')
            .then(response => {
                console.log(response.data);
                dispatch(getBillData(response.data));
            })
            .catch(error => {
                 console.log(error);
                throw (error);
            });
    };
};
export const loadBillDataByCategory = (category) => {
    return (dispatch) => {
        return axios.get(`http://localhost:3001/bills?category=${category}`)
            .then(response => {
                console.log(response.data);
                dispatch(getBillData(response.data));
            })
            .catch(error => {
                    console.log(error);
                throw (error);
            });
    };
};


export const deleteBillData = (id) => {
    return (dispatch) => {
        return axios.delete('http://localhost:3001/bills/' + id)
            .then(response => {
                console.log(response.data);
                dispatch(deleteBill(response.data));
                dispatch(loadBillData());
            })
            .catch(error => {
                 console.log(error);
                throw (error);
            });
    };
};
// export const loadBillData = () => {
//     return {
//         type: types.LOAD_BILL_DATA
//     };
//     };

// export const loadBillDataSuccess = (data) => {
//     return {
//         type: types.LOAD_BILL_DATA_SUCCESS,
//         payload: data
//     };
// }

// export const loadBillDataFailure = (error) => {
//     return {
//         type: types.LOAD_BILL_DATA_FAILURE,
//         payload: error
//     };
// }

// export const createBillStart = (bill) => {
//     return {
//         type: types.CREATE_BILL_START,
//         payload: bill
//     };
// }

// export const createBillSuccess = (bill) => {
//     return {
//         type: types.CREATE_BILL_SUCCESS,
//         payload: bill
//     };
// }

// export const createBillFailure = (error) => {
//     return {
//         type: types.CREATE_BILL_FAILURE,
//         payload: error
//     };
// }

// export const updateBillStart = (bill) => {
//     return {
//         type: types.UPDATE_BILL_START,
//         payload: bill
//     };
// }

// export const updateBillSuccess = () => {
//     return {
//         type: types.UPDATE_BILL_SUCCESS
//     };
// }

// export const updateBillFailure = (error) => {
//     return {
//         type: types.UPDATE_BILL_FAILURE,
//         payload: error
//     };
// }

// export const deleteBillStart = (id) => {
//     return {
//         type: types.DELETE_BILL_START,
//         payload: id
//     };
// }

// export const deleteBillSuccess = (id) => {
//     return {
//         type: types.DELETE_BILL_SUCCESS,
//         payload: id
//     };
// }

// export const deleteBillFailure = (error) => {
//     return {
//         type: types.DELETE_BILL_FAILURE,
//         payload: error
//     };
// }