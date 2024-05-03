import Card from "@/components/card";
import Link from "next/link";
import React from "react";

const Archieved = () => {
	return (
		<Card>
			<div>
				<Link href={"/dashboard"}>Default</Link>
			</div>
			<div>Archived</div>
		</Card>
	);
};

export default Archieved;
