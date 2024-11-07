var prod = {
    name :"Laptop",
    price : 1200 ,
    available: true
};
const Product = () => {
    return (
        <div>
            {prod.name}
            {prod.price}
            {prod.available}
        </div>
    );
    

}
export default Product;