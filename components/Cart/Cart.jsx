import { useSelector } from 'react-redux'
import TableCart from './TableCart'

import * as React from 'react';
import Table from '@material-ui/core/Table';  
import TableBody from '@material-ui/core/TableBody';  
import TableCell from '@material-ui/core/TableCell';  
import TableContainer from '@material-ui/core/TableContainer';  
import TableHead from '@material-ui/core/TableHead';  
import TableRow from '@material-ui/core/TableRow';  
import Paper from '@material-ui/core/Paper'; 
export default function Carts(){
    const carts = useSelector( state => state.carts)
    // const check = false
    // if(carts){
    //   console.log(carts)
    // }
    // else{
    //   console.log("test")
    // }
    
    return <>
        <TableContainer style={{width: "60%"}} component={Paper}>
            <Table sx={{ minWidth: 450 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <div>
                  <TableCell style={{width: "132px"}}></TableCell>
                  <TableCell style={{width: "403px"}} align="center">Tên đồng hồ</TableCell>
                  <TableCell align="center">Số lượng</TableCell>
                  <TableCell style={{width: "100px"}} align="center">Giá</TableCell>
                  </div>
                </TableRow>
              </TableHead>
            <TableBody>
        <div>{carts.length === 0 && <div className='empty'>Cart is empty</div>}</div>
        {   
            carts.map(item =>{
                return <>
                    <TableCart data={item}/>
                </>
            })
        }
        </TableBody>
        </Table>
        </TableContainer> 
        
    </>
}