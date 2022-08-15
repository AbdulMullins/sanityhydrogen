import {gql} from '@shopify/hydrogen';

const PRODUCT_QUERY = (payload) => {return gql`
 {
  products(first: 1, query:  "${payload.handle}" ) {
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
}

export { PRODUCT_QUERY }