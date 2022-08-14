import { Container } from "@mui/material"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./Home"
import Detail from "./Detail"
import Navbar from "../components/core/Navbar"
import Cart from "./Cart"
import Footer from "../components/core/Footer"
import Form from "./Form"
import Confirm from "./Confirm"
export default function Page(){
    return <>
        <Router>
            
            <Navbar />
            <Switch>
                <Route path="/" exact={true} children={Home} />
                <Route path="/detail/:id" children={<Detail />} />
                <Route path="/cart" children={<Cart />} />
                <Route path="/form" children={<Form />} />
                <Route path="/confirm" children={<Confirm />} />
            </Switch>
            <Footer />
        </Router>
    </>
}