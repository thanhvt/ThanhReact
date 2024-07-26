import React, { useState, useEffect } from 'react';

export default function FuncCom() {
    const [isLogined, setIsLogined] = useState("1");
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
        // console.log("ComponentDidMount FuncCom");
        // return () => {
        //     console.log("ComponentWillUnmount FuncCom");
        // }
        let setTime = () => {
            console.log("Set Time Called");
            setCurrentDateTime(new Date());
        };
        let interval = setInterval(setTime, 1000);
        return () => {
            clearInterval(interval);
        }

        // setIsLogined(10);
    })

   
    setInterval(() => setCurrentDateTime(new Date()), 1000);
    return (
        <div>
            <h1>Is logined gia tri la {isLogined} {currentDateTime.toString()}</h1>
            
        </div>
    );  
}