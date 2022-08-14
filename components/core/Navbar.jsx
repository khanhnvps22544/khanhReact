import { AppBar, Toolbar } from "@mui/material";
import { makeStyles, MenuItem } from "@material-ui/core";
import Search from "./Search";
import Menu from "./Menu";
import { Link } from 'react-router-dom';
import CartIcon from "./CartIcon";

const pages = ['Thuong hieu', 'Nam', 'Nu', 'Cap doi'];

const useStyles = makeStyles((theme) =>{
        return {
            sc_lg: {
                display: 'none',
                [theme.breakpoints.up("sm")]:{
                    display: 'flex'
                }
            },
            menu: {
                marginLeft: "17%", 
            },
            sc_lg_img: {
                marginLeft: '130px',
                [theme.breakpoints.up("sm")]:{
                    marginLeft: '0'
                }
            },
            img: {
                marginLeft: '30px'
            },
            cartInputSearch: {
                marginLeft: "13%",
                color: "black",
                textDecoration: "none"
            }
        }
    })
export default function Navbar(){
    const classes = useStyles()
    return <div>
        
        
        <AppBar
        className={classes.appbar}
        style={{ backgroundColor: 'white', color: 'black' }}>
            <Toolbar>
                <Link to="/"><img clLinkssName={`${classes.sc_lg_img} ${classes.img}`} src="https://donghohaitrieu.com/wp-content/uploads/2014/05/logo-hai-trieu3.png" alt="" /></Link>
                <Menu />
                <Link className={classes.cartInputSearch} to="/cart"><CartIcon /></Link>
                <Search/>
            </Toolbar>
        </AppBar>
        </div>
}