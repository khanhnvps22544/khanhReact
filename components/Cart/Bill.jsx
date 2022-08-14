import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import swal from "sweetalert";

export default function Bill(){
    const [prices, setPrices] = useState(0)
    const carts = useSelector( state => state.carts)

    

    const history = useHistory()
    const gotoForm = () => {
        history.push(`/form`)
    }

    useEffect( () =>{
        let price = 0
        setPrices( () =>{
          carts.forEach(item => {
            price = price + (item.price * Number(item.count))
          })
          return price
        })
    }, [carts])

    // const handleSetInputCode = (event) => {
    //   setInputCode(event.target.value)
    // }

    
    

    return <>
        <div>
            <div className="total">
              <h2>Tổng: {prices} VND</h2>
              <br />
              <br />
              <Button onClick={ () => {gotoForm()}} variant="contained" className="btn_bill">Thanh toán</Button>
            </div>
            
        </div>
    </>
}