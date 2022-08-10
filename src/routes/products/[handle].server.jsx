import {
    useRouteParams
  } from "@shopify/hydrogen";
  
import SingleProductLayout from "../../components/products/single";

const SingleProduct = () => {
    const { handle } = useRouteParams()

    return(
        <SingleProductLayout data={{handle}} />
    )
}

export default SingleProduct