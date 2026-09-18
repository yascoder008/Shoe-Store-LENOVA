import shoes from "../config";
import ShopCards from "./shopCards";
import { useState } from "react";

function Search(){

   const [inputValue, setInputValue] = useState("");

  const searchedProducts = shoes.filter((shoe) =>
    shoe.name.toLowerCase().includes(inputValue.toLowerCase())
  );
   
   return(
    <div className="pt-34 p-4">
      <div className="flex flex-col justify-center items-center md:flex-row">
        <input type="text" 
               placeholder="Enter shoe name..." 
               id="search-input"
               value={inputValue}
               onChange={(e) => setInputValue(e.target.value)}
               className="w-[90%] md:w-100 p-3 lg:text-xl md:text-2xs text-xl focus:outline focus:outline-blue-600 lg:w-150 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"/>
      </div>
      <div className="flex flex-col justify-center items-center p-4 mt-10 w-full md:flex-1 md:mt-0 md:grid md:grid-cols-2 lg:grid-cols-4 gap-3">
        {
         searchedProducts.length !== 0 ? (searchedProducts.map((shoe) => (
            <ShopCards key={shoe.id} shoe={shoe}/>
         ))) : (<p>Not found</p>)
        }
      </div>
    </div>
   )
}

export default Search;