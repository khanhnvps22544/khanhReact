import { Typography } from "@material-ui/core"
import ItemTrangSuc from "./ItemTrangSuc"

export default function ListItemTrangSuc(){
    const lists = [
        {
            image: 'https://cdn3.dhht.vn/wp-content/uploads/2021/10/DW00400148_1-399x399.jpg',
            name: 'Bông Tai Daniel Wellington DW00400148',
            price: '70$',
            range: 5
        },
        {
            image: 'https://cdn3.dhht.vn/wp-content/uploads/2021/10/DW00400153-399x399.jpg',
            name: 'Dây Chuyền Daniel Wellington DW00400153',
            price: '70$',
            range: 5
        },
        {
            image: 'https://cdn3.dhht.vn/wp-content/uploads/2020/02/15_53555-SVBLSV-XL-399x399.jpg',
            name: 'Dây Chuyền Saga 53555 SVBLSV-XL',
            price: '70$',
            range: 5
        },
        {
            image: 'https://cdn3.dhht.vn/wp-content/uploads/2020/08/DW00400017-399x399.jpg',
            name: 'Nhẫn Daniel Wellington DW00400017 – Size 52MM',
            price: '70$',
            range: 5
        },
        {
            image: 'https://cdn3.dhht.vn/wp-content/uploads/2021/10/DW00400041-DW00400042-DW00400044-399x399.jpg',
            name: 'Nhẫn Daniel Wellington DW00400044 – Size 58mm',
            price: '70$',
            range: 5
        },
        {
            image: 'https://cdn3.dhht.vn/wp-content/uploads/2020/02/22_00123-RGBK-JZ.jpg',
            name: 'Nhẫn Saga 00123 RGBK-JZ Đính Đá Swarovski',
            price: '70$',
            range: 5
        },
        {
            image: 'https://cdn3.dhht.vn/wp-content/uploads/2020/02/25_00125-RGBK-JZ-399x399.jpg',
            name: 'Nhẫn Saga 00125 RGBK-JZ Đính Đá Swarovski',
            price: '70$',
            range: 5
        },
        {
            image: 'https://cdn3.dhht.vn/wp-content/uploads/2020/08/DW00400004-399x399.jpg',
            name: 'Vòng Tay Daniel Wellington DW00400004 – Size 155MM',
            price: '70$',
            range: 5
        },
    ]
    return <div className="container">
        <div className="title_listItem">
        <Typography variant="h6" className="title">TRANG SỨC BÁN CHẠY</Typography>
        </div>
        <div className="list-item">
    {   
        lists.map((item)=>{
            return <ItemTrangSuc 
                name={item.name}
                image={item.image}
                price={item.price}
                range={item.range}
            />
        })
    }
    </div>
    </div>
}