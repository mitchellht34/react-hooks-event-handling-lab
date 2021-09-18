// Code Keypad Component Here
import React from "react";

function Keypad() {
    function print(){
        console.log("Entering password...")
    }
    
    return (
        <input type="password" onChange={print} />
    );
}

export default Keypad;