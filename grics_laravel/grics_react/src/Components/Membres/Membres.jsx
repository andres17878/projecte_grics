import './Membres.css'
import Footer from "../Footer/Footer";
import Comp_Membres from '../MiembroComp/MiembroComp'
//import general from '../../assets/membre/general.jpg'
import MenuBurger from '../Navbar/MenuBureger';
function Membre() {
  return (
    <div className="paginaMembres">
    <MenuBurger />


      <div className="contenedorMembres">
          <div className="imgMembres">
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
