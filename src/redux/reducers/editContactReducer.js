// import types from '../types.js';
import {getContact, deleteContact} from '../actions/editContactAction';
import {createReducer} from '@reduxjs/toolkit';


const init = JSON.parse(localStorage.getItem('contacts')) || [];

export const editContacts = createReducer(init, {
    [getContact.type]: (state, {payload}) => ( [...state, {...payload}]),
    [deleteContact.type]: (state, {payload}) => (state.filter(contact => contact.id !== payload))
})

// export const editContacts = (state = init, {type, payload}) => {
//     switch (type) {
//         case types.ADD_CONTACT:
//             return [...state, {...payload}];
//         case types.DELETE_CONTACT:
//             return state.filter(contact => contact.id !== payload.id)
//         default:
//             return state; 
//     }
// }