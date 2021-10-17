import React from 'react';
import './Programmer.css'

const Programmer = (props) => {
    const { id, name, country, language, image, age, salary } = props.programmer;
    return (
        <div className="programmer-container ">
            <div className="programmer">
                <img className="image" src={image} alt="" />
                <div className="programmer-info">
                    <div className="body">
                        <h3>Name : {name}</h3>
                        <p>ID: {id}</p>
                        <p>Age:{age}</p>
                        <p>Salary:${salary}</p>
                        <p>Country:{country} </p>
                        <p>Language:{language} </p>
                    </div>
                </div>
                <button  className="fas fa-cart-plus button" onClick={() => props.handleButton(props.programmer)} 
                > Add Person</button>
            </div>
        </div>
    );
};

export default Programmer;