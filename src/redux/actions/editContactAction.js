// import types from '../types.js';
import {createAction} from '@reduxjs/toolkit';

export const getContact = createAction("ADD_CONTACT");

export const deleteContact = createAction("DELETE_CONTACT");

// export const getContact = ({name, number, id}) => (
//     {
//         type: types.ADD_CONTACT,
//         payload: {
//             name,
//             number,
//             id,
//         }
//     }
// )

// export const deleteContact = (id) => ({
//     type: types.DELETE_CONTACT,
//     payload: {
//         id,
//     }
// })