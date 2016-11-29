var React = require('react');

const divStyleBlue = {
  color: 'black'
};

var Header = React.createClass({
  render: function(){
    return(
      <div>
      <h1 style={divStyleBlue}><center>Welcome</center></h1>
      <h3 style={divStyleBlue}><center>Vertu velkomin á veffsíðuna Concert Nation Iceland</center></h3>
      </div>
    );
}
});

export default Header;
