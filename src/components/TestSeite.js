

import Containerfragen from "./Containerfragen";

import { useEffect, useState } from "react";
//import { useHistory } from 'react-router-dom'




const Test = () => {

    const [data, setData] = useState([]);
    const [questionIndex, setQuestionIndex] = useState(0)

    //const Vergangenheit = useHistory()
    /*
    useEffect(() => {

        fetch("/RandomQuestion")

            .then((Response) => {
                console.log("Response=", Response);
                Response.json().then((antwort) => {
                 
                    const fragen = antwort;
                    console.log("antwort=", antwort)
                    //nur data fragen mit dtaenbank gefüllt
                    setData(fragen);
                });
            })
            .catch((fehler) => {
                console.error(fehler);
            });
        const stats = "Berlin";
        fetch(`/RandomQuestion ${stats}`)

            .then((Response) => {
                console.log("Response=", Response);
                Response.json().then((antwort) => {
                  
                    const fragen = antwort;
                    console.log("antwort=", antwort)
                   
                    setData(data=>[...data,...fragen])
                });
            })
            .catch((fehler) => {
                console.error(fehler);
            });
    }, []);
 
*/
useEffect(()=>{
    const stats = "Berlin";
    Promise.all([
        fetch("http://localhost:5000/RandomQuestion").then(res => res.json()),
        fetch(`http://localhost:5000/RandomQuestion/${stats}`).then(res => res.json())
    ]).then(([urlOneData, urlTwoData]) => {
        setData({...urlOneData,...urlTwoData });
    })
},[])

    const VorherigeAufgabe = () => {
        if (questionIndex !== 0)
            setQuestionIndex(questionIndex - 1)

    }

    const NächsteAufgabe = () => {
        if (questionIndex < data.length - 1)
            setQuestionIndex(questionIndex + 1)


    }

  

    return (
        <div>

            <div className="body-testSeite">
             <h1>Randomfragen</h1>
                <div className="container-testSeite">
                    {data.length > 0 && <Containerfragen propsQuestion={data[questionIndex]} propsQuestionLänge={data.length}
                        propsQuestionIndex={questionIndex + 1}>
                    </Containerfragen>}

                    <div>
                        <div className="containerButtonUnten">

                       
                            <button onClick={VorherigeAufgabe}>Vorherige Aufgabe</button>
                            <button onClick={NächsteAufgabe}>Nächste Aufgabe</button>
                            
                        </div>

                    </div>
                </div>


            </div>
            
        </div>

    )

}

export default Test;