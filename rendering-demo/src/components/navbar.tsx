import NavLinks from "./nav-links";
import NavSearch from "./nav-search";

const Navbar = () => {
	console.log("navbar rendered");
	return (
		<div>
			<NavLinks />
			<NavSearch />
		</div>
	);
};

export default Navbar;
