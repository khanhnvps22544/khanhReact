


export default function SubMenu(){
    const features = [
        {
            image: 'https://cdn3.dhht.vn/wp-content/uploads/2019/10/icon_mat-xa-cu.png',
        },
        {
            image: 'https://cdn3.dhht.vn/wp-content/uploads/2019/10/icon_phien-ban-gioi-han.png',
        },
        {
            image: 'https://cdn3.dhht.vn/wp-content/uploads/2019/10/icon_sieu-mong.png',
        },
        {
            image: 'https://cdn3.dhht.vn/wp-content/uploads/2019/10/icon_skeleton.png',
        },
        {
            image: 'https://cdn3.dhht.vn/wp-content/uploads/2019/10/icon_vang-18k.png',
        },
        {
            image: 'https://cdn3.dhht.vn/wp-content/uploads/2019/10/icon_vat-lieu-hiem.png',
        },
        {
            image: 'https://cdn3.dhht.vn/wp-content/uploads/2019/10/icon_day-da-hirsch.png',
        },
        {
            image: 'https://cdn3.dhht.vn/wp-content/uploads/2019/10/icon_kim-cuong.png',
        },
    ]
    return <>
        <div className="subMenu">
            <div className="container_subMenu">
                {
                features.map((item)=>{
                    return <div className="feature">
                        <img src={item.image} alt="" />
                    </div>
                })
            }
            </div>
        </div>
    </>
}