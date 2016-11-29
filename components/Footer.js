var React = require('react');

const divStyleRed = {
  color: 'white',
  backgroundColor:'#363636',
  liststyle: 'none'
};

var Footer = React.createClass({
  render: function(){
    return (
      <div>
      <div  style={divStyleRed} className="text-center">Adrian</div>
      <div style={divStyleRed} className="text-center"> Hafsteinn</div>
      <div  style={divStyleRed} className="text-center">Vor Önn 2016</div>
      </div>
    );
}
});

export default Footer;
