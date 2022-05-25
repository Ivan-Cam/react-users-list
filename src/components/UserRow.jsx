import UserRole from './UserRole';
import style from './UserRow.module.css';
import UserStatus from './UserStatus';
// name: dsplayName es para renombrar una prop, sirve mucho si manda un componente como props y poder renombrarlo, los otros son valores por defecto
const UserRow = ({ name, active, role }) => (
	<div className={style.user}>
		<div className={style.name}>
			<span>{name}</span>
		</div>
		<div className={style.status}>
			<UserStatus active={active} />
		</div>
		<div className={style.role}>
			<UserRole role={role} />
		</div>
	</div>
);

export default UserRow;
