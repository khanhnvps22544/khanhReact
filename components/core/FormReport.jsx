import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addReport } from "../../stateManagement/actions"
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import OIP from '../shared/image/OIP.jpg'
import OIP1 from '../shared/image/OIP1.jpg'
import Confirm from "../../pages/Confirm";
export default function FormReport({id, refreshList}){

    const [ stateName, setName] = useState('')
    const [ stateDes, setDes] = useState('')
    const [ stateImg, setImg] = useState('')
    const [ stateGetName, setGetName] = useState('')
    
    const dispatch = useDispatch()
    const listReport = useSelector( state => state.reportByID)

    const sendReport = () =>{
        
        const data = {
            id: listReport.length,
            item: id,
            name: stateName,
            des: stateDes,
            time: new Date().toLocaleString(),
            img: stateImg,
            like: false
        }
        
        dispatch(addReport(data))
        refreshList()
        setDes('')
        setName('')
        console.log(data)
    }
    return <>
        
        <div className="comment">
            Hỏi đáp: 
            <br />
            <br />
            <TextField
            value={stateDes}
                onChange={(event) => setDes(event.target.value)}
                style={{width: "100%"}}
                multiline
                rows={4}
                id="demo-helper-text-aligned"
                label="Comment" />
        
        </div>
        <div className="infor">
            <div className="infor_radio">
            <label>Anh</label>
            <input type="radio" name="gender" onClick={ () => setImg(OIP1)}/>
            <label>Chi </label>
            <input type="radio" name="gender" onClick={ () => setImg(OIP)}/>
            </div>
            <TextField
            value={stateName}
            style={{marginLeft: "25px", width: '50%'}}
                onChange={(event) => setName(event.target.value)}
                id="demo-helper-text-aligned"
                label="Name"
            />
           
            <Button
        color= "secondary"
        style={{margin: " 0px 10px"}}
        onClick={() => sendReport()} variant="contained">Comment now!</Button>
        
        
        </div>
    </>
}