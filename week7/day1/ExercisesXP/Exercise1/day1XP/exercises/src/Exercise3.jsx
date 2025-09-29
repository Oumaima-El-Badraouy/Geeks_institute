import React, { Component } from 'react';
import PropTypes from 'prop-types';
import'./Exercise.css';
class Exercise3 extends Component {
   style_header = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial"
};

    render() {
        return (
            <div>
{/* <h1 style={{ color: "red", backgroundColor: "lightblue" }}>this is a header !</h1> */}
<h1 style={ this.style_header }>this is a header !</h1> 
<p className='para'>this is a paragraph</p>
<a href='http://'>this is a link</a>
<form>
<label>Enter your name please :</label>
<input type='text' ></input>
<button type='submit'>submit</button>
</form>
<p>here is an image:</p>
< img src='/image.webp'/>
<ul>
    <li>arg1</li>
    <li>arg2</li>
    <li>arg3</li>
</ul>
            </div
            >
        );
    }
}



Exercise3.propTypes = {
  favAnimals: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Exercise3;
