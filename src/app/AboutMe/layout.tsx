import React from "react";

const Layout = (props: { children: React.ReactNode }) => {
	return (
		<div>
			<h1>this is a custom layout</h1>
			<div>{props.children}</div>
		</div>
	);
};

export default Layout;
