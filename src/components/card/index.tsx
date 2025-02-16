import "./card.css"

interface CardProps{
    title: string
    price: number
    image: string
}

export function Card( props : CardProps){
    return(
        <div className="card">
            <img src={props.image} alt="produto"/>
            <h2>{props.title}</h2>
            <h2>{props.price}</h2>
        </div>
    )
}