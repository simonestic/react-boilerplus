import  * as actionTypes from '../actions/actionsTypes';

const initialState = {
  count: 0
}

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case actionTypes.INCREMENT_NUM:
      return {
        ...state,
        count: state.count+1
      }
    case actionTypes.DECREMENT_NUM:
      return {
        ...state,
        count: state.count-1
      }  
    default:
      return state;
  }  

}

export default reducer;