import Footer from './Components/Footer/Footer.jsx'
import Menu from './Components/Navbar/Menu.jsx'
import gricsImgPrincipal from './assets/grics_img_principal.svg'

function App() {
  return (
    <>
      <Menu />
      <div id="img_principal">
        <img id="img_facultat" src="src/assets/facultat1.gif" alt="facultat" />
        <img id="grics_img_principal" src={gricsImgPrincipal} alt="grics_principal" />
      </div>
      <Footer />
    </>
  )
}

export default App
