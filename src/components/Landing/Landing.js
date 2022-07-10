import Header from '../Header/Header';
import photo from '../../images/landing-page.png';
import arrow from '../../images/get-started.svg';
import './Landing.css';
import { Link } from 'react-router-dom';

const Landing = () => {
	return (
		<div className='landing'>
			<div className='landing-left'>
				<Header />
				<img className='landing--photo' src={photo} alt='landing--chess'></img>
			</div>
			<div className='landing-right'>
				<h2 className='landing--quote'>
					CHESS SAYS <span className='quote--small'>A LOT ABOUT</span>
					<br />
					WHO WE ARE
				</h2>
				{/* <button className="landing--button">Get Started <img className="landing-arrow" alt="arrow" src={arrow} /></button> */}
				<Link className='landing--button' to='/info'>
					Get Started <img className='landing-arrow' alt='arrow' src={arrow} />
				</Link>
			</div>
		</div>
	);
};

export default Landing;
