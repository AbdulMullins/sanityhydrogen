import {
    useRouteParams
  } from "@shopify/hydrogen";
  
import SingleProductLayout from "../../components/products/single";

const SingleProduct = () => {
    const { handle } = useRouteParams()

    return(
        // this uses the useRouteParams params (the "jeans" or any params that was passed to the [handle].server.jsx , refer to the collections.jsx component to understand more )
        //  and passes the handle of the product down as a prop  to single.jsx so that we can use it to query that exact product using the handle with graphql

        <SingleProductLayout data={{handle}} />
    )
}

export default SingleProduct