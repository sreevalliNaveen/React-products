function ProductItem({product}){
    console.log(product);
    return(
        <div key={product.id} display="flex">
            <img width={'100px'} height={'100px'} url={product.image} />
        </div>
    )
}
export default ProductItem;