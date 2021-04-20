
import FragenAngaben from "../components/FragenAngaben"
import React, { useState, useEffect } from 'react';
const Fragen = () => {
    const [data, setdata] = useState([])
    const [FragenIndex, setFragenIndex] = useState(0);

    useEffect(() => {

        fetch("/questions")
            .then((Response) => {
                console.log("Response=", Response);
                Response.json().then((antwort) => {
                    console.log("antwort=", antwort)
                    const leute = antwort;
                    console.log("antwort=", antwort)
                    setdata(leute);
                });
            })
            .catch((fehler) => {
                console.error(fehler);
            });
    }, []);

    const NächsteAufgabe = () => {
        if (FragenIndex < data.length - 1) {
            setFragenIndex(FragenIndex + 1)
        }
    }

    const VorherigeAufgabe = () => {
        if (FragenIndex !== 0) {
            setFragenIndex(FragenIndex - 1)
        }
    }
    return (
        <div className="Fragen">
            <h1>Fragen seite...</h1>
            {data.length > 0 && <FragenAngaben propsFragenIndex={FragenIndex +1} propsFragenLänge={data.length} propsFrage={data[FragenIndex]}/>}
           
           
            <button onClick={VorherigeAufgabe}>VorherigeAufgabe</button>
            <button onClick={NächsteAufgabe}>NächsteAufgabe</button>
        </div>
    )
}

export default Fragen