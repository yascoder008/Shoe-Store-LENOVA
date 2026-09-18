import { Link } from "react-router-dom";

function ShopCards({shoe}){
    return(
        <div className="rounded-xl overflow-hidden transition-all w-[85%] md:w-full delay-100 hover:-translate-y-2.5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
          <Link to={`/info/${shoe.id}`}>
            <div className="relative pb-5 w-full">
                <img src={shoe.image}
                     className="w-full aspect-square object-cover"/>
           
                <p className="absolute bottom-2 right-2 text-xl md:text-3xs text-blue-900 font-bold">{shoe.rating}⭐</p>
                    {shoe.isNew ? (<p className="absolute top-3 rounded border bg-blue-100 text-blue-800 font-bold p-1 w-20 text-center right-2">NEW</p>) : ("")}
            </div>
            <div className="p-3 flex flex-col gap-2">
                    <h1 className="font-bold text-3xl md:text-xl">{shoe.name}</h1>
                    <h3 className="text-blue-800 text-2xl md:text-xl">{shoe.price}$</h3>
            </div>
          </Link>
        </div>
    )
}

export default ShopCards;