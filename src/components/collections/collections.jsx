import { gql, useShopQuery, Link } from "@shopify/hydrogen";

const Collections = () => {
	const QUERY = gql`
		{
			collections(first: 250) {
				edges {
					node {
						id
						handle
						title
						description
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
			<div className="container">
				<h1>All Collections Page</h1>
				{data.collections.edges.map((collections)=> {
                    return(
                        <>
                        {console.log(collections)}
                            <div className="text-lg border text-center">
                                <p>
                                    {collections.node.title} Collection
                                </p>
                                <Link className="bg-black text-white rounded" to={`collections/${collections.node.handle}`}>Visit Collection</Link>
                            </div>
                        </>
                    )
                })}
			</div>
		</>
	);
};
export default Collections;
