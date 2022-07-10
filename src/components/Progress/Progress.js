import './Progress.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons'

const Progress = ({ title, isFormValid }) => {

    const ProgressBar = () => {
        return (
            <div className="progress-bar-inner-box"><p className={isFormValid.name || isFormValid.email || isFormValid.phone || isFormValid.dob ? "progress-green progress-bar-box" : "progress-bar-box"}> 
            {isFormValid.name && isFormValid.email && isFormValid.phone && isFormValid.dob ? <FontAwesomeIcon color={"#3BAF77"} icon={faCheckDouble}/> : 1}
            </p>
            </div>
            )
        }
    const ProgressBarSecond = () => {
        return (
        <div className="progress-bar-inner-box"><p className={isFormValid.experience || isFormValid.participation || isFormValid.id ? "progress-green progress-bar-box" : "progress-bar-box"}>2</p></div>
        )
    }

    return ( 
        <div className="progress">
            <div className="progress-bar">
            <div className="progress-bar-child">
                <div className="child-1">
                        <ProgressBar />
                        <div className="progress-bar-inner-box"><p className="progress-bar-inner-box-text">Personal Information</p></div>
                    
                </div>
                <div className="child-2">
                <div>
                        <ProgressBarSecond />
                        <div className="progress-bar-inner-box"><p className="progress-bar-inner-box-text">Chess Experience</p></div>
                    </div>
                </div>
            </div>
        </div>

        <div className="personal-info">
            <div className="personal-info-child">
                <div><h1 className="title">{title}</h1></div>
                <div><p className="basic-info">This is basic information</p></div>
            </div>
        </div>
        </div>
     );
}


export default Progress
            