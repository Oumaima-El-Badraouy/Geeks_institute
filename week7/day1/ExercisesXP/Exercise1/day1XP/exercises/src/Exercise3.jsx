import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Exercise3 extends Component {
  
    render() {
        return (
            <div>
<h1 style={{ color: "red", backgroundColor: "lightblue" }}>this is a header !</h1>
<p>this is a paragraph</p>
<a href='http://'>this is a link</a>
<form>
    
</form>
            </div
            >
        );
    }
}



Exercise3.propTypes = {
  favAnimals: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Exercise3;
