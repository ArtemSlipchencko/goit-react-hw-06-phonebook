import React, { Component } from 'react';
import './Filter.css';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {filterContact} from '../../redux/actions/filterAction';

class Filter extends Component { 

  static propTypes = {
    filter: PropTypes.string,
  };

  state = {
    value: "",
  };

  handleFilter = (e) => {

    const filter = e.target.value;
    this.setState({value: filter})
    this.props.filterContact(filter);

  };
  
  render () {

    const {filter} = this.props;

    return (

        <div className="input">
                <input type="text" onChange={this.handleFilter} value={this.state.value} />
        </div>

    );
  };
};

const mapDispatchToProps = {
  filterContact,
}

const mapStateToProps = state => ({
  filter: state.filter,
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter);