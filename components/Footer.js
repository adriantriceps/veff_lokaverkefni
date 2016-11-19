var React = require('react');

const divStyleRed = {
  color: 'red',
};

var Footer = React.createClass({
  render: function(){
    return (
      <div>
      <h2 style={divStyleRed}><center>GOGOFooterrangers</center></h2>
      </div>
    );
}
});

export default Footer;
