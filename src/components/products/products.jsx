import {  gql, useShopQuery, Link } from "@shopify/hydrogen";

// Gets all the products
const Products = () => {
  
const QUERY = gql`
query Products {
products(first:250){
  edges{
    node{
      id
      title
      handle
      tags
      priceRange{
        minVariantPrice{
          amount
        }
      }
      images(first:1){
        edges{
          node{
            transformedSrc
            altText
          }
        }
      }
    }
  }
}
}
`;
  const {data} =  useShopQuery({
    query: QUERY,
  }); 
  
  return (
    <section className="w-full gap-3 md:gap-3 grid p-6 md:p-3 lg:p-12 col-3">
     
      <h2 className="whitespace-pre-wrap max-w-prose font-bold text-lead text-4xl">
       Products
      </h2>

        <div className="flex flex-wrap">
        {data.products.edges.map((items)=>{
            return (
              <>
               <div key={items.node.id} className="ml-10">
               {items.node.images.edges.map((item)=>{
                return (
                  <>
                    <img className="h-[200px]" src={item.node.transformedSrc} alt="product image" />
                  </>
                )
               })
               
               } 
                <h1 className="font-black text-lg">{items.node.title} </h1>
                <p>R{items.node.priceRange.minVariantPrice.amount} </p>
                <Link to={`/products/${items.node.handle}`} className="bg-black text-white rounded w-[130px] hover:bg-slate-600">View Item</Link>
                </div>
              
              </>
             
            )
          })}
        </div>
    </section>
  );
}

export default Products