
import { Outlet } from 'react-router-dom';
import Headers from './Headers';

const Main = () => {
	return (
		<div>
			<Headers></Headers>
			<Outlet></Outlet>
		</div>
	);
};

export default Main;