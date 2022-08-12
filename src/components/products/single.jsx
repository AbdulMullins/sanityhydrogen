import { gql, useShopQuery } from "@shopify/hydrogen";
import AddToCart from "../cart/addToCart";
// import Variants from "./variants";
const SingleProductLayout = (payload) => {
    
    const { handle } = payload.data
	const QUERY = gql`
            {
  products(first: 1, query:  "${handle}" ) {
    edges {
      node {
        id
        handle
        title
        tags
        productType
        description
        vendor
        totalInventory
        images(
          first: 10
        ){
          edges{
            node{
              url
            }
          }
        }
        priceRange{
          maxVariantPrice{
            amount
          }
        }
        availableForSale
      }
    }
  }
}
	`;
	const { data } = useShopQuery({
		query: QUERY,
	});
    
	return (
		<div className=" black  ">
            <span className="text-4xl">Single Product</span>
			
			{data.products.edges.map((product)=>{
                return (
                    <>
                    <div className=""  key={product.node.id}>
                    <p className="">
                            {product.node.id}
                        </p>
                            {product.node.images.edges.map((img)=>{
                                return (
                                    <>
                                        <img key={img.node.url} src={img.node.url} alt="" className=" h-[300px]"/>
                                    </>
                                )
                            })}
                        <p>
                        {product.node.title}
                        </p>
                        <p className="w-[500px] text-sm">
                            {product.node.description}
                        </p>
                        <p>
                            Price: R{product.node.priceRange.maxVariantPrice.amount}
                        </p>
                        <p>
                            availableForSale:
                            {product.node.availableForSale == true ? <span className="text-base"> YES </span> : <span className="text-base"> NO </span>}
                            
                        </p>
                    </div>
                      {/* <Variants id={product.node.id} /> */}
                      <AddToCart merchandiseId={product.node.id}/>
                    </>
                )
            })}
		</div>
	);
};

export default SingleProductLayout;
