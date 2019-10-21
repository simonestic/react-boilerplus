import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class index extends Component {

  constructor(props){
    super(props);    
  }  

  componentDidMount() {
    // console.log('counter cdm ! --> this.props.count', this.props.count);
  }
  

  decHandler = () => {
    this.props.onDecrement();
  }

  incHandler = () => {        
    this.props.onIncrement();
  }

  render() {
    return (
      <div className="counter">        
        <div className="counter__minus" onClick={this.decHandler}>-</div>
        <div className="counter__score">{this.props.count}</div>
        <div className="counter__plus" onClick={this.incHandler}>+</div>        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.counter.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement : () => dispatch(actions.increment()),
    onDecrement : () => dispatch(actions.decrement()),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(index);