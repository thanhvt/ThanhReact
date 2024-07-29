import React, { useState, useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';


export default function ContactsComponent(props) {

    const contactValue = useSelector((state) => state.contactValue?.value);
    const dispatch = useDispatch();
    const [iValue, setIValue] = useState("Contact value");


    const save = () => {
        dispatch({
            type: "contactCapture",
            payload: iValue
        })
    }

    const handleInputChange = (e) => {
        setIValue(e.target.value);
    }

    return (
        <div>
            <h1>Contacts Component</h1>
            <p>This is a simple contacts component.</p>
            <input type='text' placeholder='Nhập vào đây để truyền vào About dùng Redux'
                onChange={handleInputChange}
                style={{ width: 500 }} value={iValue} ></input>

            <button onClick={(e) => save()}> Click vao đây để save và truyền</button>
        </div>
    )
}