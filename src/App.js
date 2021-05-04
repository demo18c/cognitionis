import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Radio from './pages/Radio';
import Dashboard from './pages/Dashboard';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Dashboard} />
				<Route path="/radiomodel" component={Radio} />
			</Switch>
		</Router>
	);
}

export default App;
