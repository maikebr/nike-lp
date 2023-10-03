import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../contants";

const NavBar = () => {
	return (
		<header className="padding-x py-8 absolute z-10 w-full">
			<nav className="flex justify-between items-center max-container">
				<a href="/">
					<img src={headerLogo} alt="Logo" width={130} height={29} />
				</a>
				<ul className="flex-1 flex items-center justify-center gap-16 max-lg:hidden">
					{navLinks.map((link) => (
						<li key={link.id}>
							<a
								className="font-montserrat leading-normal text-lg text-slate-gray"
								href={link.href}>
								{link.label}
							</a>
						</li>
					))}
				</ul>
				<img
					src={hamburger}
					alt="Hamburger"
					height={25}
					width={25}
					className="hidden max-lg:block"
				/>
			</nav>
		</header>
	);
};

export default NavBar;
