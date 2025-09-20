const axios=require('axios');
module.exports=function fetchData(){    
axios.get('https://jsonplaceholder.typicode.com/posts')
.then(response=>response.data)
.then(data=>{data.forEach(element => {
    console.log(element.title)
});
})
.catch(error=>console.error('Error fetching data:',error));}