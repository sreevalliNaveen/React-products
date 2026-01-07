import { Outlet } from "react-router-dom";

function ProductsLayout(){
    return (
        <>
            <h2>Products Layout</h2>
            <Outlet />
        </>
    )
}
export default ProductsLayout;