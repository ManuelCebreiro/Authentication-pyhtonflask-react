import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("")
	const token = sessionStorage.getItem("token");

	return (
		<div className="gradient-custom-3">
			<div id="login">
				<h3 className="text-center text-white pt-5 mt-0 mb-4" >Login form</h3>
				<div className="container vh-100">
					<div id="login-row" className="row justify-content-center align-items-center">
						<div id="login-column" className="col-md-6 bg-white">
							<div id="login-box" className="col-md-12">
								<div id="login-form" className="form" action="" method="post">
									<h3 className="text-center text-info">Login</h3>
									<div className="form-group">
										<label for="username" className="text-info">Email:</label><br />
										<input type="text" name="username" id="username" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
									</div>
									<div className="form-group">
										<label for="password" className="text-info">Password:</label><br />
										<input type="text" name="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
									</div>
									{/* <div class="form-group">
										<label for="remember-me" class="text-info"><span>Remember me</span> <span><input id="remember-me" name="remember-me" type="checkbox" /></span></label><br />
										<input type="submit" name="submit" class="btn btn-info btn-md" value="submit" />
									</div> */}
									<div id="register-link" className="text-right">
										<Link to="/main" onClick={() => { actions.login(email, password) }}>
											<button className="text-info" >LOG IN</button>
										</Link>
									</div>
									<div id="register-link" className="text-right">
										<button className="text-info" onClick={() => { actions.logOut() }}>LOG OUT</button>
									</div>

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
