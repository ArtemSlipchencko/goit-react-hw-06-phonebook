// import types from '../types.js';
import {createAction} from '@reduxjs/toolkit';

export const filterContact = createAction("FILTER_CONTACTS");

// export const filterContact = (filter) => ({
//     type: types.FILTER_CONTACTS,
//     payload: {
//         filter,
//     }
// })