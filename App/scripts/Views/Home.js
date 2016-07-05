import React from 'react';
var {home, data} = require('../config');

var Home = React.createClass({
    renderUser(user) {
        return (
            <li>
                <a href="#">{user.name}</a><br/>
                <small>{user.phone}</small>
            </li>
        );
    },

    render: function() {
        return (
            <div className="app-view home container">
                <h2 className="header">{home.header}</h2>
                <div className="content">{home.content}</div>
                <ul className="users">
                {
                    data.users.map((user, index) => {
                        return this.renderUser(user);
                    })
                }
                </ul>
            </div>
        );
    }
});

module.exports = Home;
