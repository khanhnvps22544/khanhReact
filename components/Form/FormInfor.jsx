import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import { useFormik } from 'formik';
import { useState } from 'react';
import swal from 'sweetalert';
import { useHistory } from "react-router-dom";
import { useEffect } from 'react';
import Confirm from '../../pages/Confirm';
import { useDispatch, useSelector } from 'react-redux';
import { addForm } from '../../stateManagement/actions';

export default function FormInfor(){
    // const [name, setName] = React.useState('Composed TextField');
    const [stateErrors, setStateErrors] = useState({})
    const dispacth = useDispatch()
    const [name, setName] = useState('');
    const handleName = () => {
        localStorage.setItem('Name', name);
     };

    const isButtonActive = () => {
        return formik.values.firstName.length === 0 || 
        formik.values.lastName.length === 0 ||
        formik.values.address.length === 0 ||
        formik.values.sdt.length === 0 ||
        formik.values.email.length === 0
    }
    
    const history = useHistory()
        const gotoConfirm = () => {
            history.push(`/confirm`)
        }

    const submitForm = (value) => {
        handleName()
        console.log(value)
        formik.validateForm()
        swal({
            title: " Bạn đã đặt hàng thành công !",
            icon: "success",
            dangerMode: true,
          });
        
        setTimeout(() => {
            gotoConfirm()
        }, 1500)
    }

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            address: '',
            sdt: '',
            email: '',
            moreInfor: '',
        },
        validate: (values) => {
            const errors = {}
            if(!values.firstName){
                errors.firstName = 'Họ là bắt buộc'
            }
            if(!values.lastName){
                errors.lastName = 'Tên là bắt buộc'
            }
            if(!values.address){
                errors.address = 'Địa chỉ là bắt buộc'
            }
            if(!values.sdt){
                errors.sdt = 'Số điện thoại là bắt buộc'
            }else if(values.sdt.length <= 9){
                errors.sdt = 'Số điện thoại không hợp lệ'
            }
            if(!values.email){
                errors.email = 'Email là bắt buộc'
            }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Địa chỉ email không hợp lệ';
              }
           
            setStateErrors(errors)
            return errors
        },
        onSubmit: (values) => {
            console.log(values)
            if(stateErrors.firstName){
                console.log("ko the dat hang")
            }
        }
    })
    return<>
    <form onSubmit={formik.handleSubmit} className="ThanhToan">
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '35ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <h2>Địa chỉ nhận hàng</h2>
       <div>
        <div style={{display: "flex"}}>
            <div style={{width: "40%"}}>
                <TextField style={{width: "100%"}}
                        id="firstName"
                        name="firstName"
                        label="Họ"
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                    />
                    
                {formik.errors.firstName ? <p style={{textAlign: "left", marginLeft: "10px"}}>{formik.errors.firstName}</p> : null}
                
            </div>

            <div style={{width: "40%", marginLeft: "17px"}}>
                <TextField style={{width: "100%"}}
                    id="lastName"
                    name="lastName"
                    label="Tên"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                    onBlur={ (event) => setName(event.target.value)}
                
                />
                {formik.errors.lastName ? <p style={{textAlign: "left", marginLeft: "10px"}}>{formik.errors.lastName}</p> : null}
            </div>
        </div>
         <TextField style={{width: "421px"}}
            id="address"
            name="address"
            label="Địa chỉ"
            onChange={formik.handleChange}
            value={formik.values.address}
        />
        {formik.errors.address ? <p style={{textAlign: "left", marginLeft: "10px"}}>{formik.errors.address}</p> : null}
        <div style={{display: "flex"}}>
            <div style={{width: "40%"}}>
                <TextField style={{width: "100%"}}
                    id="sdt"
                    name="sdt"
                    label="SĐT"
                    onChange={formik.handleChange}
                    value={formik.values.sdt}
                />
                {formik.errors.sdt ? <p style={{textAlign: "left", marginLeft: "10px"}}>{formik.errors.sdt}</p> : null}
            </div>
            <div  style={{width: "40%", marginLeft: "17px"}}>
                <TextField style={{width: "100%"}}
                    id="email"
                    name="email"
                    label="Email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                {formik.errors.email ? <p style={{textAlign: "left", marginLeft: "10px"}}>{formik.errors.email}</p> : null}
            </div>
        </div>
        
        <TextField style={{width: "421px"}}
            id="moreInfor"
            name="moreInfor"
            label="Thông tin thêm"
            multiline
            rows={4}
            onChange={formik.handleChange}
            value={formik.values.moreInfor}
        />
        
       </div>
       
      </Box>
      <Button disabled={isButtonActive()} onClick={() => submitForm(formik.values.lastName)} type='button' variant='contained' color="secondary" className="btn_form">Gửi</Button>
    </form>
    </>
}