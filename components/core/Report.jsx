import { useEffect, useState } from "react"
// import { reports } from "../shared/constants"
import { useDispatch, useSelector } from "react-redux"
import { getReport, updateLikeReport, updateReplyReport } from "../../stateManagement/actions"
import FormReport from "./FormReport"
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import React from "react";
import Heart from "react-animated-heart";
import { Button, TextField } from "@mui/material";
import { addReply } from "../../stateManagement/actions"



export default function Report({id}){
    // const [listReport, setListReport] = useState(reports)
    // const classes = useStyles()

    const dispatch = useDispatch()
    const listReport = useSelector( state => state.reportByID)
    // console.log(listReport)
    
    // const [btnClass, setBtnClass] = useState(false);
    useEffect(()=>{
        componentgetReport()
    }, [])

    let idComment;
    const favorite = (id) => {
        dispatch(updateLikeReport(id))
    }
    const replyComment = (id) => {
        dispatch(updateReplyReport(id))
        
    }

    const componentgetReport = () =>{
        dispatch(getReport(id))
    }
    
    const [ stateReply, setReply] = useState('')
    const sendMessage = (data) => {
        dispatch(addReply(data))
        setReply(stateReply)
        console.log(stateReply)
    }
    
    return <>

    <FormReport id={id} refreshList={ () => componentgetReport()}/><br />
        <div className="report">
            <strong>{listReport.length} binh luan</strong><br />
            {
                listReport.map(report => {
                    return <div id={report.id} className="container_report">
                        <div className="avatar">
                            <img src={report.img} alt="" />
                        </div>
                        <div className="text_report">
                            <span>{report.name}</span><span>{report.time}</span>
                            <p>{report.des}</p>
                            <div  className="edit_comment">
                                <div ><Heart isClick= { report.like } onClick={() => favorite(report.id)} /></div>
                                {/* <FavoriteBorderIcon onClick={() => {btnClass ? setBtnClass(false) : setBtnClass(true)}}
                              className={btnClass ? "clicked" : "btnClass"}/> */}  
                                <div onClick={() => replyComment(report.id)}>Reply</div>                                </div>
                                {
                                    report.reply ?
                                    <TextField
                                    className="input_reply"
                                    style={{width: "421px"}}
                                    id="demo-helper-text-aligned"
                                    label="Bình luận"
                                    multiline
                                    rows={4}
                                />
                                : null
                                }
                                {
                                    report.reply ? <Button onClick={(e) => sendMessage(e.target.value)}>Gửi</Button> : null
                                }
                                
                        </div>
                        
                    </div>
                })
            }
        </div>
    </>
}