import * as actionTypes from '../actions/actionsTypes';

const initialState = {
  albums: null
}

const reducer = (state = initialState, action) => {
  
  switch (action.type) {
    case actionTypes.SET_ALBUMS_DATA:
      return {
        ...state,
        albums:action.albums
      }        
    default:
      return state;
  }

}

export default reducer;