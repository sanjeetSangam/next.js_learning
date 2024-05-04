"use client";

import { ReactNode, useState } from "react";
import ClientComp2 from "./client-comp2";
import ServerComp1 from "./server-comp1";

const ClientComp1 = ({ children }: { children: ReactNode }) => {
	const [name, setName] = useState("Batman");
	return (
		<div>
			<h1>ClientComp1</h1>

			{children}
		</div>
	);
};

export default ClientComp1;
