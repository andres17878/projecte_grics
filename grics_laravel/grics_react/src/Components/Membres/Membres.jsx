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
            <div className='div2'>  
              <Comp_Membres/> 
            </div>
            <div className='div3'>  
              <Comp_Membres/> 
            </div>
            <div className='div4'>  
              <Comp_Membres/> 
            </div>
            <div className='div5'>  
              <Comp_Membres/> 
            </div>
            <div className='div6'>  
              <Comp_Membres/> 
            </div>
            <div className='div7'>  
              <Comp_Membres/> 
            </div>
            <div className='div8'>  
              <Comp_Membres/> 
            </div>
          </div>
          
      </div>
    <Footer />
    </div>

  )
}

export default Membre
