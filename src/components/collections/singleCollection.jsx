import { gql, useShopQuery, Link } from "@shopify/hydrogen";

const Collection = (payload) => {
	const QUERY = gql`
		{
			collection(handle: "${payload.data}") {
				products(first: 250) {
					nodes {
                        title
						handle
						images(first: 1) {
							nodes {
								transformedSrc
							}
						}
						priceRange {
							maxVariantPrice {
								amount
							}
						}
					}
				}
			}
		}
	`;
	const { data } = useShopQuery({
		query: QUERY,
	});
	return (
		<>
			{!data.collection ? (
				<div className="text-4xl text-center">Collection Does not exit</div>
			) : (
				<div>
					<h1 className="text-4xl">Single Collection</h1>
                    {data.collection.products.nodes.map((products)=>{
                        return (
                            <>
                                <div className=" inline-flex ml-10 flex-col">
                                    <h1>
                                        {products.title}
                                    </h1>
                                    {
                                        products.images.nodes.map((images)=>{
                                            return (
                                                <>
                                                   <img className="h-[300px]" src={images.transformedSrc} alt="" />
                                                </>
                                            )
                                        })
                                    }
                                    <p>
                                        R{products.priceRange.maxVariantPrice.amount}
                                    </p>
                                    <Link className="bg-black rounded text-white text-center" to={`/products/${products.handle}`}>View Product</Link>
                                </div>
                            </>
                        )
                    })}
				</div>
			)}
		</>
	);
};
export default Collection;
