import {
  BrowserRouter as Router,
 
  Route,
  Link
} from "react-router-dom";

import TestSeite from "./TestSeite"
const StartSeite=()=>{
    return(
      <Router>
        <div className="StartSeite">
            
<nav>
        <Link to={`/TestSeite`}>Test</Link>
      </nav>
      <main>
        <Route  exact path="/TestSeite">
          <TestSeite />
        </Route>
      
        </main>
       
        </div>
        </Router>
    )
}

export default StartSeite