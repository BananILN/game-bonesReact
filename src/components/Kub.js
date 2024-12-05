import "./Kub.css"
import React,{createContext, useState} from 'react';

export default function Kub({images}){

    const btn = document.getElementById("#btn");

    const [currentImage, setCurrentImage] = useState(images[0]);
    

    const rollDice = () =>{
        const randomInd = Math.floor(Math.random() * images.length);
        setCurrentImage(images[randomInd])
    };

    const rollAgain = () =>{
        rollDice();
    };

   

    return (
        <div className="MainKub">
            <div className="Kub">
                    <img     
                    className="Kub-img"
                    src={currentImage}
                    alt="Kub image"
                    />     
            </div>

            <div className="Kub-btn">
                    <button id="btn" onClick={rollDice}>Крутить</button>
                    <button onClick={rollAgain}>Еще раз</button>
            </div>
            
    </div>
    );
}