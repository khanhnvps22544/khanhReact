import * as React from 'react';
import Table from '@material-ui/core/Table';  
import TableBody from '@material-ui/core/TableBody';  
import TableCell from '@material-ui/core/TableCell';  
import TableContainer from '@material-ui/core/TableContainer';  
import TableHead from '@material-ui/core/TableHead';  
import TableRow from '@material-ui/core/TableRow';  
import Paper from '@material-ui/core/Paper'; 

import { useSelector} from 'react-redux'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateItem } from '../../stateManagement/actions';
import swal from 'sweetalert';



export default function TableConfirm({data}) {
  
  const dispatch = useDispatch()
  // let count = 0;
  // for(let i = 0; i < carts.length; i++){
  //   return count++
  // }
  const [numberItem, setNumberItem] = useState(data.count)

  

  useEffect (() => {
    setNumberItem(data.count)
  }, [data.count])
  
  
  
  return (
    
      <div className="cart">
              <TableRow
                key={data.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell  className="item_cart" component="th" scope="row">
                  <img style={{width: "100px"}} src={data.image}/>
                </TableCell>
                <TableCell style={{width: "53%"}} align="left">{data.name}</TableCell>
                <TableCell >
                    {numberItem}
                  </TableCell> 
                
                <TableCell  align="right">{data.price}</TableCell>
              </TableRow>
      
       </div>
  );
}