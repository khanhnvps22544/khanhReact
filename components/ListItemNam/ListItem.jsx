import { Typography } from "@material-ui/core"
import Item from "./Item"

import { lists } from "../shared/constants"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

export default function ListItem(){
    
    
    return <div className="container">
        <div className="title_listItem">
        <Typography variant="h6" className="title">Đồng hồ nam bán chạy</Typography>
        </div>
        <div className="list-item">
    {   
        lists.map((item)=>{
            return <Item 
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
    </div>
}