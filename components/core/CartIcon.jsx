import { Badge } from "@mui/material";
import LocalMallIcon from '@material-ui/icons/LocalMall';
import { useDispatch, useSelector } from "react-redux";


import { findItem } from "../../stateManagement/actions";



export default function CartIcon(){
    
    const quantity = useSelector( state => state.carts)

    return <div className='navbar'>
        <Badge badgeContent={quantity.length} color="secondary">
            <LocalMallIcon  className="icon"/>
        </Badge>
        </div>
}