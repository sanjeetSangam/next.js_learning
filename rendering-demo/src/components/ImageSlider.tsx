"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import { serverSideFunction } from "@/utils/server-utils";

const ImageSlider = () => {
	console.log("image slider rendered");
	// const result = serverSideFunction();  // should not user any server methods here
	// return <div>ClientRoute</div>;

	const settings = {
		dots: true,
	};
	return (
		<div className="image-slider-container">
			<Slider {...settings}>
				<div>
					<img src="https://picsum.photos/400/200" />
				</div>
				<div>
					<img src="https://picsum.photos/400/200" />
				</div>
				<div>
					<img src="https://picsum.photos/400/200" />
				</div>
				<div>
					<img src="https://picsum.photos/400/200" />
				</div>
			</Slider>
		</div>
	);
};

export { ImageSlider };
