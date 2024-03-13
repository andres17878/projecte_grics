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
          {/* <div className='m1'>
            <Comp_Membres/>
          </div>
          <br/>
          <div className='m2'>
            <Comp_Membres/>
          </div>
          <br/>
          <div className='m3'>
            <Comp_Membres/> 
          </div>
          <br/>
          <div className='m4'>
            <Comp_Membres/>
          </div> */}
          <Comp_Membres/> 
          <Comp_Membres/> 
          <Comp_Membres/> 
          <Comp_Membres/> 
          <Comp_Membres/> 
      </div>
    <Footer />
    </div>

  )
}

export default Membre
