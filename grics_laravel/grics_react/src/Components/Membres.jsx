import Menu from "../Navbar/Menu";
import Footer from "../Footer/Footer";
import Comp_Membres from './MiembroComp/MiembroComp'
function Membre() {
  return (
    <div className="paginaMembres">
    <Menu />


      <div className="contenedorMembres">
          <div className="img">
              <img className="generalMiembros" src={fotoPrincipal} alt="foto principal" />
          </div>
          <div>
            <Comp_Membres/>
          </div>
          <div>
            <Comp_Membres/>
          </div>
          <div>
            <Comp_Membres/> 
          </div>
          <div>
            <Comp_Membres/>
          </div>
      </div>
    <Footer />
    </div>

  )
}

export default Membre
