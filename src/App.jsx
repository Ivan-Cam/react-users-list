import UsersList from './components/UsersList';

const USERS = [
	{
		name: 'José Iván Campos Chávez',
		active: true,
		role: 'student'
	},
	{
		name: 'José Campos Avaloz',
		active: true,
		role: 'teacher'
	},
	{
		name: 'Pablo Lopez',
		active: true,
		role: 'teacher'
	},
	{
		name: 'Juan Canelo Chávez',
		active: false,
		role: 'teacher'
	},
	{
		name: 'Juan3 Canelo Chávez',
		active: false,
		role: 'other'
	},
	{
		name: 'Juan4 Canelo Chávez',
		active: true,
		role: 'teacher'
	}
];

const App = () => <UsersList users={USERS} />;

export default App;
