import { Link } from "react-router-dom";
import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";



export const Navbar = () => {
	const { store, actions } = useContext(Context);

	const navigate = useNavigate();
	let permiso = store.accesoprivado

	return (
		<nav className="navbar navbar-light bg-light py-0">
			<div className="container-fluid  gradient-custom-3">
				<Link to="/body"
					onClick={() => {
						if (permiso == false) {
							navigate("/")
						}
					}}
				>
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
					<Link to="/" onClick={() => actions.logOut()}>
						<button className="btn btn-primary me-3">Log Out</button>
					</Link>

				</div>
			</div>
		</nav >
	);
};
