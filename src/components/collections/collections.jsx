import { gql, useShopQuery, Link } from "@shopify/hydrogen";

const Collections = () => {

	// This is graphql query to get all the collections , view the docs on localhost:3000/graphql for more info / docs 
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
	// This uses the query from graphql and pull the data from shopify and stores it in a variable called data
	const { data } = useShopQuery({
		query: QUERY,
	});
	return (
		<>
			<div className="container">
				<h1>All Collections Page</h1> 
				{/* Maps over the data variable  to access the  collections */}
				{data.collections.edges.map((collections)=> {
                    return(
                        <>
                        {console.log(collections)}
                            <div className="text-lg border text-center">
                                <p>
                                    {collections.node.title} Collection
                                </p>
								{/* uses Link import from hydrogen and uses the [handle].server.jsx which replaces "[handle]" to the product handle 
								example: Product have the handle of jeans , therefore the url would be localhost:3000/collections/jeans
								
								*/}
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
