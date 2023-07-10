import Link from "next/link";
import React from "react";

export const Navbar = () => {
	return (
		<nav>
			<div>Link list</div>
			<Link href='/'>Home</Link>
			<Link href='/AboutMe'>About</Link>
			<Link href='/Projects'>Projects</Link>
		</nav>
	);
};
