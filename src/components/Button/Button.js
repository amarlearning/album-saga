import React from "react";
import "./style.css";

const Button = ({ children, isLoading, ...props }) => {
	return (
		<button
			className="btn btn-primary btn-lg mb-3 center center-block"
			disabled={isLoading}
			{...props}
		>
			{isLoading ? "Loading..." : children}
		</button>
	);
};

Button.defaultProps = {
	isLoading: false,
};

export default Button;
