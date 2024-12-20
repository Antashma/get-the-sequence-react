import React from "react";

function Sequence({ currSequence }) {

    const displaySequence = () => {
        return currSequence?.map((el, i) => <span key={i}>{el}</span>)
    } 
    
    return (
        <p id="sequence">
            {displaySequence()}
        </p>
    )
}

export default Sequence;