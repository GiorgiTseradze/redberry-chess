import Header from '../Header/Header'
import Progress from '../Progress/Progress'
import '../Progress/Progress.css'
import photo from "../../images/unsplash_27LH_0jXKYI.png"
import './Experience.css'
import { Link } from 'react-router-dom'
import Dropdown from '../Dropdown/Dropdown'

const Experience = ({isFormValid, handleChange, setFormData, validate,}) => {
    return ( 
        <div className="experience">
                <div className="experience--left">
                <Header />
                <img className="experience--photo" src={photo} alt="experience--chess"></img>
                <div className="quote--div">
                <p className="experience--quote">"MANY HAVE BECOME CHESS MASTERS;<br />NO ONE HAS BECOME THE MASTER OF CHESS."</p>
                <p className="experience--quote-small">-SIEGBERT TARRASCH</p>
                </div>
            </div>
            <div className="info--right">

            <div className="info--header"><p className="header-text">Start Creating Your Account</p></div>
                <Progress title="Chess experience" isFormValid={isFormValid} validate={validate} />
            
          
                <Dropdown handleChange={handleChange} setFormData={setFormData} validate={validate} isFormValid={isFormValid} />
            
            <div className="participation">
                    <div className="participation-question"><p className="participation-text">Have you participated in the Redberry Championship?</p> 
                    <p className="experience--asterisk-participation">*</p></div>
            </div>

            <div className="radio">
                <input type="radio" id="yes" name="participation" value={true} onChange={(e) => {
                                setFormData(prevFormData => {
                                return {
                                    ...prevFormData, 
                                    participation: true}});
                                    }} onClick={e => validate(e.target.value, e.target.name)}></input>
                <label htmlFor="yes" className="radio-option"> Yes</label>
                <input type="radio" id="no" name="participation" value={true} onChange={(e) => {
                                setFormData(prevFormData => {
                                return {
                                    ...prevFormData, 
                                    participation: false}});
                                    }} onClick={e => validate(e.target.value, e.target.name)}></input>
                <label htmlFor="no" className="radio-option">No</label>
            </div>
    
                <div className="experience--pagination">
                    <div className="back-div"><Link className="back" to="/info">Back</Link></div>
                    <div className="done-div"><Link className="done" to="/completion"
                    style={{pointerEvents: isFormValid.participation && isFormValid.experience && isFormValid.id ? "auto" : "none"}}>Done</Link></div>
                </div>

            </div>
        </div>
     );
}
 
export default Experience;