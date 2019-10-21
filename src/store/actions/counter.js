import * as actionTypes from './actionsTypes';

export const increment = () => {
  return {
    type: actionTypes.INCREMENT_NUM,    
  }
}

export const decrement = () => {
  return {
    type: actionTypes.DECREMENT_NUM,    
  }
}