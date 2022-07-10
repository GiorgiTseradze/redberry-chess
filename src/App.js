import { useState, useEffect } from 'react';
import axios from 'axios';
import Landing from './components/Landing/Landing';
import Info from './components/Info/Info';
import Experience from './components/Experience/Experience';
import Completion from './components/Completion/Completion';
import { Routes, Route } from 'react-router-dom';

function App() {
	const [formData, setFormData] = useState(
		JSON.parse(localStorage.getItem('form')) || {
			name: '',
			email: '',
			phone: '',
			dob: '',
			experience: '',
			participation: null,
			id: null,
		}
	);

	useEffect(() => {
		localStorage.setItem('form', JSON.stringify(formData));
	}, [formData]);

	function handleChange(event) {
		validate(event.target.value, event.target.name);

		setFormData((prevFormData) => {
			return {
				...prevFormData,
				[event.target.name]: event.target.value,
			};
		});
	}

	const [isFormValid, setIsFormValid] = useState(
		JSON.parse(localStorage.getItem('formValid')) || {
			name: null,
			email: null,
			phone: null,
			dob: null,
			experience: null,
			participation: null,
			id: null,
		}
	);

	useEffect(() => {
		localStorage.setItem('formValid', JSON.stringify(isFormValid));
	}, [isFormValid]);

	const test = (attrName, boolean) => {
		setIsFormValid((prevIsFormValid) => {
			return {
				...prevIsFormValid,
				[attrName]: boolean,
			};
		});
	};

	//validates inputs
	const validate = (value, name) => {
		switch (name) {
			case 'name':
				if (value.length > 2) {
					test(name, true);
				} else {
					test(name, false);
				}

				break;

			case 'email':
				if (
					value.substring(value.length - 12, value.length) === '@redberry.ge'
				) {
					test(name, true);
				} else {
					test(name, false);
				}
				break;

			case 'phone':
				const regex = /^\d+$/;
				if (value.length === 9 && regex.test(value)) {
					test(name, true);
				} else {
					test(name, false);
				}

				break;

			//validates date of birth only if a person is born after 1900 and before 2010
			case 'dob':
				if (
					Number(value.substring(0, 4)) < 2010 &&
					Number(value.substring(0, 4)) > 1900
				) {
					test(name, true);
				} else {
					test(name, false);
				}

				break;

			case 'experience':
				if (value.length > 0) {
					test(name, true);
				} else {
					test(name, false);
				}

				break;

			case 'participation':
				if (value) {
					test(name, true);
				} else {
					test(name, false);
				}

				break;

			case 'id':
				if (value) {
					test(name, true);
				} else {
					test(name, false);
				}

				break;

			default:
		}
	};

	//sending data to API
	const handleSubmit = async (e) => {
		const urlReg = 'https://chess-tournament-api.devtest.ge/api/register';
		const body = {
			name: formData.name,
			email: formData.email,
			phone: formData.phone,
			date_of_birth: formData.dob,
			experience_level: formData.experience,
			already_participated: formData.participation,
			character_id: formData.id,
		};
		try {
			await axios.post(urlReg, body);
			console.log(body);
		} catch (error) {
			console.log(error);
		}

		localStorage.clear();
		setFormData({
			name: '',
			email: '',
			phone: '',
			dob: '',
			experience: '',
			participation: null,
			id: null,
		});
		setIsFormValid({
			name: null,
			email: null,
			phone: null,
			dob: null,
			experience: null,
			participation: null,
			id: null,
		});
	};

	return (
		<>
			<Routes>
				<Route path='/' element={<Landing />} />
				<Route
					path='/info'
					element={
						<Info
							handleChange={handleChange}
							data={formData}
							isFormValid={isFormValid}
						/>
					}
				/>
				<Route
					path='/experience'
					element={
						<Experience
							isFormValid={isFormValid}
							handleChange={handleChange}
							setFormData={setFormData}
							validate={validate}
						/>
					}
				/>
				<Route
					path='/completion'
					element={<Completion handleSubmit={handleSubmit} />}
				/>
			</Routes>
		</>
	);
}

export default App;
