import React from "react";

const Button = (props) => {
	return (
		<button
			type="button"
			className="btn btn-primary btn-lg"
			href={props.buttonUrl}>
			{props.buttonLabel}
		</button>
	);
};

export default Button;
