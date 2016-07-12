import React from 'react';
var { ListGroup, ListGroupItem, FormControl, Pagination } = require('react-bootstrap')
var FilteredList = React.createClass({
  propTypes: {
    list: React.PropTypes.array //array of ojecet that will be listed
  },

  renderListItem(listItem, index) {
    var searchString = this.state.searchValue.toUpperCase();
// Displays each listitem property nicely
    function renderListItemProperties(listItem){
      var listItemProps = [];

      for(var prop in listItem){
        var propName = prop.toUpperCase();
        var propValue = listItem[prop]
        listItemProps.push(
          <div>
              <b>{propName}: </b>
              <span>{propValue}</span>
          </div>
        );
      }
      return listItemProps;
    }
    // var nameToCompare = listItem.text.toUpperCase();
    for(var prop in listItem){
      var propertyValue = listItem[prop].toString().toUpperCase()
      if(propertyValue.indexOf(searchString) > -1){
        return (
          <ListGroupItem>
              {renderListItemProperties(listItem)}
          </ListGroupItem>
            );
          }
        }
    },


    getInitialState: function(){
        return({
          searchValue: ""
      });
    },

    getDefaultProps: function(){
      return({
        list: []
      });
    },

    onSearchValueUpdate: function(e){
      // console.log(e.target.value);
      this.setState({
        searchValue: e.target.value
      });
    },

    render: function() {
      console.log("Search Value: " + this.state.searchValue)
        return (
            <div>
            <FormControl type="text" placeholder="Enter Text" onChange={(this.onSearchValueUpdate)}/>
            <br/>
            <ListGroup className="filtered-list">
                  {
                    this.props.list.map(this.renderListItem)
                  }
                  </ListGroup>
            </div>
        );
    }
});
var PaginationBasic = React.createClass({
  getInitialState() {
    return {
      activePage: 1
    };
  },

  handleSelect(eventKey) {
    this.setState({
      activePage: eventKey
    });
  },

  render() {
    return (
      <div>
        <Pagination
          bsSize="large"
          items={10}
          activePage={this.state.activePage}
          onSelect={this.handleSelect} />
      </div>
    );
  }
});

ReactDOM.render(<PaginationBasic />, mountNode);
module.exports = FilteredList;
