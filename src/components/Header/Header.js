import './Header.css'
import logo from '../../images/vector.svg'

const Header = () => {
    return ( 
        <>
        <div className="header">
             <img className="vector" src={logo} alt="vector" />
             <p className="header">Redberry Knight Cup</p>
        </div>
        </>
     );
}

export default Header;
