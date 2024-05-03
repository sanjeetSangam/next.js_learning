import { ReactNode } from "react";

const DashBoardLayout = ({
	children,
	users,
	revenue,
	notifications,
	login,
}: {
	children: ReactNode;
	users: ReactNode;
	revenue: ReactNode;
	notifications: ReactNode;
	login: ReactNode;
}) => {
	const isLoggedIn = true;

	return isLoggedIn ? (
		<div>
			<h1>DashBoard Page</h1>
			<div>{children}</div>

			<div style={{ display: "flex" }}>
				<div style={{ display: "flex", flexDirection: "column" }}>
					<div>{users}</div>
					<div>{revenue}</div>
				</div>

				<div style={{ display: "flex", flex: 1 }}>{notifications}</div>
			</div>
		</div>
	) : (
		<div style={{ border: "1px solid red" }}>{login}</div>
	);
};

export default DashBoardLayout;
