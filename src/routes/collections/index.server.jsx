import { gql, useShopQuery, Link } from "@shopify/hydrogen";

const Collections = () => {

	// This is graphql query to get all the collections , view the docs on localhost:3000/graphql for more info / docs 
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