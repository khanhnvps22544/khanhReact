import { useHistory } from "react-router"
import Star from "../core/Star"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
export default function ItemNu({
    data
}){
    const history = useHistory()
    const gotoDetail = () => {
        history.push("/detail")
    }

    return <div className="products">
    <button id="left"><ArrowBackIcon /></button>
    <button id="right"><ArrowForwardIcon /></button>
    <div onClick={ () => {gotoDetail()}}
    className="item">
        <img src={data.image} alt="" />
        <br />
        <label htmlFor="">{data.name}</label>
        <br />
        <Star range={data.range} />
        <p>{data.price}</p>
    </div>
    </div>
}
