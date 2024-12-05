import "./Kub.css"
import React,{createContext, useState} from 'react';

export default function Kub({images}){

    const btn = document.getElementById("#btn");

    const [currentImage, setCurrentImage] = useState(images[0]);
    const [currentNumber, setCurrentNumber] = useState(1);
    const [showLabel,setShowLabel] = useState(false);
    

    const rollDice = () =>{
        const randomInd = Math.floor(Math.random() * images.length);
        setCurrentImage(images[randomInd]);
        setCurrentNumber(randomInd + 1 );
        setShowLabel(true);
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
            {showLabel && <label>Выпал кубик номер {currentNumber}!</label>}
            <div className="Kub-btn">
                    <button onClick={rollDice}>Крутить</button>
                    <button onClick={rollAgain}>Еще раз</button>
            </div>
            
    </div>
    );
}