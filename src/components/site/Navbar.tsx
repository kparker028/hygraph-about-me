"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun } from "lucide-react";
import { useEffect, useSyncExternalStore } from "react";

const links = [
	{ href: "/", label: "Home" },
	{ href: "/about", label: "Resume" },
	{ href: "/projects", label: "Projects" },
];

function subscribeToTheme(onStoreChange: () => void) {
	window.addEventListener("storage", onStoreChange);
	window.addEventListener("themechange", onStoreChange);

	return () => {
		window.removeEventListener("storage", onStoreChange);
		window.removeEventListener("themechange", onStoreChange);
	};
}

function getThemeSnapshot() {
	return window.localStorage.getItem("theme") !== "light";
}

function getServerThemeSnapshot() {
	return true;
}

export function Navbar() {
	const pathname = usePathname();
	const isDark = useSyncExternalStore(
		subscribeToTheme,
		getThemeSnapshot,
		getServerThemeSnapshot,
	);

	useEffect(() => {
		document.documentElement.classList.toggle("dark", isDark);
	}, [isDark]);

	function toggleTheme() {
		const nextIsDark = !isDark;

		window.localStorage.setItem("theme", nextIsDark ? "dark" : "light");
		window.dispatchEvent(new Event("themechange"));
	}

	return (
		<nav className='border-b bg-surface/95 px-5 py-3 backdrop-blur fixed w-full z-1'>
			<div className='mx-auto flex max-w-6xl items-center justify-between gap-4'>
				<Link
					className='text-lg font-bold tracking-tight text-heading'
					href='/'
				>
					Kyle Parker
				</Link>
				<div className='flex items-center gap-1 sm:gap-2'>
					{links.map((link) => {
						const isActive = pathname === link.href;

						return (
							<Link
								className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
									isActive
										? "bg-elevated text-heading"
										: "text-body hover:bg-elevated hover:text-heading"
								}`}
								href={link.href}
								key={link.href}
							>
								{link.label}
							</Link>
						);
					})}
					<button
						aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
						aria-pressed={isDark}
						className='ml-1 rounded-md border bg-elevated p-2 text-cyan-accent transition-colors hover:border-primary hover:text-primary'
						onClick={toggleTheme}
						type='button'
					>
						{isDark ? (
							<Sun aria-hidden='true' className='size-4' />
						) : (
							<Moon aria-hidden='true' className='size-4' />
						)}
					</button>
				</div>
			</div>
		</nav>
	);
}
