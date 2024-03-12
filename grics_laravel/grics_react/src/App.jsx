import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import Membres from './Components/Membres/Membres';
import Recerca from './Components/Recerca/Recerca';
import Publicacions from './Components/Publicacions/Publicacions';
import Actualitat from './Components/Actualitat/Actualitat';
import Contacte from './Components/Contacte/Contacte';

function App() {
  return (
    <Router>
      <Route path="/" component={HomePage} />
      <Route path="/membres" component={Membres} />
      <Route path="/recerca" component={Recerca} />
      <Route path="/publicacions" component={Publicacions} />
      <Route path="/actualitat" component={Actualitat} />
      <Route path="/contacte" component={Contacte} />
    </Router>
  )
}

export default App
