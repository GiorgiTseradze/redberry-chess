import Header from '../Header/Header';
import photo from '../../images/second-page.png';
import Progress from '../Progress/Progress';
import './Info.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Info = ({ data, handleChange, isFormValid }) => {
	const [name, setName] = useState(false);
	const [email, setEmail] = useState(false);
	const [phone, setPhone] = useState(false);

	const handleClickName = () => {
		setName((prevRules) => !prevRules);
	};

	const handleClickEmail = () => {
		setEmail((prevRules) => !prevRules);
	};

	const handleClickPhone = () => {
		setPhone((prevRules) => !prevRules);
	};

	return (
		<div className='info'>
			<div className='info--left'>
				<Header />
				<img className='info--photo' src={photo} alt='info--chess'></img>
				<div className='quote--div'>
					<p className='info--quote'>
						"WHEN YOU SEE A GOOD MOVE,
						<br />
						LOOK FOR A BETTER ONE."
					</p>
					<p className='info--quote-small'>-EMANUEL LASKER</p>
				</div>
			</div>

			<div className='info--right'>
				<div className='info--header'>
					<p className='header-text'>Start Creating Your Account</p>
				</div>

				<Progress title='Personal infomation' isFormValid={isFormValid} />

				{name && (
					<div className='rules-div-name'>
						<p className='rules-name'>more than 2 letters</p>
					</div>
				)}

				{email && (
					<div className='rules-div-email'>
						<p className='rules-email'>only @redberry.ge format</p>
					</div>
				)}

				{phone && (
					<div className='rules-div-phone'>
						<p className='rules-phone'>should be 9 digits</p>
					</div>
				)}

				<div className='input-field'>
					<div className='input-group'>
						<div className='input-div'>
							<input
								className='input'
								placeholder='Name'
								name='name'
								onChange={handleChange}
								value={data.name}
								onClick={handleClickName}
							/>
							{data.name.length === 0 && (
								<span className='info--asterisk-name'>*</span>
							)}
							{isFormValid.name && (
								<FontAwesomeIcon icon={faCircleCheck} className='icon' />
							)}
						</div>

						<div className='input-div'>
							<input
								className='input'
								placeholder='Email address'
								name='email'
								onChange={handleChange}
								value={data.email}
								onClick={handleClickEmail}
							/>
							{data.email.length === 0 && (
								<p className='info--asterisk-mail'>*</p>
							)}
							{isFormValid.email && (
								<FontAwesomeIcon icon={faCircleCheck} className='icon' />
							)}
						</div>

						<div className='input-div'>
							<input
								className='input'
								placeholder='Phone number'
								name='phone'
								onChange={handleChange}
								value={data.phone}
								onClick={handleClickPhone}
							/>
							{data.phone.length === 0 && (
								<p className='info--asterisk-phone'>*</p>
							)}
							{isFormValid.phone && (
								<FontAwesomeIcon icon={faCircleCheck} className='icon' />
							)}
						</div>
						<div className='input-div'>
							<input
								className='input'
								type='text'
								placeholder='Date of birth'
								onFocus={(e) => (e.target.type = 'date')}
								name='dob'
								onChange={handleChange}
								value={data.dob}
							/>
							{data.dob.length === 0 && <p className='info--asterisk-dob'>*</p>}
							{isFormValid.dob && (
								<FontAwesomeIcon icon={faCircleCheck} className='icon' />
							)}
						</div>
					</div>
				</div>
				<div className='pagination'>
					<div className='back-div'>
						<Link className='back' to='/'>
							Back
						</Link>
					</div>
					<div className='next-div'>
						<Link
							className='next'
							style={{
								pointerEvents:
									isFormValid.name &&
									isFormValid.email &&
									isFormValid.phone &&
									isFormValid.dob
										? 'auto'
										: 'none',
							}}
							to='/experience'
						>
							Next
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Info;
