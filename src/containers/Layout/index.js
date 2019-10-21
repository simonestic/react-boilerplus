import React, { Component } from 'react';

import Footer from '../../components/Footer';
import Header from '../../components/Header';

class Layout extends Component {
  constructor(props){
    super(props);
  }
  render() {    
    return (
      <div className="layout">
        <Header />

        <div className="main">

          {this.props.children}
          
        </div>         

        <Footer />
      </div>
    );
  }
}

export default Layout;