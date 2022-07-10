import { useState, useEffect } from 'react'
import axios from 'axios'
import './Dropdown.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'
import nona from '../../images/nona.jpg'
import magnus from '../../images/magnus.jpg'
import mikhail from '../../images/mikhail.jpg'
import bobby from '../../images/bobby.webp'
import { v4 as uuidv4 } from 'uuid';

const DropdownPlayer= ({  setFormData, validate, isFormValid }) => {
        const [data, setData] = useState();
        const [isActiveLevel, setIsActiveLevel] = useState(false);
        const [isActivePlayer, setIsActivePlayer] = useState(false);
        const [selection, setSelection] = useState("Level of knowledge");
        const [selectionPlayer, setSelectionPlayer] = useState("Choose your character");
        const options = ["beginner", "normal", "professional"];
        const photos = [nona, mikhail, bobby, magnus];
        
        let size = data && Object.keys(data).length;
        
        useEffect(() => {
            const url = "https://chess-tournament-api.devtest.ge/api/grandmasters"
            const fetchData = async () => {
              try {
                const res = await axios.get(url)
                setData(res.data)
                var local = JSON.parse(localStorage.getItem("form"));
                var count = local.id-1
                var name = res.data[count].name
                setSelection(local.experience ? local.experience : "Level of knowledge")
                setSelectionPlayer(res.data ? name : "Choose your character")    

              } catch(error) {
                console.log(error)
              }
            }
        
            fetchData()
        }, []);

    return ( 
        <div className="dropdown">

        <div className="dropdownLevel">
            <div className="dropdown-level-btn" onClick={(e) => setIsActiveLevel(!isActiveLevel)}>
                {selection} {!isFormValid.experience && <span className="dropdown--asterisk-experience">*</span>}
                {isActiveLevel ? <FontAwesomeIcon icon={faCaretUp} className="dropdown-icon" /> : 
                <FontAwesomeIcon icon={faCaretDown} className="dropdown-icon" />}</div>

            {isActiveLevel &&
                <div className="dropdown-level-content" onClick={(e) => setIsActiveLevel(!isActiveLevel)}>
                    {options.map(option => (
                            <div className="dropdown-item" 
                            key={uuidv4()}
                            onClick={(e) => {
                                setIsActiveLevel(false);
                                setSelection(option);
                                validate(option, "experience")
                                setFormData(prevFormData => {
                                return {
                                    ...prevFormData, 
                                    experience: option}});
                                    }} >
                          <p className="dropdown--option">{option}</p>
                        </div>
                    ))}
                </div>
            }
        </div>


        <div className="dropdownPlayer">
            <div className="dropdown-player-btn" onClick={(e) => setIsActivePlayer(!isActivePlayer)}>
                {selectionPlayer} {!isFormValid.experience && <span className="dropdown--asterisk-experience">*</span>}
                {isActivePlayer ? <FontAwesomeIcon icon={faCaretUp} className="dropdown-icon" /> : 
                <FontAwesomeIcon icon={faCaretDown} className="dropdown-icon" />}</div>

            {isActivePlayer &&
                <div className="dropdown-player-content">
                    <p className="total">{`(Total: ${size})`}</p>
                    {
                    data && data.map(player => {
                        return (
                        <div className="dropdown-player-item"  key={player.id} onClick={(e) => {
                        setIsActivePlayer(false);
                        setSelectionPlayer(player.name)
                        validate(player.id, "id")

                        setFormData(prevFormData => {
                            return {
                                ...prevFormData,
                                id: player.id
                            }
                        })
                    }}   
                    ><p className="player-name">{player.name}</p><img src={photos[player.id-1]} alt={player.name} className="dropdown-image"/></div>)})
                    }
                </div>
            }
        </div>
        </div> 
     );
}
 
export default DropdownPlayer;