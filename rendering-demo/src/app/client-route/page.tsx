"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTheme } from "@/components/themeProvider";
import { clientSideFunction } from "@/utils/clientUtils";

// import { serverSideFunction } from "@/utils/server-utils";

const ClientRoute = () => {
	console.log("client route rendered");
	// const result = serverSideFunction();  // should not user any server methods here
	// return <div>ClientRoute</div>;
	const theme = useTheme();

	const result = clientSideFunction();

	const settings = {
		dots: true,
	};

	return (
		<div className="image-slider-container">
			<h1
				style={{
					color: theme.color.secondary,
				}}
			>
				Client Mode : {result}
			</h1>

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

export default ClientRoute;
