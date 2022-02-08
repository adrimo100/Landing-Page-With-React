import React from "react";

import Button from "./button.jsx";

const FirstHeader = () => {
	return (
		<div className="pt-2 mb-3 pb-5 px-5 " style={FirstHeaderStyle}>
			<h1 className="d-block">A Warm Welcome!</h1>
			<p className="d-block">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
				porro aperiam in omnis minus voluptatem earum, voluptas
				repellendus vel atque sapiente temporibus deleniti corrupti
				veritatis! Aut nemo rem impedit iste!
			</p>

			<Button buttonLabel="Call to Action!" buttonUrl="#" />
		</div>
	);
};

const FirstHeaderStyle = {
	background: "rgb(220, 220, 220)",
};

export default FirstHeader;
