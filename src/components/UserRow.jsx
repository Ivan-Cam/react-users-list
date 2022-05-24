import style from './UserRow.module.css';
// name: dsplayName es para renombrar una prop, sirve mucho si manda un componente como props y poder renombrarlo, los otros son valores por defecto
const UserRow = ({
	name: dsplayName,
	active = 'Activo',
	role = 'Profesor'
}) => (
	<div className={style.user}>
		<span className={style.name}>{dsplayName}</span>
		<span className={style.active}>{active}</span>
		<span className={style.role}>{role}</span>
	</div>
);

export default UserRow;
