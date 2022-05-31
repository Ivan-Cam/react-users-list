import UsersList from './components/UsersList';

const USERS = [
	{
		id: 0,
		name: 'José Iván Campos Chávez',
		active: true,
		role: 'student'
	},
	{
		id: 1,
		name: 'José Campos Avaloz',
		active: true,
		role: 'teacher'
	},
	{
		id: 2,
		name: 'Pablo Lopez',
		active: true,
		role: 'teacher'
	},
	{
		id: 3,
		name: 'Juan Canelo Chávez',
		active: false,
		role: 'teacher'
	},
	{
		id: 4,
		name: 'Juan3 Canelo Chávez',
		active: false,
		role: 'other'
	},
	{
		id: 5,
		name: 'Juan4 Canelo Chávez',
		active: true,
		role: 'teacher'
	}
];

const App = () => <UsersList initialUsers={USERS} />;

export default App;
