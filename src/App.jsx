import { useState } from 'react';
import phrases from './phrases.json';
import { bg1, bg2, bg3, bg4, bg5, bg6 } from './assets/images';
import './App.css';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const images = [bg1, bg2, bg3, bg4, bg5, bg6];

function getRandomIndex(arr) {
	return Math.floor(Math.random() * arr.length);
}

function App() {
	const [phrase, setPhrase] = useState(phrases[getRandomIndex(phrases)].phrase);
	const [bgRamdon, setBgRamdon] = useState(images[getRandomIndex(images)]);
	const handleClick = () => {
		setPhrase(phrases[getRandomIndex(phrases)].phrase);
		setBgRamdon(images[getRandomIndex(images)]);
	};
	const bgStyle = `url('${bgRamdon}')`;

	return (
		<div className="wrapper" style={{ backgroundImage: bgStyle }}>
			<div className="container">
				<h1 className="title">GALLETA DE LA FORTUNA</h1>
				<blockquote className="card">
					<div className="card_body">
						<p className="card_text">
							<FaQuoteLeft className="card_quote" /> {phrase}{' '}
							<FaQuoteRight className="card_quote" />
						</p>
					</div>
				</blockquote>
				<button className="btn" onClick={handleClick}>
					Siguiente
				</button>
			</div>
		</div>
	);
}

export default App;
