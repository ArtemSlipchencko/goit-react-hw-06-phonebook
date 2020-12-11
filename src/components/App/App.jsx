import React, {Component} from 'react';
import './App.css';
import Form from '../Form/Form';
import Contacts from '../Contascts/Contacts';
import Filter from '../Filter/Filter';
import Alert from '../Alert/Alert';
import {CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';

class App extends Component {

    state = {
        showLogo: false,
        filter: '',
        contactExist: false
    };

    componentDidMount() {
        this.setState(state => ({showLogo: !state.showLogo}));
    };

    componentDidUpdate(prevProps, prevState) {
        localStorage.setItem('contacts', JSON.stringify(this.props.contacts));
    };

    findContact = () => {
        const {contacts, filterWord} = this.props;
            return contacts.filter(contact => contact.name.toLowerCase().includes(filterWord.toLowerCase()),
        );
    };

    checkContact = (contacts, contact) => {

        if (contacts.find((el) => el.name === contact.name)) {
            this.setState({contactExist: true}) 
            return true;
        };

        return false;
        
    };

    alertOk = () => {
        this.setState({contactExist: false})
    };

    render() {

        const {filter, showLogo, contactExist} = this.state;
        const searchedContacts = this.findContact();

        return (
            <>
                <CSSTransition in={showLogo} unmountOnExit classNames="logo" timeout={500}>
                    <h1>Phonebook</h1>
                </CSSTransition>
                <h2>Contacts form</h2>
                <Form checkContact={this.checkContact} />
                <h2>Contacts list</h2>
                <Filter filter={filter} handleFilter={this.handleFilter} />
                <Contacts contacts={searchedContacts} />
                <CSSTransition in={contactExist} unmountOnExit classNames="alert" timeout={250}>
                    <Alert ok={this.alertOk} />
                </CSSTransition>
            </>
        );

    };

};

const mapStateToProps = state => ({
    contacts: state.contacts,
    filterWord: state.filter,
});

export default connect(mapStateToProps, null)(App);