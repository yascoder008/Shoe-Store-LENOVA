

function HomeCards(props){
    return(
        <div className = "rounded-xl shadow-blue-300 shadow-xs overflow-hidden transition-all delay-100 hover:-translate-y-2.5">
            <img src={props.image} className="w-full content-square h-[70%]"/>
            <div className="p-4 flex flex-col gap-1">
                <h1 className="text-2xl font-bold">{props.name}</h1>
                <p className="text-xl text-blue-900">{props.price}$</p>
                <span className="text-xl">⭐{props.rating}</span>
            </div>
        </div>
    )
}

export default HomeCards;