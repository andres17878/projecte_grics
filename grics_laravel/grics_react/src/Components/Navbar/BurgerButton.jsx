import './MenuBurger.css'

export default function BurgerButton(props) {
  return (
        <div onClick={props.toggleMenu} 
        class={`icon nav-icon-5 ${props.isOpen ? 'open' : ''}`}>
          {console.log(props.isOpen)}
            <span></span>
            <span></span>
            <span></span>
        </div>
  )
}
