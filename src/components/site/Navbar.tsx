"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function Navbar() {
	// const [isActive, setIsActive] = useState();
	const pathname = usePathname();
	return (
		<nav className='bg-cyan-950 py-3 px-5'>
			<div className='text-fuchsia-700 text-2xl font-bold'>Kyle Parker</div>
			<div className='flex flex-row gap-4'>
				<Link
					className={`link ${pathname === "/" ? "home" : ""} text-white font-medium tracking-wide`}
					href='/'
				>
					Home
				</Link>
				<Link
					className={`link ${pathname === "/about" ? "active" : ""} text-white font-medium tracking-wide`}
					href='/about'
				>
					About
				</Link>
				<Link
					className={`link ${pathname === "/projects" ? "projects" : ""} text-white font-medium tracking-wide`}
					href='/projects'
				>
					Projects
				</Link>
			</div>
		</nav>
	);
}
