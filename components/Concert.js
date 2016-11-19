import React from 'react'
import $ from 'jquery'
import { Table , responsive } from 'react-bootstrap'

var Concert = React.createClass({
  getConcertData: function() {
    $.ajax({
      url: 'http://apis.is/concerts',
      cache: false,
      type: 'GET',
      dataType: 'json',
      success: function(incomingData) {
        this.setState({concertsData: incomingData});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function() {
    return {concertsData: []};
  },
  componentDidMount: function() {
    this.getConcertData();
  },
  render: function() {
    return (
      <div>
        <h1>Listi yfir hlutum</h1>
        {!this.state.concertsData.results ?
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"></img>
          :
        <Table responsive>
          <thead>
            <tr>
              <th>Nafn atburðar</th>
              <th>Atbuður</th>
              <th>Dagsetning</th>
              <th>Haldandi</th>
              <th>Staðsetnning</th>
            </tr>
          </thead>
          <tbody>
                {this.state.concertsData.results.map(function(res, id) {
                  return(
                  <tr key={id}>
                    <td>{res.eventDateName}</td>
                    <td>{res.name}</td>
                    <td>{res.dateOfShow}</td>
                    <td>{res.userGroupName}</td>
                    <td>{res.eventHallName}</td>
                  </tr>);
                })}
          </tbody>
        </Table>
      }
      </div>
    );
  }
});

export default Concert;
