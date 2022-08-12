
import { Link } from "@shopify/hydrogen";
import { useEffect, useState } from "react";

// search functionality for all products is a work in progress , will update the comments 
//when i finish as im going to change most of code  around


const Search = (payload) => {
    const [searchField , setSearchField] = useState('')
    const onSearchChange = (event)=>{
        const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString)

      }
      const filterdCollection =  payload.collection.filter((collection)=>{
              return collection.title.toLocaleLowerCase().includes(searchField);
           });
      console.log('box', filterdCollection)
    return(
        <>

            <label >Search</label>
            <input type="text" onChange={onSearchChange} className="border-black bg-black ml-5 text-white" />
            {filterdCollection.map((products) => {
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
										className="bg-black rounded text-white text-center"
										to={`/products/${products.handle}`}
									>
										View Product
									</Link>
								</div>
							</>
						);
					})}
        </>
        
    )
}

export default Search