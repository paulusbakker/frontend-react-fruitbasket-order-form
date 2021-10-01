import React from 'react';

function Fruitcounter({fruitAmount, fruitName, setFruits}) {
    return (
        <>
            {fruitName}
            <button disabled={fruitAmount <= 0} id='min'
                    onClick={() => setFruits(fruitAmount - 1)}>-</button>
            {fruitAmount}
            <button id='plus' onClick={() => setFruits(fruitAmount + 1)}>+</button>
            <br/></>
    )

}

export default Fruitcounter;
