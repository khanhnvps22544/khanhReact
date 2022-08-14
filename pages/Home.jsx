
import ListItem from "../components/ListItemNam/ListItem";
import ListItemNu from "../components/ListItemNu/ListItemNu";
import ListItemTrangSuc from "../components/ListTrangSuc/ListItemTrangSuc";
import SubMenu from "../components/SubMenu";
import SubMenu2 from "../components/SubMenu2";
import ListBrand from "../components/ListBrand/ListBrand"
import ListBrandThuySy from "../components/ListBrand/ListBrandThuySy";
import ScrollToTop from "../components/Wrapper";



export default function Home(){
    return <>
    <ScrollToTop />
    
    <div className="banner">
        <img src="https://lh3.googleusercontent.com/pw/AM-JKLX_GGWkIMJiQ1VQC6woX7UEm2J1mQdf5J-s_RIwVZZFeJU9gIdHxlidaJz4XZpHP7oghnxaWL8nVPx7KgQzunw0UsJB3Y0g0uoQMv8LoMXkjiu6_214FxDuU7ita8Ep87dCWlHOQh3XHxsHDYzPbr1r=w1920-h550-no?authuser=0" alt="" />
    </div>
    <SubMenu />
    <SubMenu2 />
    <ListItem />
    <ListItemNu />
    <ListItemTrangSuc />
    <ListBrand />
    <ListBrandThuySy />
    </>
}