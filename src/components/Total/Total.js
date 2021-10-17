import React from 'react';
import './Total.css'

const Total = (props) => {
    const { total } = props;
    let add = 0;
    console.log(total)
    for (const programmer of total){
       add = add + programmer.salary
    }
    
    return (
        <div className="total">
            <h1>Fund Collection</h1>
            <h2>Total Member : {props.total.length}</h2>
            <h2>Total : ${add}</h2>
            <button className="button">CHECK FUND</button>
        </div>
    );
};

export default Total;