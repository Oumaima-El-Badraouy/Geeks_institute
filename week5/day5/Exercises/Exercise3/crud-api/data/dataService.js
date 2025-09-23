const { default: axios } = require("axios");

function fetchPosts (){
    return axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.data);
}

 module.exports={fetchPosts};