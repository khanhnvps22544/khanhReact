import { Button } from "@material-ui/core"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import swal from "sweetalert"
import CustomizedAccordions from "./OptionBuy"

export default function Order(){
    const [prices, setPrices] = useState(0)
    const [priceDiscount, setPriceDiscount] = useState(0)
    const [inputCode, setInputCode] = useState('')
    const carts = useSelector( state => state.carts)
    
    const code = '123abc'
    const DiscountCode = () => {
        localStorage.setItem('Code', inputCode);
    }

    const onDiscount = () => { 
        
        
        console.log(inputCode)
        if(inputCode === (localStorage.getItem('Code'))){
            
            swal({
                title: "Mã giảm giá đã được sử dụng rồi!",
                text: "Bạn hãy kiểm tra lại mã giảm giá",
                icon: "error",
                button: "OK",
              });
        }
        else{
            onAddDiscount()
            applyDiscount()
        }
        DiscountCode()
    }
    const applyDiscount = () =>{
        if(code === inputCode){
            setPriceDiscount( () => {
                return ((prices * 85)/100) - prices
            })
        }
    }
    
    const onAddDiscount = () =>{
        if(code === inputCode){
        
          setInputCode('')
          setPrices( (price) => {
            return (price * 85)/100
          })
          swal({
            title: "Áp dụng mã giảm giá thành công!",
            icon: "success",
            button: "OK",
          });
        }
        else{
          swal({
            title: "Mã giảm giá không hợp lệ!",
            text: "Bạn hãy kiểm tra lại mã giảm giá",
            icon: "error",
            button: "OK",
          });
        }
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



    return <div className="order">
        <h2>Đơn hàng của bạn</h2>
        <table>
            <tr>
                <th>SẢN PHẨM</th>
                <th>GIÁ</th>
            </tr>
            
            <tr>
                {
                    carts.map(item =>{
                        return <div className="item_order"><hr />
                            <td>{item.name} x{item.count}</td>
                            <td>{item.price}</td>
                        </div>
                    })
                }
                
            </tr>
            <hr />
            
        </table>
        <div className="part_discount">
            <span style={{padding: "10px 74px 10px 10px", fontSize: "22px",fontFamily: "sans-serif"}}>GIẢM GIÁ</span>
            <span>{priceDiscount} VND</span>
        </div>
        <div className="part_2_order">
            <span style={{padding: "10px 50px 10px 10px ", fontSize: "22px", fontFamily: "sans-serif"}}>TỔNG CỘNG</span>
            <span>{prices} VND</span>
        </div>
        <CustomizedAccordions />
            
        <div className="discount">
            <p>Mã giảm giá</p>
            <input type="text" value={inputCode}  onChange={ (event) => setInputCode(event.target.value)}/>
            <Button variant="contained" className='btn_discount' onClick={() => onDiscount()}>Nhập</Button>
        </div>

    </div>
}