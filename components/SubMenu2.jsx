
const features2 = [
    {
        image: 'https://cdn3.dhht.vn/wp-content/uploads/2019/10/banner-dong-ho-nam.png'
    },
    {
        image: 'https://cdn3.dhht.vn/wp-content/uploads/2019/10/banner-dong-ho-nu.png'
    },
    {
        image: 'https://cdn3.dhht.vn/wp-content/uploads/2019/10/banner-dong-ho-doi.png'
    },
    {
        image: 'https://cdn3.dhht.vn/wp-content/uploads/2019/10/banner-dong-ho-tre-em.png'
    },
]

export default function SubMenu2(){
    return <>
        <div className="subMenu2">
            <div className="left">
                <img src="https://cdn3.dhht.vn/wp-content/uploads/2021/05/banner-trang-chu-doxa-grandemetre.jpg" alt="" />
            </div>
            <div className="right">
                {
                    features2.map((item =>{
                        return <div>
                            <img src={item.image} />
                        </div>
                    }))
                }
            </div>
        </div>
        <div className="subMenu3">
            <img src="https://cdn3.dhht.vn/wp-content/uploads/2021/06/bst-dong-ho-nam-hot.jpg" alt="" />
            <img src="https://cdn3.dhht.vn/wp-content/uploads/2021/06/hang-moi-ve-1.jpg" alt="" />
            <img src="https://cdn3.dhht.vn/wp-content/uploads/2021/06/bst-dong-ho-nu-hot.jpg" alt="" />
        </div>
    </>
}