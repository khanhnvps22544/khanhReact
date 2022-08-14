import { Typography } from "@material-ui/core"

export default function ListBrandThuySy(){
    const lists = [
        {
            image: 'https://cdn3.dhht.vn/wp-content/uploads/2015/09/Casio.png',
        },
        {
            image: 'https://cdn3.dhht.vn/wp-content/uploads/2015/09/Gshock.png',
            
        },
        {
            image: 'https://cdn3.dhht.vn/wp-content/uploads/2015/09/Citizen.png',
            
        },
        {
            image: 'https://cdn3.dhht.vn/wp-content/uploads/2015/09/OP.png',
            
        },
        {
            image: 'https://cdn3.dhht.vn/wp-content/uploads/2015/09/Orient.png',
            
        },
        {
            image: 'https://cdn3.dhht.vn/wp-content/uploads/2015/09/Seiko.png',
            
        },
        {
            image: 'https://cdn3.dhht.vn/wp-content/uploads/2015/09/Skagen.png',
            
        },
        {
            image: 'https://cdn3.dhht.vn/wp-content/uploads/2015/09/Fossil.png',
            
        },
        {
            image: 'https://cdn3.dhht.vn/wp-content/uploads/2015/09/MichaelKors.png',
            
        },
        {
            image: 'https://cdn3.dhht.vn/wp-content/uploads/2015/11/Daniel-Willington.png',
            
        },
        {
            image: 'https://cdn3.dhht.vn/wp-content/uploads/2015/09/Candino.png',
            
        },
        {
            image: 'https://cdn3.dhht.vn/wp-content/uploads/2021/11/Logo-sokolov.png',
            
        },
    ]
    return <div className="container">
        <div className="title_listItem">
        <Typography variant="h6" className="title_brand">THƯƠNG HIỆU THỤY SỸ</Typography>
        </div>
        <div className="list-item">
    {   
        lists.map((item)=>{
            return <div className="brand">
                <img src={item.image} alt="" />
            </div>
        })
    }
    </div>
    </div>
}