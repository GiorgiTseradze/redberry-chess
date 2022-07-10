import Header from '../Header/Header'
import photo from '../../images/complete-chess.png'
import rocket from '../../images/rocket.svg'
import './Completion.css'
import { useEffect } from 'react'

const Completion = ({handleSubmit}) => {

    useEffect(() => {
        handleSubmit()
    }, []);

    return ( 
        <div className="completion">
            <div className="completion--left">
                <Header />
                <img className="completion--photo" src={photo} alt="complete--chess" />
            </div>
 
            <div className="completion--right">
                <img className="completion--rocket" src={rocket} alt="rocket" /> 
                <div className="completion--text-div"><h2 className="completion--text">Onboarding Completed!</h2></div>
            </div>
        </div>
     );
}

export default Completion