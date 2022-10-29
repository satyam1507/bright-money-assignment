import * as types from './actionType';
import axios from 'axios';

 const getBillData = (Bills) => ({
   type: types.LOAD_BILL_DATA,
    payload: Bills
});

const deleteBill = () => ({
    type: types.DELETE_BILL,
});

const addBill = (bill) => ({
    type: types.ADD_BILL,
});

const singleBill = (bill) => ({
    type: types.GET_SINGLE_BILL,
    payload: bill
});

const updateBill = () => ({
    type: types.UPDATE_BILL,
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

export const addBillData = (bill) => {
    return (dispatch) => {
        return axios.post('http://localhost:3001/bills', bill)
            .then(response => {
                console.log(response.data);
                dispatch(addBill());
            })
            .catch(error => {
                 console.log(error);
                throw (error);
            });
    };
}

export const getSingleBill = (id) => {
    return (dispatch) => {
        return axios.get('http://localhost:3001/bills/' + id)
            .then(response => {
                console.log(response.data);
                dispatch(singleBill(response.data));
            })
            .catch(error => {
                 console.log(error);
                throw (error);
            });
    };
}

export const updateBillData = (id,bill) => {
    return (dispatch) => {
        return axios.put('http://localhost:3001/bills/' +id, bill)
            .then(response => {
                console.log(response.data);
                dispatch(updateBill());
            })
            .catch(error => {
                 console.log(error);
                throw (error);
            });
    };
}