import { ImageSlider } from "@/components/ImageSlider";
import { serverSideFunction } from "@/utils/server-utils";

const ServerRoute = () => {
	console.log("server side render");
	const result = serverSideFunction();
	return (
		<div>
			<h1>ServerRoute</h1>
			<ImageSlider />
		</div>
	);
};

export default ServerRoute;
