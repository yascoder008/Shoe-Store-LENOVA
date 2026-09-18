import { Link } from "react-router-dom";

function CategoryCards(props){
    return(
        <>
          <div className="rounded-xl shadow-blue-300 shadow-xs overflow-hidden transition-all delay-100
           hover:-translate-y-2.5 bg-blue-800 text-white">
              <img src={props.image}
                   className="w-full aspect-square"/>
              <div className="p-4 pt-2">
                <h1 className="font-bold text-2xl">{props.name}</h1>
                <Link to="/shop" className="hover:text-blue-950 transition-all delay-200">Shop Now &rarr;</Link>
              </div>
            </div>
        </>
    )
}

export default CategoryCards;