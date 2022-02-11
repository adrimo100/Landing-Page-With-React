import React from "react";
import propTypes from "prop-types";

import Button from "./button.jsx";
import rigoImage from "../../img/rigo-baby.jpg";

const Card = () => {
	return (
		<div class="card m-2" style={{ width: "18rem" }}>
			<img src={rigoImage} class="card-img-top" alt="..." />
			<div class="card-body text-center p-0">
				<h5 class="card-title mx-1 mt-1">Card title</h5>
				<p class="card-text mx-1">
					Some quick example text to build on the card title and make
					up the bulk of the card's content.
				</p>
				<div className="border w-100 py-3">
					<a href="#" class="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		</div>
	);
};

export default Card;
