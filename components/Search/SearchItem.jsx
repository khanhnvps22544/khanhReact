
import { useHistory} from "react-router"
import Star from "../core/Star"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { addToCart } from "../../stateManagement/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Button } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag, faSquare } from "@fortawesome/free-solid-svg-icons";
export default function SearchItem({
    // image,
    // name,
    // price,
    // range,
    // id
    data
}){
    const dispacth = useDispatch()
    const history = useHistory()
    const gotoDetail = () => {
        history.push(`/detail/${data.id}`)
    }
    const [btnClass, setBtnClass] = useState(false)
    const [isDisable, setDisable] = useState(false)


    const onAddToCart = () => {
        dispacth(addToCart({...data, count: 1}))

        btnClass ? setBtnClass(false) : setBtnClass(true)
        isDisable ? setDisable(false) : setDisable(true)
    }

    

    return <div className="products">
    <div className="item">
        <div onClick={ () => {gotoDetail()}}>
            <img src={data.image} width="150px" />
            <br />
            <label>{data.name}</label>
            <br />
            <Star range={data.range}/>
            <p>{data.price} VND</p>
        </div>
            
            {/* <button disabled={isDisable} id="btn_buy" className={btnClass ? "clicked btn_buys cart-button" : " cart-button"} onClick={() => onAddToCart()}>
                    <span ><p className="add-to-cart">Thêm vào giỏ</p></span> 
                    <span class="added">Đã thêm</span> 
                    <FontAwesomeIcon className="fa-shopping-cart" icon={faShoppingBag}></FontAwesomeIcon>
                 <FontAwesomeIcon className="fa-square" icon={faSquare}></FontAwesomeIcon></button> */}
    </div>
    </div>
    
    
}
