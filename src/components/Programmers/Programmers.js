import React, { useEffect } from 'react';
import Total from "../Total/Total";
import { useState } from 'react/cjs/react.development';
import Programmer from '../Programmer/Programmer';
import './Programmers.css'
const Programmers = () => {
    const [programmers, setProgrammers] = useState([])
    const [total, setTotal] = useState([])
    useEffect(() => {
        fetch('./programmers.json')
            .then(response => response.json())
            .then(data => setProgrammers(data))

    }, [])
    const handleButton = (programmer) => {
        const update = [...total, programmer]
        setTotal(update)
    }

    
   return (
        <div className="container">
           <div className="programmer-container">
           {
                programmers.map(programmer => <Programmer 
                    programmer={programmer}
                    handleButton={handleButton}
                   
                ></Programmer>)
            }
           </div>
            <div className="total-container">
            <Total 
            total={total}
            ></Total>
            </div>
        </div>
    );
};

export default Programmers;