import { Typography } from "@material-ui/core"
import ItemNu from "./ItemNu"

export default function ListItemNu(){
    const lists = [
        {
            image: 'https://cdn3.dhht.vn/wp-content/uploads/2017/05/89_D158RWH-399x399.jpg',
            name: 'Doxa D158RWH – Nữ – Kính Sapphire – Quartz (Pin) – Dây Da',
            price: '70$',
            range: 5
        },
        {
            image: 'https://cdn3.dhht.vn/wp-content/uploads/2019/01/13_D217RIY-399x399.jpg',
            name: 'Casio EFR-S567D-1AVUDF  Nam  Kính Sapphire  Quartz (Pin)  Dây Kim Loại',
            price: '70$',
            range: 5
        },
        {
            image: 'https://cdn3.dhht.vn/wp-content/uploads/2021/02/26_AK5000-03A-399x399.jpg',
            name: 'Citizen AK5000-03A – Nam – Quartz (Pin) – Dây Da – Mặt Số 41mm',
            price: '70$',
            range: 5
        },
        {
            image: 'https://cdn3.dhht.vn/wp-content/uploads/2020/01/1_53555-GPMWGP-2-399x399.jpg',
            name: 'Doxa D171RWH – Nam – Kính Sapphire – Automatic (Tự Động) – Dây Kim Loại',
            price: '70$',
            range: 5
        },
        {
            image: 'https://cdn3.dhht.vn/wp-content/uploads/2021/03/53766-RGMWWH-2-1-399x399.jpg',
            name: 'Longines L4.805.4.11.6 – Nam – Kính Sapphire – Automatic (Tự Động) – Dây Kim Loại',
            price: '70$',
            range: 5
        },
        {
            image: 'https://cdn3.dhht.vn/wp-content/uploads/2017/11/L4.805.4.11.6-399x399.jpg',
            name: 'Doxa D171RWH – Nam – Kính Sapphire – Automatic (Tự Động) – Dây Kim Loại',
            price: '70$',
            range: 5
        },
    ]
    return <div className="container">
        <div className="title_listItem">
        <Typography variant="h6" className="title">ĐỒNG HỒ NỮ BÁN CHẠY</Typography>
        </div>
        <div className="list-item">
    {   
        lists.map((item)=>{
            return <ItemNu 
                data={item}
            />
        })
    }
    </div>
    </div>
}