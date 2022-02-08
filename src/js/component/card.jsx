import React from "react";

import Button from "./button.jsx";
import rigoImage from "../../img/rigo-baby.jpg";

const Card = (props) => {
	return (
		<div className="col-lg-12 col-xl-3 mx-auto px-auto text-center border">
			<div className="m-0 p-0">
				<img src={rigoImage} alt="" style={ImageStyle} />
			</div>

			<div className="row d-flex">
				<h3 className="mt-3 w-100 text-center">Card Title</h3>
				<p className="text-center p-2">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Earum assumenda voluptate, laboriosam aperiam obcaecati
					inventore rem voluptatem odit praesentium dolor, delectus
					reiciendis distinctio in veniam cumque exercitationem
					tempore id eligendi.
				</p>
				<div className="bg-light w-100 d-flex justify-content-center align-items-center p-3 border">
					<Button buttonLabel="Find Out More!" />
				</div>
			</div>
		</div>
	);
};

const ImageStyle = { height: "50%", width: "75%" };

export default Card;
