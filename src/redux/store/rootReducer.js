import {combineReducers} from 'redux';
import {editContacts} from '../reducers/editContactReducer';
import {filterContacts} from '../reducers/filterReducer';

const rootReducer = combineReducers({
    contacts: editContacts,
    filter: filterContacts,
})

export default rootReducer;