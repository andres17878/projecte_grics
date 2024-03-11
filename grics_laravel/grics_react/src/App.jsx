import Footer from './Components/Footer/Footer.jsx'
import Membres from './Components/Membres/Membres.jsx'
import Menu from './Components/Navbar/Menu.jsx'
import Noticia from './Components/Actualitat/Noticia.jsx'
import gricsImgPrincipal from './assets/grics_img_principal.svg'

function App() {
  return (
    <>
      <Menu/>
      <Membres/>
      <div id="img_principal">
        <img id="img_facultat" src="src/assets/facultat1.gif" alt="facultat" />
        <img id="grics_img_principal" src={gricsImgPrincipal} alt="grics_principal" />
      </div>
      <Footer />
    </>
  )
}

export default App
