import ActionButtons from "./_components/action-buttons";
import Logo from "./_components/logo";
import { Menu } from "./_components/menu";

const Navbar = () => {
	const navbarClasses = `flex items-center justify-between space-x-10 bg-white h-14 absolute sticky z-50 top-0 mx-2 border-b border-gray-200 block`
	
	return (
		<div className={navbarClasses}>
			<div className="flex items-center justify-center">
				<Logo />
				<Menu />
			</div>
			<ActionButtons />
		</div>
	);
};

export default Navbar;
