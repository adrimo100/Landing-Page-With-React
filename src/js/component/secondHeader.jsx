import React from "react";

import Card from "./card.jsx";

const SecondHeader = () => {
	return (
		<div className="container-fluid">
			<div className="row mb-3 d-flex justify-content-center align-items-center">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
};

export default SecondHeader;
