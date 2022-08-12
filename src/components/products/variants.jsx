import { gql, useShopQuery } from "@shopify/hydrogen";
const Variants = (payload) => {
    // payload contains the id of a product 
    // this is to get different variants from the product and exports to the single product page,
    // this is a work in progress and does not work just yet
	const { id } = payload;

	const QUERY = gql`
		query getOptions($id: ID!) {
			product(id: ${id}) {
				options {
					name
					values
				}
			}
		}
	`;
    	const { data } = useShopQuery({
            query: QUERY,
        });
	return (
		<>
			<div>
				<input type="text" />
                {console.log(data.product)}
			</div>
		</>
	);
};

export default Variants;
