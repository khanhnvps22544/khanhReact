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



export default function TableCart({data}) {
  
  const dispatch = useDispatch()
  // let count = 0;
  // for(let i = 0; i < carts.length; i++){
  //   return count++
  // }
  const [numberItem, setNumberItem] = useState(data.count)

  
  const onNumberChange = (value) => {
    setNumberItem(value)
    dispatch(updateItem({...data, count: value}))
  }

  const tang = () => {
    let count  = numberItem;
    dispatch(updateItem({...data, count: ++count}))

  }
  const giam = () => {
    let count  = numberItem - 1;
    if (count === 0) {
      swal({
          title: " Bạn có chắc chắn xoá sản phẩm này ?",
          text: "Nếu xoá đi, bạn có thể add sản phẩm này lại ở trang Home",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
              dispatch(updateItem({ ...data, count: count }));
            swal("Sản phẩm đã bị xoá ra khỏi giỏ hàng !", {
              icon: "success",
            });
          }
        });
  } else {
      dispatch(updateItem({ ...data, count: count }));
  }
  }

  useEffect (() => {
    setNumberItem(data.count)
  }, [data.count])
  
  
  
  return (
    
      <div className="cart">
              <TableRow
                key={data.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell className="item_cart" component="th" scope="row">
                  <img src={data.image}/>
                </TableCell>
                <TableCell align="left">{data.name}</TableCell>
                <TableCell onChange={(event) => onNumberChange(event.target.value)} align="right">
                  <span onClick={ () => giam()}>-</span>
                  <span>{numberItem}</span>
                  <span onClick={ () => tang()}>+</span>
                  </TableCell> 
                
                <TableCell  align="right">{data.price}</TableCell>
              </TableRow>
      
       </div>
  );
}