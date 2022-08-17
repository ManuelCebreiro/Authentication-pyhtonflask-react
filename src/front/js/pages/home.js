import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("")
	const token = sessionStorage.getItem("token");
	const handleClick = () => {

		const opts = {
			method: 'POST',
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email: email,
				password: password
			})
		}
		fetch("https://3001-manuelcebre-authenticat-ner8jleetsr.ws-eu61.gitpod.io/api/token", opts)
			.then(resp => {
				if (resp.status === 200) return resp.json();
				else alert("Ha habido un error");
			})
			.then(data => {
				console.log("this came from the backend", data)
				sessionStorage.setItem("token", data.accesss_token);
			})
			.catch(error => {
				console.error("Hubo un error", error);
			})


	}
	return (
		<div className="gradient-custom-3">
			<div id="login">
				<h3 class="text-center text-white pt-5 mt-0 mb-4" >Login form</h3>
				<div className="container vh-100">
					<div id="login-row" class="row justify-content-center align-items-center">
						<div id="login-column" class="col-md-6 bg-white">
							<div id="login-box" class="col-md-12">
								<form id="login-form" class="form" action="" method="post">
									<h3 class="text-center text-info">Login</h3>
									<div class="form-group">
										<label for="username" class="text-info">Username:</label><br />
										<input type="text" name="username" id="username" class="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
									</div>
									<div class="form-group">
										<label for="password" class="text-info">Password:</label><br />
										<input type="text" name="password" class="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
									</div>
									{/* <div class="form-group">
										<label for="remember-me" class="text-info"><span>Remember me</span> <span><input id="remember-me" name="remember-me" type="checkbox" /></span></label><br />
										<input type="submit" name="submit" class="btn btn-info btn-md" value="submit" />
									</div> */}
									<div id="register-link" class="text-right">
										<button class="text-info" onClick={() => { handleClick }}>Registrarse</button>
									</div>

								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
