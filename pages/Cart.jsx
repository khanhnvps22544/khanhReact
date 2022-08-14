import Bill from "../components/Cart/Bill";
import Carts from "../components/Cart/Cart";
import ScrollToTop from "../components/Wrapper";
import { useSelector } from 'react-redux'
import { makeStyles } from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles((theme) =>{
        return {
            container_cart: {
                display: "flex",
                marginTop: '100px',
                marginLeft: '56px'
            },
            hide: {
                display: 'none'
            }
        }
    })
export default function Cart(){
    const carts = useSelector( state => state.carts)
    const classes = useStyles()
    
     

    return <>
    
    <ScrollToTop />
    <div className={`${classes.container_cart}`}>
        <Carts />
        <div className="bill"> 
            <Bill />
        </div>
        
    </div>
    </>
}