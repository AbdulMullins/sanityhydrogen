
import { gql, useShopQuery, Link ,useRouteParams} from "@shopify/hydrogen";
const Collection = () => {
    const { handle } = useRouteParams()
	// this is getting the handle prop from the file collections/[handle].server.jsx and using that handle to get that specific single single collection 
	// and view all the products that is inside that specific collection handle
	const QUERY = gql`
		{
			collection(handle: "${handle}") {
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
	// uses the query to query from shopify and stores in the data variable
	const { data } = useShopQuery({
		query: QUERY,
	});
	return (
		<>
			{!data.collection ? (
				<div className="text-4xl text-center">Collection Does not exit</div>
			) : (
				<div>
					<h1 className="text-4xl">{data.collection.products.nodes.length} products loaded</h1>
					<h1 className="text-4xl">Single Collection</h1>
					<div>
					{data.collection.products.nodes.map((products) => {
						return (
							<>
								<div className=" inline-flex ml-10 flex-col">
									<h1>{products.title}</h1>
									{products.images.nodes.map((images) => {
										return (
											<>
												<img
													className="h-[300px]"
													src={images.transformedSrc}
													alt=""
												/>
											</>
										);
									})}
									<p>R{products.priceRange.maxVariantPrice.amount}</p>
									<Link
									// uses the Link import from hydrogen to put  custom params in the search bar within 
									// the file from routes /products/[handle].server.jsx so that we can access that params and query that specific handle 
										className="bg-black rounded text-white text-center"
										to={`/products/${products.handle}`}
									>
										View Product
									</Link>
								</div>
							</>
						);
					})}
					</div>
					
				</div>
			)}
		</>
	);
};
export default Collection;
