import React from 'react';
// var { ListGroup, ListGroupItem, FormControl } = require('react-bootstrap')
var FilteredList = require('../Components/FilteredList');
var {data1, contact} = require('../config');

var Contact = React.createClass({
  // renderContact(person) {
  //   var searchString = this.state.searchValue.toUpperCase();
  //   var nameToCompare = person.name.toUpperCase();
  //   // Logic!!!!
  //   // true if the name does not contain the value of searchstring( which means it wont list name and will return 'undefined')
  //
  //
  //   if(nameToCompare.indexOf(searchString) > -1){
  //     return (
  //       <ListGroupItem>
  //           <a href="#">{person.name}</a><br/>
  //           <small>{person.phone}</small>
  //       </ListGroupItem>
  //       )
  //     }
  // },
  //   getInitialState: function(){
  //       return({
  //         searchValue: ""
  //     });
  //   },
  //
  //   onSearchValueUpdate: function(e){
  //     // console.log(e.target.value);
  //     this.setState({
  //       searchValue: e.target.value
  //     });
  //   },

    render: function() {
        return (
            <div className="app-view container">
                <h2 className="header">{contact.header}</h2>
                <FilteredList list={contact.people}/>
            </div>
        );
    }
});

module.exports = Contact;
