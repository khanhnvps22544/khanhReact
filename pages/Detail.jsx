import { Button, Typography } from "@mui/material";
import { useParams } from "react-router-dom"
import { lists } from "../components/shared/constants"
import { listsBrand } from "../components/shared/constantsBrand"
import Star from "../components/core/Star"
import Descript from "../components/description_detail/Descript";
import Footer from "../components/core/Footer";
import BasicRating from "../components/Rating";
import Report from "../components/core/Report";
import { useHistory } from "react-router-dom";
import { addToCart } from "../stateManagement/actions";
import ScrollToTop from "../components/Wrapper";
import { useDispatch, useSelector } from "react-redux";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faSquare } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";




export default function Detail(){
    let {id} = useParams();
    const detail = lists.find(item => item.id === Number(id));
    const detailBrand = listsBrand.find(item => item.id === Number(id));
    const dispacth = useDispatch()
    const carts = useSelector( state => state.carts)

    const history = useHistory()
    const gotoCart = () => {
        history.push(`/cart`)
    }

    const [btnClass, setBtnClass] = useState(false)
    const [isDisable, setDisable] = useState(false)


    const onAddToCart = () => {
        dispacth(addToCart({...detail, count: 1}))
        
        btnClass ? setBtnClass(false) : setBtnClass(true)
        isDisable ? setDisable(false) : setDisable(true)
    }
    
    return <>
    <ScrollToTop />
    <div className="body" >
        <div className="title">
            <p>Home / {detail.gender} / {detail.name}</p>
        </div>
          <br />
        <div className="showDetail">
            <div className="image_detail">
                {
                    detail ? <>
                    <img src={detail.image} alt="" />
                    </>
                    : null
                }
                <div className="subImage">
                    <img src="https://cdn3.dhht.vn/wp-content/uploads/2019/05/233_T109.410.36.033.00-399x399.jpg"/>
                    <img src="https://cdn3.dhht.vn/wp-content/uploads/2019/05/T109.410.36.033.00-399x399.jpg"/>
                    <img src="https://cdn3.dhht.vn/wp-content/uploads/2019/05/TISSOT-T109.410.36.033.00-5-399x399.jpg"/>
                </div>
            </div>
            <div className="infor_detail">
                <h2 className="title_infor">{detail.name}</h2>
                <p>Gi??: <span>{detail.price}</span><span style={{fontSize: "15px", paddingLeft: "10px"}}>VND</span></p>
                <Star range={detail.range}/>
                <p>M?? t???: {detail.descript}</p>
                <button disabled={isDisable} className={btnClass ? "clicked cart-button" : " cart-button"} onClick={() => onAddToCart()}>
                    <span ><p className="add-to-cart">Add to cart</p></span> 
                    <span class="added">Item added</span> 
                    <FontAwesomeIcon className="fa-shopping-cart" icon={faShoppingBag}></FontAwesomeIcon>
                 <FontAwesomeIcon className="fa-square" icon={faSquare}></FontAwesomeIcon></button>
                {/* <div>{carts.length === 0 && <div className='empty'>Cart is empty</div>}</div> */}

                <div>{carts.length >= 1 && <Button onClick={ () => {gotoCart()}} className="btn_infor_GoToCart" variant="outlined">GO TO CART</Button>}</div>
            </div>
            <div className="brand_detail">
                <div className="title_brand">
                    <p>TH????NG HI???U</p>
                    <img src={detailBrand.image}/>
                    <p style={{textAlign: 'left'}}>T???I SAO N??N CH???N CH??NG T??I?</p>
                    <div className="text">
                            <img src="https://cdn3.dhht.vn/wp-content/uploads/2015/09/chung-nhan1.png" alt="" />
                            <p>Ho??n L???i Ti???n G???p 10 L???n N???u Ph??t <br /> Hi???n H??ng Gi??? - H??ng Nh??i</p>
                    </div>
                    <div className="text">
                            <img src="https://cdn3.dhht.vn/wp-content/uploads/2015/09/bao-hanh-5-nam1.png" alt="" />
                            <p>T??ng Th??m Th???i Gian B???o H??nh <br /> L??n ?????n 5 N??m - Xem Th??m</p>
                    </div>
                    <div className="text">
                            <img src="https://cdn3.dhht.vn/wp-content/uploads/2015/09/1-doi-12.png" alt="" />
                            <p>Sai K??ch C???? Kh??ng ??ng ??? ?????i <br /> H??ng Trong 7 Ng??y - Xem Th??m</p>
                    </div>
                    <div className="text">
                            <img src="https://cdn3.dhht.vn/wp-content/uploads/2015/09/thay-pin-mien-phi1.png" alt="" />
                            <p>Thay Pin Mi???n Ph?? Su???t ?????i -<br /> Kh??ng C??n Lo H???t Pin N???a.</p>
                    </div>
                    <div className="text">
                            <img src="https://cdn3.dhht.vn/wp-content/uploads/2021/01/giao-hang-2h.png" alt="" />
                            <p>Giao H??ng SI??U T???C Trong 2h -<br /> SHIP COD Mi???n Ph??</p>
                    </div>
                    <div className="text">
                            <img src="https://cdn3.dhht.vn/wp-content/uploads/2021/07/30-nam-kinh-nghiem1.png" alt="" />
                            <p>?????n C???m Nh???n Kinh Nghi???m H??n<br /> 30 N??m C???a Ch??ng T??i.</p>
                    </div>
                </div>
            </div>
        </div>
        <Descript />
        <BasicRating />
        <br />
        <hr />
        <Report id={id}/>
    </div>
        
    </>
}