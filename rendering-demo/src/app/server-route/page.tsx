import { ImageSlider } from "@/components/ImageSlider";
// import { clientSideFunction } from "@/utils/clientUtils";
import { serverSideFunction } from "@/utils/server-utils";

const ServerRoute = () => {
	console.log("server side render");
	const result = serverSideFunction();
	// const result2 = clientSideFunction(); // should not include client side method having client-only included, gives error
	return (
		<div>
			<h1>ServerRoute</h1>
			<ImageSlider />
		</div>
	);
};

export default ServerRoute;
