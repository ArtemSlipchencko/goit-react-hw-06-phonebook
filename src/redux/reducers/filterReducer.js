// import types from '../types.js';
import {filterContact} from '../actions/filterAction';
import {createReducer} from '@reduxjs/toolkit';

// const init = "";

export const filterContacts = createReducer("", {
    [filterContact.type]: (state, action) => action.payload
});

// export const filterContacts = (state = init, {type, payload}) => {
//     switch (type) {
//         case types.FILTER_CONTACTS:
//             return payload.filter;
//         default:
//             return state; 
//     }
// }