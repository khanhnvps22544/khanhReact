import { Typography } from "@material-ui/core"

import { listsBrand } from "../shared/constantsBrand"

export default function ListBrand(){
    
    return <div className="container">
        <div className="title_listItem">
        <Typography variant="h6" className="title_brand">THƯƠNG HIỆU NỔI TIẾNG</Typography>
        </div>
        <div className="list-item">
    {   
        listsBrand.map((item)=>{
            return <div className="brand">
                <img src={item.image} alt="" />
            </div>
        })
    }
    </div>
    </div>
}