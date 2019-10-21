import React, { Component } from 'react';
import * as actionCreators from '../../store/actions/index';
import { connect } from 'react-redux';

import Loading from '../../components/UI/Loading';

class index extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    // console.log('albums container CDM! ');
    // console.log('this.props.albums -->  ', this.props.albums);
    this.props.fetchAlbums();    
  }
  
  render() {
    return (
      <div className="albums">        
        {
          this.props.albums ? 
          this.props.albums.map(el=>{
            return (
              <div key={el.id} className="albums__card">
                <p>{el.title}</p>
              </div>
            )
          }) : <Loading />
        }        
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    albums : state.albums.albums
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAlbums: () => dispatch(actionCreators.fetchAlbumsData())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(index);