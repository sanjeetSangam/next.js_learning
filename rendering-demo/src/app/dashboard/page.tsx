"use client";

import { useState } from "react";

const DashboardPage = () => {
	const [name, setName] = useState("");
	console.log("name");
	return (
		<div>
			<h1>DashboardPage</h1>
			<input
				type="text"
				placeholder="Type.."
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>

			<p>Hello, {name}!</p>
		</div>
	);
};

export default DashboardPage;
