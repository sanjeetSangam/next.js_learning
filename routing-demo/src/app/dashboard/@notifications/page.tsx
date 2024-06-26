import Card from "@/components/card";
import Link from "next/link";
import React from "react";

const Notifications = () => {
	return (
		<Card>
			<div>
				<Link href={"/dashboard/archived"}>Archived</Link>
			</div>
			<div>Notifications</div>
		</Card>
	);
};

export default Notifications;
