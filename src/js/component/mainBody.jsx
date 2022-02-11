import React from "react";

import FirstHeader from "./firstHeader.jsx";
import SecondHeader from "./secondHeader.jsx";

const MainBody = () => {
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-2 p-0"></div>
				<div className="col-8 p-0">
					<div className="container-fluid">
						<FirstHeader />
						<SecondHeader />
					</div>
				</div>
				<div className="col-2"></div>
			</div>
		</div>
	);
};

export default MainBody;
