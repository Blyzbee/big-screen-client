import React from "react";
import "./icon.scss";
import clsx from "clsx";

const Icon = ({ name, my, mx, ...props }) => {
	return (
		<span
			{...props}
			className={clsx(
				"icon material-symbols-outlined",
				my && "my",
				mx && "mx",
				props.className
			)}
		>
			{name}
		</span>
	);
};

export default Icon;
