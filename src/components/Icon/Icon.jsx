import React from "react";
import "./icon.scss";
import clsx from "clsx";

const Icon = ({ name, my, mx }) => {
	return (
		<span
			className={clsx("icon material-symbols-outlined", my && "my", mx && "mx")}
		>
			{name}
		</span>
	);
};

export default Icon;
