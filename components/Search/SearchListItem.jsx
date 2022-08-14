import { Typography } from "@material-ui/core"
import Item from "../ListItemNam/Item"

import { lists } from "../shared/constants"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import SearchItem from "./SearchItem"
import { findItemByPrice } from "../../stateManagement/actions"

export default function SearchListItem(){
    const [lists, setList] = useState(useSelector((state) => state.listData))
    const listSearch = useSelector((state) => state.listSearch)
    const dispatch = useDispatch()
    
    useEffect( () => {
        if(listSearch.length > 0){
            setList(listSearch)
        }
        else{
            setList(listSearch)
        }
    }, [listSearch])

    const getRangeValue = (price) => {
        dispatch(findItemByPrice(price))
    }
    console.log(lists)
    console.log(listSearch)
    return <div className="container_search">
        <div className="checkbox_price">
            <div style={{display: "flex", flexDirection: "column"}}>
                <input type="radio" name="price" value={1000000} onChange={ (event) =>   getRangeValue(event.target.value)}/><label htmlFor="">0 - 1.000.000</label>
                <input type="radio" name="price"  value={2000000}   onChange={ (event) =>   getRangeValue(event.target.value)}/><label htmlFor="">1.000.000 - 2.000.000</label>
                <input type="radio" name="price" value={3000000}   onChange={ (event) =>   getRangeValue(event.target.value)}/><label htmlFor="">2.000.000 - 5.000.000</label>
            </div>
        </div>
        <div className="search-list-item">
    {   
        lists.map((item)=>{
            return <SearchItem 
                data={item}
                // name={item.name}
                // image={item.image}
                // price={item.price}
                // range={item.range}
                // id={item.id}
            />
        })
    }
    </div> 
    {
        lists.length > 0 ? null : <div id="notify_not_product">Không có sản phẩm cần tìm</div>
    }
    
    </div>
}