import ReactDOM from 'react-dom/client';
import './index.css';

const Title = () => <h1>Listado de usuario</h1>;

const User = ({ name, active, role }) => {
	return (
		<div className='user'>
			<span className='name'>{name}</span>
			<span className='active'>{active}</span>
			<span className='role'>{role}</span>
		</div>
	);
};

const app = (
	<div className='list'>
		<Title />
		<User name='Pablo Castellano' active='Activo' role='Profesor' />
		<User name='Jose Ivan Campos Chavez' active='Activo' role='Profesor' />
	</div>
);

const container = document.getElementById('root');

ReactDOM.createRoot(container).render(app);
