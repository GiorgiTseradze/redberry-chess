import Header from "../Header/Header";
import photo from '../../images/second-page.png';
import Progress from "../Progress/Progress";
import './Info.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const Info = ({ data, handleChange, isFormValid }) => {

    return ( 
        <div className="info">

            <div className="info--left">
                <Header />
                <img className="info--photo" src={photo} alt="info--chess"></img>
                <div className="quote--div">
                <p className="info--quote">"WHEN YOU SEE A GOOD MOVE,<br />LOOK FOR A BETTER ONE."</p>
                <p className="info--quote-small">-EMANUEL LASKER</p>
                </div>
            </div>

            <div className="info--right">
                <div className="info--header"><p className="header-text">Start Creating Your Account</p></div>

                <Progress title="Personal infomation" isFormValid={isFormValid}/>
                
                <div className="input-field">
                    <div className="input-group">
                        <div className ="input-div">
                            <input className="input" placeholder="Name" name="name" onChange={handleChange} value={data.name} />
                            {data.name.length === 0 && <span className="info--asterisk-name">*</span>}
                            {isFormValid.name && <FontAwesomeIcon icon={faCircleCheck} className="icon" />}
                        </div>
                        
                        <div className="input-div">
                            <input className="input" placeholder="Email address" name="email" onChange={handleChange} value={data.email} />
                            {data.email.length === 0 && <p className="info--asterisk-mail">*</p>}
                            {isFormValid.email && <FontAwesomeIcon icon={faCircleCheck} className="icon" />}
                        </div>
                        
                        <div className="input-div">
                            <input className="input" placeholder="Phone number" name="phone" onChange={handleChange} value={data.phone} />
                            {data.phone.length === 0 && <p className="info--asterisk-phone">*</p>}
                            {isFormValid.phone && <FontAwesomeIcon icon={faCircleCheck} className="icon" />}
                        </div>
                        <div className="input-div">
                            <input className="input" type="text" placeholder="Date of birth" onFocus={(e) => e.target.type = 'date'} 
                            name="dob" onChange={handleChange} value={data.dob} />
                            {data.dob.length === 0 && <p className="info--asterisk-dob">*</p>}
                            {isFormValid.dob && <FontAwesomeIcon icon={faCircleCheck} className="icon" />}
                        </div>
                    </div>
                </div>
                <div className="pagination">
                    <div className="back-div"><Link className="back" to="/">Back</Link></div>
                    <div className="next-div"><Link className="next" style={{pointerEvents: isFormValid.name && isFormValid.email && isFormValid.phone && isFormValid.dob ? "auto" : "none"}} to="/experience">Next</Link></div>
                </div>
            </div>
        </div>
     );
}
 
export default Info;