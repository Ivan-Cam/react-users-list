import style from './UserRow.module.css';
// name: dsplayName es para renombrar una prop, sirve mucho si manda un componente como props y poder renombrarlo, los otros son valores por defecto
const UserRow = ({ name, active, role }) => {
	const activeClassName = active ? style.active : style.inactive;

	const ROLE_STYLES = {
		teacher: ['Profesor', style.teacher],
		student: ['Alumno', style.student],
		other: ['Otro', style.other]
	};

	const [roleName, roleClassName] = ROLE_STYLES[role] || ROLE_STYLES.other;

	return (
		<div className={style.user}>
			<div className={style.name}>
				<span>{name}</span>
			</div>
			<div className={style.status}>
				<span className={activeClassName}>
					{active ? 'Activo' : 'Inactivo'}
				</span>
			</div>
			<div className={style.role}>
				<span className={roleClassName}>{roleName}</span>
			</div>
		</div>
	);
};

export default UserRow;
