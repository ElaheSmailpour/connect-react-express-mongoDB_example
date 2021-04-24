import 'bootstrap/dist/css/bootstrap.min.css';
import Containerfragen from "./Containerfragen";
import Uhr from "../components/Uhr"
import { useState } from "react";

//import axios from 'axios';

const Test = () => {

    const [data, setData] = useState([]);
    const [questionIndex, setQuestionIndex] = useState(0)

    const [showUhr, setShowIhr] = useState('start')
    /*
     useEffect(() => {
       
         Promise.all([
             fetch("http://localhost:5000/RandomQuestion").then(res => res.json()),
             fetch(`http://localhost:5000/RandomQuestion/${land}`).then(res => res.json())
         ]).then(([urlOneData, urlTwoData]) => {
             console.log("urlOneData=", urlOneData)
             console.log("urlTwoData=", urlTwoData)
             console.log("mergedData=", [...urlOneData, ...urlTwoData])
 
             setData([...urlOneData, ...urlTwoData]);
 
         })
     }, [])
 
 */
    const teststarten = () => {
        setShowIhr('add-time')
        const land = document.querySelector("#stats").value;

        Promise.all([
            fetch("/RandomQuestion").then(res => res.json()),
            fetch(`/RandomQuestion/${land}`).then(res => res.json())
        ]).then(([urlOneData, urlTwoData]) => {
            console.log("urlOneData=", urlOneData)
            console.log("urlTwoData=", urlTwoData)
            console.log("mergedData=", [...urlOneData, ...urlTwoData])

            setData([...urlOneData, ...urlTwoData]);

        })
    }


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

                <label>Stats:</label>
                <select id="stats" name="stats">

                    <option value="Baden-Württemberg">Baden-Württemberg </option>
                    <option value="Bayern">Bayern </option>
                    <option value="Berlin">Berlin</option>
                    <option value="Brandenburg">Brandenburg </option>
                    <option value="Bremen">Bremen</option>
                    <option value="Hamburg">Hamburg</option>
                    <option value="Hessen">Hessen</option>
                    <option value="Mecklenburg-Vorpommern">Mecklenburg-Vorpommern</option>
                    <option value="Niedersachsen">Niedersachsen</option>
                    <option value="Nordrhein-Westfalen">Nordrhein-Westfalen</option>
                    <option value="Rheinland-Pfalz">Rheinland-Pfalz</option>
                    <option value="Saarland">Saarland</option>
                    <option value="Sachsen">Sachsen</option>
                    <option value="Sachsen-Anhalt">Sachsen-Anhalt</option>
                    <option value="Schleswig-Holstein">Schleswig-Holstein </option>
                    <option value="Thüringen">Thüringen</option>

                </select>
                <button onClick={teststarten}> Start zum Test  {showUhr === 'add-time' && <Uhr />} </button>
             
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