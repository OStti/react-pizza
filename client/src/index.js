import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import ProductProvider from './productContext';

import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
	<React.StrictMode>
		<ProductProvider>
			<Router>
				<App />
			</Router>
		</ProductProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();
