// name: dsplayName es para renombrar una prop, sirve mucho si manda un componente como props y poder renombrarlo, los otros son valores por defecto
const UserRow = ({
	name: dsplayName,
	active = 'Activo',
	role = 'Profesor'
}) => (
	<div className='user'>
		<span className='name'>{dsplayName}</span>
		<span className='active'>{active}</span>
		<span className='role'>{role}</span>
	</div>
);

export default UserRow;
