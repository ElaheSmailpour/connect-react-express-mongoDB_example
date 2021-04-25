
import {
  BrowserRouter as Router,
 
  Route,
  Link
} from "react-router-dom";

import TestSeite from "./TestSeite"

const Navbar=()=>{
    return(
      <Router>
        <div className="StartSeite">
            
<nav>


  
       <Link to={`/TestSeite`}>Zum Test</Link>
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

export default Navbar