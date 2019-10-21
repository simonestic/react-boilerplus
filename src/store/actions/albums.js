import * as actionTypes from './actionsTypes';

export const setAlbumsData = albums => {
  return {
    type: actionTypes.SET_ALBUMS_DATA,
    albums: albums
  }
}

export const fetchAlbumsData = () => {
  return dispatch => {
    const fetchPromise = fetch('https://jsonplaceholder.typicode.com/albums');
    fetchPromise.then(res=>{
      return res.json();
    }).then(albums=>{
      // console.log('albums --> ', albums);
      dispatch(setAlbumsData(albums));
    }).catch(err=>{
      console.log('err --> ', err);
    })
  }
}