import Title from './components/Title';
import UsersList from './components/UsersList';

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

const App = () => (
	<UsersList users={USERS}>
		<Title>Listado de usuarios</Title>
	</UsersList>
);

export default App;
