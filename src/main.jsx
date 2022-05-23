import ReactDOM from 'react-dom/client';
import './index.css';

const USERS = [
	{
		name: 'José Iván Campos Chávez',
		role: 'Alumno'
	},
	{
		name: 'José Campos Avaloz'
	},
	{
		name: 'Juan Canelo Chávez',
		active: 'Activo'
	}
];

const Title = ({ children }) => <h1>{children}</h1>;

// name: dsplayName es para renombrar una prop, sirve mucho si manda un componente como props y poder renombrarlo, los otros son valores por defecto
const User = ({ name: dsplayName, active = 'Activo', role = 'Profesor' }) => (
	<div className='user'>
		<span className='name'>{dsplayName}</span>
		<span className='active'>{active}</span>
		<span className='role'>{role}</span>
	</div>
);

const List = ({ users, children }) => {
	const usersRendered = users.map(user => <User key={user.name} {...user} />);
	return (
		<div className='list'>
			{children}
			{usersRendered}
		</div>
	);
};

const app = (
	<List users={USERS}>
		<Title>Listado de usuarios</Title>
	</List>
);

const container = document.getElementById('root');

ReactDOM.createRoot(container).render(app);
