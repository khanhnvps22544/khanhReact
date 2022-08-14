import { Badge } from "@mui/material";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import { useDispatch, useSelector } from "react-redux";


import { findItem } from "../../stateManagement/actions";
import CartIcon from "./CartIcon";
import SearchListItem from "../Search/SearchListItem";
import { useState } from "react";
import Container from "../Search/Container";



export default function Search(){
    const dispatch = useDispatch()
    const [show, setShow] = useState(true)
    const [showContainer, setShowContainer] = useState(false)
    const listSearch = useSelector((state) => state.listSearch)

    const handleChange = (event) => {
        
        console.log(listSearch)
        dispatch(findItem(event.target.value))
        
        
    }
    return <div className='navbar'>
        
  
    
    <div>
        <input onClick={() => setShowContainer(!showContainer)} type="text"  onChange={handleChange} placeholder="Search"/>
        {
            showContainer ? <Container/> : null
        }
    </div>
    <IconButton>
          <SearchIcon />
    </IconButton>
    
    </div>
}