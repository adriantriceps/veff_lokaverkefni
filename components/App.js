import React from 'react'
import { render } from 'react-dom'
import Header from './Header'
import Footer from './Footer'
import Concert from './Concert'

var App = React.createClass({
  render: function(){
    return (
      <div>
      <Header />
      <Concert />
      <Footer />
      </div>
    );
  }
});

export default App;
