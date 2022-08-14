import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNameConfirm } from "../stateManagement/actions";
import FormInfor from "../components/Form/FormInfor";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import TableConfirm from "../components/Cart/TableConfirm";
import { useHistory } from "react-router-dom";
import ScrollToTop from "../components/Wrapper";

export default function Confirm(){
    const carts = useSelector( state => state.carts)
    console.log(carts)

    const history = useHistory()
    const gotoHome = () => {
        history.push(`/`)
    }
    const date = new Date().toLocaleString()
    const number = Math.floor(Math.random() * 10001)
    return <>
        <ScrollToTop />
        <div className="container_confirm">
            <p style={{marginBottom: "30px", fontSize: "24px"}}><strong>Hello {localStorage.getItem('Name')}</strong></p>
            <p className="text_thanks">Thank you !</p>
            <h2>Đây là đơn hàng của bạn</h2>
            
            <div style={{textAlign: "left", margin: "20px 0"}}>
            <p>
                Mã đơn: {number}
            </p>
            <p>Ngày {date}</p>
            </div>
            <TableContainer style={{width: "100%"}} component={Paper}>
            <Table sx={{ minWidth: 450 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <div>
                  <TableCell style={{width: "132px"}}></TableCell>
                  <TableCell style={{width: "550px"}} align="center">Tên đồng hồ</TableCell>
                  <TableCell style={{width: "202px"}} align="center">Số lượng</TableCell>
                  <TableCell style={{width: "100px"}} align="center">Giá</TableCell>
                  </div>
                </TableRow>
              </TableHead>
            <TableBody>
        <div>{carts.length === 0 && <div className='empty'>Cart is empty</div>}</div>
        {   
            carts.map(item =>{
                return <>
                    <TableConfirm data={item}/>
                </>
            })
        }
        </TableBody>
        </Table>
        </TableContainer> 
            <div onClick={() => gotoHome()}>
            <Button variant="contained" className="btn_Confirm">Tiếp tục mua hàng</Button>
        </div>
        </div>
        
    </>
}