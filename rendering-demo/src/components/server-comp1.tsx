import fs from "fs";
import ServerComp2 from "./server-comp2";
import ClientComp2 from "./client-comp2";

const ServerComp1 = () => {
	fs.readFileSync("src/components/server-comp1.tsx", "utf-8");
	return (
		<div>
			<h1>ServerComp1</h1>
			<div>
				<ServerComp2 />
				<ClientComp2 />
			</div>
		</div>
	);
};

export default ServerComp1;
