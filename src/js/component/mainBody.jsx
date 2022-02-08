import React from "react";

import FirstHeader from "./firstHeader.jsx";
import SecondHeader from "./secondHeader.jsx";

const MainBody = () => {
	return (
		<div className="row">
			<div className="col-2"></div>
			<div className="col-8">
				<div className="container-fluid">
					<FirstHeader />
					<SecondHeader />
				</div>
			</div>
			<div className="col-2"></div>
		</div>
	);
};

export default MainBody;
