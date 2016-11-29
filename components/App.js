import React from 'react'
import { render } from 'react-dom'
import Header from './Header'
import Footer from './Footer'
import Concert from './Concert'
import Navbars from './Navbars'

var App = React.createClass({
  render: function(){
    return (
      <div>
      <Navbars />
      <Header />
      <Concert />
      <Footer />
      </div>
    );
  }
});

export default App;
