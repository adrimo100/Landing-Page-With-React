import React from "react";

import rigoImage from "../../img/rigo-baby.jpg";

export const Navbar = () => {
	return (
		<header className="navbar navbar-expand-md navbar-dark bd-navbar bg-dark sticky-top text-right w-100">
			<nav className="container-xxl flex-wrap flex-sm-nowrap d-flex w-100 mx-5 px-5">
				<a className="navbar-brand d-flex" href="#">
					<img
						src={rigoImage}
						alt="RigoLogo"
						style={{ width: "50px" }}
					/>
					<h3 className="ml-1">Start Bootstrap</h3>
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon text-light"></span>
				</button>
				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item active">
							<a className="nav-link text-white" href="#">
								Home <span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-white" href="#">
								About
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-white" href="#">
								Services
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-white" href="#">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
