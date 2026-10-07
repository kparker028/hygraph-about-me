import Link from "next/link";
import React from "react";

export const Navbar = () => {
	return (
		<nav>
			<div className='text-fuchsia-700'>Link list</div>
			<Link href='/'>Home</Link>
			<Link href='/AboutMe'>About</Link>
			<Link href='/Projects'>Projects</Link>
		</nav>
	);
};
