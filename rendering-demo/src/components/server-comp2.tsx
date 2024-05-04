import fs from "fs";

const ServerComp2 = () => {
	fs.readFileSync("src/components/server-comp2.tsx", "utf-8");
	return <div>ServerComp2</div>;
};

export default ServerComp2;
