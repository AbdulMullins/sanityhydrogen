import Search from "../../search/search.client"
const NavSearch = () =>{
  // this is the side search bar which will import the search jsx file and display the content within the search
  // still a work in progress
    return (
        <>

        <div className="full-search absolute right-0 h-[100vh] z-50 bg-slate-400 text-black">
          <div
            
            className="overlay"
          >
    
          </div>
          <div className="full-search-container flex-1">
            <div className="flex relative w-full bg-white px-5 py-4 z-10">
 
            </div>
    
            <form className="px-5 mb-3">
              <div
                className="bg-ua-lighter-grey rounded-full overflow-hidden flex items-center w-full px-5 py-2"
              >
                <input
                  type="text"
                
              
                  placeholder="Search All Under Armour Products"
                  className="text-ua-dark-grey py-1 bg-ua-lighter-grey focus:outline-none w-full"
                />
                <div
               
                >
                </div>
                <a

                 
                  className="w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full bg-ua-light-grey"
                >
                </a>
              </div>
              <div className="flex w-full justify-end mt-3 px-4">
                <button type="submit" className="underline text-sm">
                  Show all results
                </button>
              </div>
            </form>
    
            <div
              className="flex flex-col flex-grow w-full bg-white rounded-lg overflow-hidden py-4 relative"
            >
              <p
    
                className=" hidden py-20 text-center text-ua-dark-grey"
              >
                No Results
              </p>
              <div className="absolute inset-0 overflow-scroll no-scrollbar">
                {/* <Products /> */}
                <Search 
                />
              </div>
            </div>
          </div>
        </div>

      </>
       
    )
}
export default NavSearch