var React = require('react');

const divStyleBlue = {
  color: 'blue',
};

var Header = React.createClass({
  render: function(){
    return(
      <div>
      <h2 style={divStyleBlue}><center>GOGOPowerrangers</center></h2>
      </div>
    );
}
});

export default Header;
