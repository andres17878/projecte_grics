import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import Membres from './Components/Membres/Membres';
import Recerca from './Components/Recerca/Recerca';
import Publicacions from './Components/Publicacions/Publicacions';
import Actualitat from './Components/Actualitat/Actualitat';
import Contacte from './Components/Contacte/Contacte';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={HomePage} />
        <Route path="/membres" element={Membres} />
        <Route path="/recerca" element={Recerca} />
        <Route path="/publicacions" element={Publicacions} />
        <Route path="/actualitat" element={Actualitat} />
        <Route path="/contacte" element={Contacte} />
      </Routes>
    </Router>
  )
}

export default App
