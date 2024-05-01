"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useState } from "react";

import "./style.css";

const navLinks = [
	{ name: "Register", href: "/register" },
	{ name: "Login", href: "/login" },
	{ name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({ children }: { children: ReactNode }) {
	const pathName = usePathname();
	const [input, setinput] = useState<string>("");
	return (
		<div>
			<div>
				<input
					type="text"
					placeholder="values"
					value={input}
					onChange={(e) => setinput(e.target.value)}
				/>
			</div>

			{navLinks.map((navLink) => {
				const isActive = pathName.startsWith(navLink.href);
				return (
					<Link
						key={navLink.name}
						href={navLink.href}
						className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
						style={{
							margin: "10px",
						}}
					>
						asd
						{navLink.name}
					</Link>
				);
			})}

			{children}
		</div>
	);
}
