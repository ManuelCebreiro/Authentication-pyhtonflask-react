import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light py-0">
			<div className="container-fluid  gradient-custom-3">
				<Link to="/body">
					<span className="navbar-brand mb-0 h1">Zona privada</span>
				</Link>
				<Link to="/main">
					<span className="navbar-brand mb-0 h1">Menú principal</span>
				</Link>
				<div className="ml-auto">
					<Link to="/">
						<button className="btn btn-primary me-3">Login</button>
					</Link>
					<Link to="/demo">
						<button className="btn btn-primary">Registrarse</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
