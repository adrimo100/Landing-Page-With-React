import React from "react";
import ReactDOM from "react-dom";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//import components
import Navbar from "./navbar.jsx";
import MainBody from "./mainBody.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<div className="">
			<Navbar />
			<MainBody />
			<Footer />
		</div>
	);
};

export default Home;
