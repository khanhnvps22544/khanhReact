import { useHistory } from "react-router"

export default function ItemNu({
    image,
    name,
    price,
    range
}){
    const history = useHistory()
    const gotoDetail = () => {
        history.push("/detail")
    }

    return <div className="products">
    <button id="left">1</button>
    <button id="right">2</button>
    <div onClick={ () => {gotoDetail()}}
    className="item">
        <img src={image} alt="" />
        <br />
        <label htmlFor="">{name}</label>
        <p>{range}</p>
        <p>{price}</p>
    </div>
    </div>
}
