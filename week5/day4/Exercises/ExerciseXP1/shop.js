const products=require("./products.js");
function displayProductDetails(nameproduct){
    if(products.name==nameproduct){
        console.log(`Product Name: ${products.name}`);
        console.log(`Price: $${products.price}`);
        console.log(`Category: ${products.category}`);
    }
    else{
        console.log("Product not found.");
    }
}
displayProductDetails("Laptop");