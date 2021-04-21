import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';

const FragenAngaben = ({ propsFrage, propsFragenLänge, propsFragenIndex }) => {
    const [showAnswer, setshowAnswer] = useState({

        show: false,
        optionSelected: undefined
    })
    useEffect(() => {
        setshowAnswer({
            show: false,
            optionSelected: undefined
        })
    }, [])

    const AnwserButton = (option) => {

        setshowAnswer({
            show: true,
            optionSelected: option
        })

    }

    return (
        <div className="FragenAngaben">

            <h1 className={"FragenAngabenText"}>Test: {propsFragenIndex} / {propsFragenLänge}</h1>
            <p className={"FragenAngabenText"}>{propsFrage.question}</p>
            <ul>
                {propsFrage.answer.map((answerItem, answerIndex) =>

                    <li>
                        <button onClick={() => AnwserButton(answerItem)}>{answerItem}</button>
                        {console.log("answerItem=", answerItem)}
                        {console.log("answerIndex=", answerIndex)}
                        {console.log("optionSelected=", showAnswer.optionSelected)}
                        
                        {showAnswer.show && propsFrage.correct === answerIndex && showAnswer.optionSelected === answerItem && <span className="text-success">{"Richtige Antwort"}</span>}
                        {showAnswer.show && showAnswer.optionSelected === answerItem && propsFrage.correct !== answerIndex && <span className="text-danger">{"Falsche Antwort"}</span>}
                    </li>
                )}
            </ul>


        </div>
    )
}

export default FragenAngaben