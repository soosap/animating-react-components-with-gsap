import React from 'react';
import './App.scss';

import Pricing from './components/Pricing';

function App() {
	return (
		<div className="App">
			<header className="App__header">
				<h1 className="App__title">Animating React components w/ GSAP v3 💫</h1>
			</header>
			<div className="App__pricing">
				<Pricing />
			</div>
		</div>
	);
}

export default App;
