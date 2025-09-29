import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserFavoriteAnimals extends Component {
  
    render() {
        return (
            <div>
<ul>
          {this.props.favAnimals.map((fav, index) => (
            <li key={index}>{fav}</li>
          ))}
        </ul>
            </div
            >
        );
    }
}



UserFavoriteAnimals.propTypes = {
  favAnimals: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default UserFavoriteAnimals;
