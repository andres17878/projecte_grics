import './Membres.css'
import Menu from "../Navbar/Menu";
import Footer from "../Footer/Footer";
import Comp_Membres from '../MiembroComp/MiembroComp'
import general from '../../assets/membre/general.jpg'
function Membre() {
  return (
    <div className="paginaMembres">
    <Menu />


      <div className="contenedorMembres">
          <div className="imgMembres">
              <img className="generalMiembros" src={general} alt="foto principal" />
          </div>
          <div className='Membress'>
            <div className='div1'>  
              <Comp_Membres/> 
            </div>
            
           
          </div>
          
      </div>
    <Footer />
    </div>

  )
  
}

export default Membre
