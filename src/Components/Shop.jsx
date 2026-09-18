import filter_icon from "../assets/filter.png";
import ShopCards from "./shopCards";
import { useState } from "react";
import shoes from "../config";

function Shop(){

  const [isClicked, setIsClicked] = useState(false);

    function handleClick(){
        setIsClicked(!isClicked);
    }

  const [filters, setFilters] = useState({
      categories: [],
      brands: [],
      sizes: []
  })

  const handleClear = () => {
    setFilters({
      categories: [],
      brands: [],
      sizes: []
    })
  }

  const handleCheckBox = (filterType, value) => {

    setFilters(prev => {
      const currentValues = prev[filterType];
      const newValues = currentValues.includes(value) ? 
      currentValues.filter(item => item !== value) :
      [...currentValues, value];

      return {
        ...prev,
        [filterType] : newValues
      };  
    })
  }

  const filteredProducts = shoes.filter(shoe => {

    const categoryMatch = filters.categories.length === 0 || 
                          filters.categories.includes(shoe.category);

    const brandMatch = filters.brands.length === 0 ||
                       filters.brands.includes(shoe.brand);

    const sizeMatch = filters.sizes.length === 0 ||
                      filters.sizes.some(size => (
                        shoe.sizes.includes(size)
                      ));

    return categoryMatch && brandMatch && sizeMatch;

  })

  const [sort, setSort] = useState("featured");

  const sortedProducts = [...filteredProducts].sort((a, b) => {
     if(sort === "newest"){
       return Number(b.isNew) - Number(a.isNew);
     }

     if(sort === "rate"){
      return b.rating - a.rating;
     }

     if(sort === "high-price"){
      return b.price - a.price;
     }

     if(sort === "low-price"){
      return a.price - b.price;
     }

     return 0;

  }) 

    return(
        <main className="mt-13 font-(family-name:--OpenSans-font)">
           <section>
                
                <div className="flex justify-between items-center p-5 md:pt-15">
                  <button className="active:animate-spin"
                          onClick={handleClick}>
                     <img src={filter_icon}
                          className="w-7 cursor-pointer md:hidden"/>
                  </button>

                  <select className="cursor-pointer focus:outline-blue-700 p-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
                          value={sort}
                          onChange={(e) => setSort(e.target.value)}>
                    <option value="featured">Featured</option>
                    <option value="newest">Sort by: Newest</option>
                    <option value="rate">Sort by: ratings</option>
                    <option value="high-price">Sort by: high prices</option>
                    <option value="low-price">Sort by: low prices</option>
                  </select> 
                </div>
        
                <div className="flex relative">
                  <div className={`absolute top-0 left-0 z-50 bg-white max-w-[60%] p-5 flex-col gap-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
                     ${isClicked ? "flex" : "hidden"} md:static md:top-auto md:left-auto md:max-w-[30%] md:flex lg:max-w-[25%] md:gap-3`}>

                   <div className="flex flex-col justify-start items-start gap-2 p-5 max-full z-999 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                      <h1 className="text-2xl font-bold">Category</h1>
                      <form className="flex flex-col justify-start items-start">
                        <label className="text-xl flex gap-1 justify-center items-center">
                          <input type="checkbox" 
                                 className="w-5 h-5 cursor-pointer"
                                 checked={filters.categories.includes("Sneakers")}
                                 onChange={() => handleCheckBox("categories", "Sneakers")}/>
                          Sneakers
                        </label>
                        <label className="text-xl flex gap-1 justify-center items-center">
                          <input type="checkbox"
                                 className="w-5 h-5 cursor-pointer"
                                 checked={filters.categories.includes("Casual")}
                                 onChange={() => handleCheckBox("categories", "Casual")}/>
                          Casual
                        </label>
                        <label className="text-xl flex gap-1 justify-center items-center">
                          <input type="checkbox" 
                                 className="w-5 h-5 cursor-pointer"
                                 checked={filters.categories.includes("Boots")}
                                 onChange={() => handleCheckBox("categories", "Boots")}/>
                          Boots
                        </label>
                        <label className="text-xl flex gap-1 justify-center items-center">
                          <input type="checkbox" 
                                 className="w-5 h-5 cursor-pointer"
                                 checked={filters.categories.includes("Formal")}
                                 onChange={() => handleCheckBox("categories", "Formal")}/>
                          Formal
                        </label>
                      </form>
                    </div>

                    <div className="flex flex-col justify-start items-start gap-2 p-5 max-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                      <h1 className="text-2xl font-bold">Brand</h1>
                      <form className="flex flex-col justify-start items-start">
                        <label className="text-xl flex gap-1 justify-center items-center">
                          <input type="checkbox" 
                                 className="w-5 h-5 cursor-pointer"
                                 checked={filters.brands.includes("Nike")}
                                 onChange={() => handleCheckBox("brands", "Nike")}/>
                          Nike
                        </label>
                        <label className="text-xl flex gap-1 justify-center items-center">
                          <input type="checkbox" 
                                 className="w-5 h-5 cursor-pointer"
                                 checked={filters.brands.includes("Adidas")}
                                 onChange={() => handleCheckBox("brands", "Adidas")}/>
                          Adidas
                        </label>
                        <label className="text-xl flex gap-1 justify-center items-center">
                          <input type="checkbox" 
                                 className="w-5 h-5 cursor-pointer"
                                 checked={filters.brands.includes("Timberland")}
                                 onChange={() => handleCheckBox("brands", "Timberland")}/>
                          Timberland
                        </label>
                        <label className="text-xl flex gap-1 justify-center items-center">
                          <input type="checkbox" 
                                 className="w-5 h-5 cursor-pointer"
                                 checked={filters.brands.includes("Aldo")}
                                 onChange={() => handleCheckBox("brands", "Aldo")}/>
                          Aldo
                        </label>
                        <label className="text-xl flex gap-1 justify-center items-center">
                          <input type="checkbox"
                                 className="w-5 h-5 cursor-pointer"
                                 checked={filters.brands.includes("New Balance")}
                                 onChange={() => handleCheckBox("brands", "New Balance")}/>
                          New Balance
                        </label>
                        <label className="text-xl flex gap-1 justify-center items-center">
                          <input type="checkbox" 
                                 className="w-5 h-5 cursor-pointer"
                                 checked={filters.brands.includes("Clarks")}
                                 onChange={() => handleCheckBox("brands", "Clarks")}/>
                          Clarks
                        </label>
                        <label className="text-xl flex gap-1 justify-center items-center">
                          <input type="checkbox" 
                                 className="w-5 h-5 cursor-pointer"
                                 checked={filters.brands.includes("Dr. Martens")}
                                 onChange={() => handleCheckBox("brands", "Dr. Martens")}/>
                          Dr. Martens
                        </label>
                        <label className="text-xl flex gap-1 justify-center items-center">
                          <input type="checkbox" 
                                 className="w-5 h-5 cursor-pointer"
                                 checked={filters.brands.includes("Hugo Boss")}
                                 onChange={() => handleCheckBox("brands", "Hugo Boss")}/>
                          Hugo Boss
                        </label>
                        <label className="text-xl flex gap-1 justify-center items-center">
                          <input type="checkbox" 
                                 className="w-5 h-5 cursor-pointer"
                                 checked={filters.brands.includes("Reebok")}
                                 onChange={() => handleCheckBox("brands", "Reebok")}/>
                          Reebok
                        </label>
                        <label className="text-xl flex gap-1 justify-center items-center">
                          <input type="checkbox" 
                                 className="w-5 h-5 cursor-pointer"
                                 checked={filters.brands.includes("Lacoste")}
                                 onChange={() => handleCheckBox("brands", "Lacoste")}/>
                          Lacoste
                        </label>
                        <label className="text-xl flex gap-1 justify-center items-center">
                          <input type="checkbox" 
                                 className="w-5 h-5 cursor-pointer"
                                 checked={filters.brands.includes("Puma")}
                                 onChange={() => handleCheckBox("brands", "Puma")}/>
                          Puma
                        </label>
                      </form>
                    </div>

                    <div className="flex flex-col justify-start items-start gap-2 p-5 w-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                      <h1 className="text-2xl font-bold">Size</h1>
                      <div className="grid grid-cols-4 gap-1 md:grid-cols-5 lg:grid-cols-7">
                       <form className="flex flex-col justify-start items-start">
                        <label className="text-xl flex gap-1 justify-center items-center">
                          <input type="checkbox" 
                                 className="w-5 h-5 cursor-pointer"
                                 checked={filters.sizes.includes(38)}
                                 onChange={() => handleCheckBox("sizes", 38)}/>
                          38
                        </label>
                        <label className="text-xl flex gap-1 justify-center items-center">
                          <input type="checkbox" 
                                 className="w-5 h-5 cursor-pointer"
                                 checked={filters.sizes.includes(39)}
                                 onChange={() => handleCheckBox("sizes", 39)}/>
                          39
                        </label>
                        <label className="text-xl flex gap-1 justify-center items-center">
                          <input type="checkbox" 
                                 className="w-5 h-5 cursor-pointer"
                                 checked={filters.sizes.includes(40)}
                                 onChange={() => handleCheckBox("sizes", 40)}/>
                          40
                        </label>
                        <label className="text-xl flex gap-1 justify-center items-center">
                          <input type="checkbox" 
                                 className="w-5 h-5 cursor-pointer"
                                 checked={filters.sizes.includes(41)}
                                 onChange={() => handleCheckBox("sizes", 41)}/>
                          41
                        </label>
                        <label className="text-xl flex gap-1 justify-center items-center">
                          <input type="checkbox" 
                                 className="w-5 h-5 cursor-pointer"
                                 checked={filters.sizes.includes(42)}
                                 onChange={() => handleCheckBox("sizes", 42)}/>
                          42
                        </label>
                        <label className="text-xl flex gap-1 justify-center items-center">
                          <input type="checkbox" 
                                 className="w-5 h-5 cursor-pointer"
                                 checked={filters.sizes.includes(43)}
                                 onChange={() => handleCheckBox("sizes", 43)}/>
                          43
                        </label>
                        <label className="text-xl flex gap-1 justify-center items-center">
                          <input type="checkbox" 
                                 className="w-5 h-5 cursor-pointer"
                                 checked={filters.sizes.includes(44)}
                                 onChange={() => handleCheckBox("sizes", 44)}/>
                          44
                        </label>
                       </form>
                      </div>
                    </div>
                    <button className="bg-blue-800 text-white p-2 hover:bg-blue-950 cursor-pointer md:max-w-40" onClick={handleClear}>Clear All</button>
                  </div>

                  <div className="flex flex-col justify-center items-center p-4 mt-7 w-full md:flex-1 md:mt-0 md:grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                    {
                      sortedProducts.map(shoe => (
                        <ShopCards key={shoe.id} shoe={shoe}/>)
                      )
                    }
                  </div>

                </div>

           </section>
        </main>
    )
}

export default Shop;