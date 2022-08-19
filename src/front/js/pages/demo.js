import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/demo.css";
import { Context } from "../store/appContext";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("")

	return (
		<div className="container-fluid p-0" id="bodies">
			<section className="vh-100 bg-image-fluid">
				<div className="mask d-flex align-items-center h-100 gradient-custom-3">
					<div className="container h-100">
						<div className="row d-flex justify-content-center align-items-center h-100">
							<div className="col-12 col-md-9 col-lg-7 col-xl-6">
								<div className="card" style={{ borderRadius: "15px" }}>
									<div className="card-body p-5">
										<h2 className="text-uppercase text-center mb-5">Create an account</h2>
										<form>
											<div className="form-outline mb-4">
												<input type="email" id="form3Example3cg" className="form-control form-control-lg"
													onChange={(e) => {
														setEmail(e.target.value);
													}} />
												<label className="form-label" for="form3Example3cg"

												>Your Email</label>
											</div>
											<div className="form-outline mb-4">
												<input type="password" id="form3Example4cg" className="form-control form-control-lg"
													onChange={(e) => {
														setPassword(e.target.value);
													}} />
												<label className="form-label" for="form3Example4cg"

												>Password</label>
											</div>

											<div className="d-flex justify-content-center">
												<Link to="/" onClick={() => actions.register(email, password)}>
													<button type="button"
														className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
													>Register
													</button>
												</Link>
											</div>

											<p className="text-center text-muted mt-5 mb-0">Have already an account? <a href="#!"
												className="fw-bold text-body"><u>Login here</u></a></p>

										</form>

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		</div>
	);
};
