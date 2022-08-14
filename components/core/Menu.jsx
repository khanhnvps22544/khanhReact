import {Typography } from "@mui/material";
import { makeStyles, MenuItem } from "@material-ui/core";

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
                marginLeft: "20%", 
            },
        }
    })

export default function Menu(){
    const classes = useStyles()
    return<>
        <div className={`${classes.sc_lg} ${classes.menu}`}>
            {pages.map((page) => (
                <MenuItem key={page}>
                <Typography textAlign="center">{page}</Typography>
                </MenuItem>
            ))}
        </div>
    </>
}